import { engineDrive, engineStart, engineStop } from '../Api/engineApi';
import storage from '../global';
import { newWinner } from './winner-events';

/** Animates car after the start of the engine and stops animation
 * if the engine is broken in mid-way.
 */
async function animateCar(
  id: number,
  raceCar: HTMLElement,
  duration: number,
  trackLength: number,
) {
  const start = performance.now();
  const car = raceCar;

  function animate(time: number) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const length = trackLength * timeFraction;

    car.style.transform = `translateX(${length}px)`;

    if (timeFraction < 1) {
      storage.animations[id] = requestAnimationFrame(animate);
    }
  }

  storage.animations[id] = requestAnimationFrame(animate);

  const result = await engineDrive(id);
  if (result !== 200) {
    cancelAnimationFrame(storage.animations[id]);
    return false;
  }
  return true;
}

/** Starts the car's engine: gets velocity from the server and launch animation */
export async function startCar(id: number) {
  const startButton = document.querySelector(`.btn-start-car[data-id="${id}"]`) as HTMLButtonElement;
  const resetButton = document.querySelector(`.btn-reset-car[data-id="${id}"]`) as HTMLButtonElement;
  const raceTrack = document.querySelector(`.racing-track[data-id="${id}"]`) as HTMLElement;
  const raceCar = document.querySelector(`.car[data-id="${id}"]`) as HTMLElement;

  raceCar.style.transform = 'none';
  startButton.disabled = true;
  resetButton.disabled = false;

  const trackLength = raceTrack.offsetWidth - raceCar.offsetWidth;
  const { velocity, distance } = await engineStart(id) as { velocity: number, distance: number };
  const duration = distance / velocity;
  const result = await animateCar(id, raceCar, duration, trackLength);
  return result ? { id, duration } : Promise.reject();
}

/** Resets the car to the starting position after the Reset button pressed */
export async function resetCar(id: number) {
  const startButton = document.querySelector(`.btn-start-car[data-id="${id}"]`) as HTMLButtonElement;
  const resetButton = document.querySelector(`.btn-reset-car[data-id="${id}"]`) as HTMLButtonElement;
  const raceCar = document.querySelector(`.car[data-id="${id}"]`) as HTMLElement;

  resetButton.disabled = true;

  await engineStop(id);
  cancelAnimationFrame(storage.animations[id]);

  startButton.disabled = false;
  raceCar.style.transform = 'none';
}

/** Sends Reset car command for each of the cars in the storage */
export function resetAllCars() {
  storage.cars.forEach((e) => resetCar(e.id));
}

/** Shows modal window with the winner name and time */
function showModalWinner(id: number, duration: number) {
  document.querySelector('.inner-popup__text').innerHTML = `${storage.cars.find((e) => e.id === id).name} finished!<br>Time: ${Math.floor(duration) / 1000} sec`;
  document.querySelector('.modal-overlay').classList.remove('hide');
}

/** Starts all the cars and after one of them finishes, shows modal window and adds a winner */
export async function startAllCars() {
  const raceButton = document.querySelector('.btn-race') as HTMLButtonElement;
  raceButton.disabled = true;
  Promise.any(storage.cars.map((e) => startCar(e.id)))
    .then((result) => {
      showModalWinner(result.id, result.duration);
      newWinner(result.id, Math.floor(result.duration) / 1000);
    })
    .catch(() => {})
    .finally(() => {
      raceButton.disabled = false;
    });
}

/** Event listeners for the buttons */
export function resetAllCarsButtonEvent() {
  document.querySelector('.btn-reset').addEventListener('click', resetAllCars);
}

export function raceButtonEvent() {
  document.querySelector('.btn-race').addEventListener('click', startAllCars);
}

export function closeModalEvent() {
  const modal = document.querySelector('.modal-overlay');
  const modalButton = document.querySelector('.modal-popup__button');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hide');
  });
  modalButton.addEventListener('click', () => {
    modal.classList.add('hide');
  });
}
