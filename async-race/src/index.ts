import {
  clearBody, drawFooter, drawGarage, drawHeader, drawWinners,
} from './components/ts/DOM/draw-base-dom';
import storage from './components/ts/global';
import './global.scss';

// Draw DOM for the first launch
clearBody();
drawHeader();
drawGarage(Number(storage.carsNumber), storage.cars, storage.garagePage);
drawWinners(Number(storage.winnersNumber), storage.winners, storage.winnersPage);
drawFooter();
