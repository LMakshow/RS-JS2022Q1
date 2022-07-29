import { engineDrive, engineStart, engineStop } from '../Api/engineApi';
import storage from '../global';

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

export async function startCar(id: number) {
  const startButton = document.querySelector(`.btn-start-car[data-id="${id}"]`) as HTMLButtonElement;
  const resetButton = document.querySelector(`.btn-reset-car[data-id="${id}"]`) as HTMLButtonElement;
  const raceTrack = document.querySelector(`.racing-track[data-id="${id}"]`) as HTMLElement;
  const raceCar = document.querySelector(`.car[data-id="${id}"]`) as HTMLElement;

  startButton.disabled = true;
  resetButton.disabled = false;

  const { velocity, distance } = await engineStart(id) as { velocity: number, distance: number };
  const duration = distance / velocity;
  const trackLength = raceTrack.offsetWidth - raceCar.offsetWidth;
  const result = await animateCar(id, raceCar, duration, trackLength);
  return result ? { id, duration } : Promise.reject();
}

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

export function resetAllCars() {
  storage.cars.forEach((e) => resetCar(e.id));
}

export function startAllCars() {
  Promise.any(storage.cars.map((e) => startCar(e.id)))
    .then((result) => console.log(`car #${result.id} finished with ${result.duration} sec`));
}

export function resetAllCarsButtonEvent() {
  document.querySelector('.btn-reset').addEventListener('click', resetAllCars);
}

export function raceButtonEvent() {
  document.querySelector('.btn-race').addEventListener('click', startAllCars);
}
