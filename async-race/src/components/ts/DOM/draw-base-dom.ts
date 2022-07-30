import {
  headerHtml, footerHtml, drawCarContainer, garageDashboardHtml,
  drawGarageFooter, drawWinnersTable, drawWinnersFooter,
  modalHtml, drawWinnersNumberText, waitForServerHtml, drawWinnersTableHeader,
} from './DOM-html';
import { Car } from '../Api/apiGlobal';
import storage from '../global';

const container = document.createElement('div');
container.classList.add('container');

export function clearBody() {
  document.body.innerHTML = '';
  document.body.append(container);
}

export function drawHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = headerHtml;
  container.append(header);
}

export function drawRaceTrack(cars: Car[], racingContainer: Element) {
  cars.forEach((car) => {
    const carContainer = document.createElement('div');
    carContainer.classList.add('car-container');
    carContainer.innerHTML = (drawCarContainer(car));
    racingContainer.append(carContainer);
  });
}

export function drawWaitForServer() {
  const waitForServer = document.createElement('div');
  waitForServer.classList.add('wait-for-server');
  waitForServer.classList.add('btn-text');
  waitForServer.innerHTML = waitForServerHtml;
  container.append(waitForServer);
}

export function removeWaitForServer() {
  const waitForServer = document.querySelector('.wait-for-server');
  waitForServer.remove();
}

export function drawGarage() {
  const main = document.createElement('main');
  main.classList.add('garage');

  const dashboard = document.createElement('div');
  dashboard.classList.add('dashboard');
  dashboard.innerHTML = garageDashboardHtml(storage.carsNumber);
  main.append(dashboard);

  const racingContainer = document.createElement('div');
  racingContainer.classList.add('racing-container');
  main.append(racingContainer);

  drawRaceTrack(storage.cars, racingContainer);

  container.append(main);
}

export function drawWinners() {
  const winList = document.createElement('div');
  winList.classList.add('winners');
  winList.classList.add('hide');

  const winnersText = document.createElement('h2');
  winnersText.classList.add('winners-text');
  winnersText.innerHTML = 'Winners';
  winList.append(winnersText);

  const winnersTable = document.createElement('div');
  winnersTable.classList.add('table-container');

  const winnersTableHeader = document.createElement('table');
  winnersTableHeader.classList.add('winners-table');
  winnersTableHeader.innerHTML = drawWinnersTableHeader(storage.winnersSort, storage.winnersOrder);
  winnersTable.append(winnersTableHeader);

  const winnersTableList = document.createElement('table');
  winnersTableList.classList.add('winners-table__list');
  winnersTableList.innerHTML = drawWinnersTable(storage.winners, storage.winnersPage);
  winnersTable.append(winnersTableList);

  winnersTable.innerHTML += drawWinnersNumberText(storage.winnersNumber);

  winList.append(winnersTable);

  container.append(winList);
}

export function drawFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const garageFooter = document.createElement('div');
  garageFooter.classList.add('garage__footer');
  garageFooter.innerHTML = drawGarageFooter(storage.carsNumber, storage.garagePage);
  footer.append(garageFooter);

  const winnersFooter = document.createElement('div');
  winnersFooter.classList.add('winners__footer');
  winnersFooter.classList.add('hide');
  winnersFooter.innerHTML = drawWinnersFooter(storage.winnersNumber, storage.winnersPage);
  footer.append(winnersFooter);

  footer.innerHTML += footerHtml;
  container.append(footer);
}

export function drawModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal-overlay');
  modal.classList.add('hide');
  modal.innerHTML = modalHtml;
  container.append(modal);
}
