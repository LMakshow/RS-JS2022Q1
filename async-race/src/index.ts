import {
  clearBody, drawFooter, drawGarage, drawHeader, drawModal, drawWinners,
} from './components/ts/DOM/draw-base-dom';
import {
  carHUDButtonsEvents,
  createCarButtonEvent, garageFooterButtonsEvents, generate100CarsButtonEvent,
} from './components/ts/Events/garage-events';
import navButtonsEvents from './components/ts/Events/nav-events';
import { closeModalEvent, raceButtonEvent, resetAllCarsButtonEvent } from './components/ts/Events/race-events';
import storage from './components/ts/global';
import './global.scss';

// Draw DOM for the first launch
clearBody();
drawHeader();
drawGarage(Number(storage.carsNumber), storage.cars, storage.garagePage);
drawWinners(Number(storage.winnersNumber), storage.winners, storage.winnersPage);
drawFooter();
drawModal();

// Create event listeners for garage
navButtonsEvents();
createCarButtonEvent();
generate100CarsButtonEvent();
garageFooterButtonsEvents();

// Create event listeners for race
carHUDButtonsEvents();
resetAllCarsButtonEvent();
raceButtonEvent();
closeModalEvent();
