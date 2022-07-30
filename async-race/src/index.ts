import {
  clearBody, drawFooter, drawGarage, drawHeader,
  drawModal, drawWaitForServer, drawWinners,
  removeWaitForServer,
} from './components/ts/DOM/draw-base-dom';
import {
  carHUDButtonsEvents,
  createCarButtonEvent, garageFooterButtonsEvents, generate100CarsButtonEvent, updateCarStorage,
} from './components/ts/Events/garage-events';
import navButtonsEvents from './components/ts/Events/nav-events';
import { closeModalEvent, raceButtonEvent, resetAllCarsButtonEvent } from './components/ts/Events/race-events';
import { sortWinnersTableEvents, updateWinnerStorage, winnersFooterButtonsEvents } from './components/ts/Events/winner-events';
// import storage from './components/ts/global';
import './global.scss';

// Draw DOM for the first launch
clearBody();
drawHeader();
drawWaitForServer();
await updateCarStorage();
await updateWinnerStorage();
removeWaitForServer();
drawGarage();
drawWinners();
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

// Create event listeners for winners page
winnersFooterButtonsEvents();
sortWinnersTableEvents();
