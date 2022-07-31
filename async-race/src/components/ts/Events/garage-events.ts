import {
  createCar, deleteCar, getCars, updateCar,
} from '../Api/garageApi';
import { deleteWinner } from '../Api/winnersApi';
import { drawRaceTrack } from '../DOM/draw-base-dom';
import storage, { generateColor, generateName } from '../global';
import { resetCar, startCar } from './race-events';
import { updateWinnersTable, updateWinnerStorage } from './winner-events';

/** Updates storage Cars and CarsNumber */
export async function updateCarStorage() {
  try {
    const { cars, carsNumber } = await getCars(storage.garagePage);
    storage.cars = cars;
    storage.carsNumber = carsNumber;
  } catch (err) {
    storage.carsNumber = 'SERVER LOST';
  }
}

/** Redraws cars number in the dashboard,
 * racetrack with cars and enables/disables pagination buttons */
export function updateGarage() {
  const carsNumberSpan = document.querySelector('.cars-number');
  const racingContainer = document.querySelector('.racing-container');
  const garageButtonPrev = document.querySelector('.btn-garage-prev') as HTMLButtonElement;
  const garageButtonNext = document.querySelector('.btn-garage-next') as HTMLButtonElement;
  const garagePageNumber = document.querySelector('.garage-page');

  carsNumberSpan.innerHTML = storage.carsNumber;
  racingContainer.innerHTML = '';
  drawRaceTrack(storage.cars, racingContainer);
  garageButtonPrev.disabled = (storage.garagePage === 1);
  garageButtonNext.disabled = (Number.isNaN(Number(storage.carsNumber))
    || Number(storage.carsNumber) <= storage.garagePage * 7);
  garagePageNumber.innerHTML = `${storage.garagePage} / ${Math.ceil(Number(storage.carsNumber) / 7)}`;
}

/** Creates new car with user entered name and color. Generates random name if no input. */
const createCarBtn = async () => {
  const inputCreateCar = document.querySelector('.choose-name__input') as HTMLInputElement;
  const colorCreateCar = document.querySelector('.color-picker') as HTMLInputElement;

  if (!inputCreateCar.value) inputCreateCar.value = generateName();

  await createCar(inputCreateCar.value, colorCreateCar.value);
  await updateCarStorage();
  updateGarage();

  inputCreateCar.value = '';
};

/** Updates selected car with user entered name and color. */
const updateCarBtn = async () => {
  const inputCreateCar = document.querySelector('.choose-name__input') as HTMLInputElement;
  const colorCreateCar = document.querySelector('.color-picker') as HTMLInputElement;

  await updateCar(storage.updateCar, inputCreateCar.value, colorCreateCar.value);
  await updateCarStorage();
  updateGarage();
  await updateWinnerStorage();
  updateWinnersTable();
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  createCarButtonEvent();
};

/** Clears car name input and restores Create Car button default event */
export function createCarButtonEvent() {
  const inputCreateCar = document.querySelector('.choose-name__input') as HTMLInputElement;
  const buttonCreateCar = document.querySelector('.btn-create') as HTMLInputElement;

  inputCreateCar.value = '';
  buttonCreateCar.classList.add('btn-active');
  buttonCreateCar.innerHTML = 'CREATE CAR';
  buttonCreateCar.removeEventListener('click', updateCarBtn);
  buttonCreateCar.addEventListener('click', createCarBtn);
}

/** On edit car button click changes Create Car button to the Edit Car button.
 * Second click on the button returns Create Car button back, cancelling the edit. */
function editCar(target: HTMLElement) {
  const inputCreateCar = document.querySelector('.choose-name__input') as HTMLInputElement;
  const colorCreateCar = document.querySelector('.color-picker') as HTMLInputElement;
  const buttonCreateCar = document.querySelector('.btn-create') as HTMLInputElement;
  const allButtonsEditCar = document.querySelectorAll('.btn-edit') as NodeListOf<HTMLInputElement>;

  target.classList.toggle('btn-active');
  if (target.classList.contains('btn-active')) {
    allButtonsEditCar.forEach((e) => {
      if (e !== target) e.classList.remove('btn-active');
    });
    const id = Number(target.dataset.id);
    const car = storage.cars.find((x) => x.id === id);
    storage.updateCar = id;
    inputCreateCar.value = car.name;
    colorCreateCar.value = car.color;
    buttonCreateCar.classList.remove('btn-active');
    buttonCreateCar.innerHTML = 'UPDATE CAR';
    buttonCreateCar.removeEventListener('click', createCarBtn);
    buttonCreateCar.addEventListener('click', updateCarBtn);
  } else {
    createCarButtonEvent();
  }
}

/** On delete car button deletes the car and redraws the garage. */
async function removeCar(target: HTMLElement) {
  const id = Number(target.dataset.id);
  await deleteCar(id);
  await deleteWinner(id);
  await updateCarStorage();
  updateGarage();
  await updateWinnerStorage();
  updateWinnersTable();
}

/** Event listeners for all HUD buttons: edit car, delete car, start and stop */
export function carHUDButtonsEvents() {
  document.querySelector('.racing-container').addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.btn-edit')) editCar(target.closest('.btn-edit'));
    if (target.closest('.btn-delete')) removeCar(target.closest('.btn-delete'));
    if (target.classList.contains('btn-reset-car')) resetCar(Number(target.dataset.id)).catch(() => { });
    if (target.classList.contains('btn-start-car')) startCar(Number(target.dataset.id)).catch(() => { });
  });
}

/** Generates 100 cars with random names and color asynchronously.
 * Disables the button until complete. */
export function generate100CarsButtonEvent() {
  const generateButton = document.querySelector('.btn-generate') as HTMLButtonElement;

  generateButton.addEventListener('click', async () => {
    const randomNames = Array.from({ length: 100 }, () => generateName());
    const randomColors = Array.from({ length: 100 }, () => generateColor());

    generateButton.disabled = true;
    generateButton.innerHTML = 'GENERATING...';

    await Promise.all(randomNames.map((e, i) => createCar(randomNames[i], randomColors[i])));
    await updateCarStorage();
    updateGarage();

    generateButton.disabled = false;
    generateButton.innerHTML = 'GENERATE 100 CARS';
  });
}

/** Event listeners for garage pagination buttons */
export function garageFooterButtonsEvents() {
  const garageButtonPrev = document.querySelector('.btn-garage-prev') as HTMLButtonElement;
  const garageButtonNext = document.querySelector('.btn-garage-next') as HTMLButtonElement;

  garageButtonPrev.addEventListener('click', async () => {
    if (storage.garagePage === 1) return;
    storage.garagePage -= 1;
    await updateCarStorage();
    updateGarage();
    createCarButtonEvent();
  });

  garageButtonNext.addEventListener('click', async () => {
    if (storage.garagePage * 7 < Number(storage.carsNumber)) {
      storage.garagePage += 1;
      await updateCarStorage();
      updateGarage();
      createCarButtonEvent();
    }
  });
}
