import { createCar, getCars } from '../Api/garageApi';
import { drawRaceTrack } from '../DOM/draw-base-dom';
import storage, { generateColor, generateName } from '../global';

export async function updateCarStorage() {
  const { cars, carsNumber } = await getCars(storage.garagePage);
  storage.cars = cars;
  storage.carsNumber = carsNumber;
}

export function updateGarage() {
  const carsNumberSpan = document.querySelector('.cars-number');
  const racingContainer = document.querySelector('.racing-container');
  const garageButtonPrev = document.querySelector('.btn-garage-prev') as HTMLButtonElement;
  const garageButtonNext = document.querySelector('.btn-garage-next') as HTMLButtonElement;
  const garagePageNumber = document.querySelector('.garage-page');

  carsNumberSpan.innerHTML = String(storage.carsNumber);
  racingContainer.innerHTML = '';
  drawRaceTrack(storage.cars, racingContainer);
  garageButtonPrev.disabled = (storage.garagePage === 1);
  garageButtonNext.disabled = (storage.garagePage * 7 >= storage.carsNumber);
  garagePageNumber.innerHTML = `${storage.garagePage} / ${Math.ceil(storage.carsNumber / 7)}`;
}

export function navButtonsEvents() {
  function toggleNavButtons() {
    document.querySelector('.btn-garage').classList.toggle('btn-active');
    document.querySelector('.btn-winners').classList.toggle('btn-active');
    document.querySelector('.garage').classList.toggle('hide');
    document.querySelector('.winners').classList.toggle('hide');
  }
  document.querySelector('.btn-garage').addEventListener('click', () => {
    toggleNavButtons();
  });
  document.querySelector('.btn-winners').addEventListener('click', () => {
    toggleNavButtons();
  });
}

export function createCarButtonEvent() {
  document.querySelector('.btn-create').addEventListener('click', async () => {
    const inputCreateCar = document.querySelector('.choose-name__input') as HTMLInputElement;
    const colorCreateCar = document.querySelector('.color-picker') as HTMLInputElement;

    if (!inputCreateCar.value) inputCreateCar.value = generateName();

    await createCar(inputCreateCar.value, colorCreateCar.value);
    await updateCarStorage();
    updateGarage();

    inputCreateCar.value = '';
  });
}

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

export function garageFooterButtonsEvents() {
  const garageButtonPrev = document.querySelector('.btn-garage-prev') as HTMLButtonElement;
  const garageButtonNext = document.querySelector('.btn-garage-next') as HTMLButtonElement;

  garageButtonPrev.addEventListener('click', async () => {
    if (storage.garagePage === 1) return;
    storage.garagePage -= 1;
    await updateCarStorage();
    updateGarage();
  });

  garageButtonNext.addEventListener('click', async () => {
    if (storage.garagePage * 7 >= storage.carsNumber) return;
    storage.garagePage += 1;
    await updateCarStorage();
    updateGarage();
  });
}
