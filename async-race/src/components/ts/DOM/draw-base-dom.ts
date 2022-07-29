import {
  headerHtml, footerHtml, drawCarContainer, garageDashboardHtml,
  drawGarageFooter, drawWinnersTable, drawWinnersFooter, modalHtml, winnersHeaderHtml,
} from './DOM-html';
import { Car, Winner } from '../Api/apiGlobal';

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

export function drawGarage(carsNumber: number, cars: Car[], page = 1) {
  const main = document.createElement('main');
  main.classList.add('garage');

  const dashboard = document.createElement('div');
  dashboard.classList.add('dashboard');
  dashboard.innerHTML = garageDashboardHtml(carsNumber);
  main.append(dashboard);

  const racingContainer = document.createElement('div');
  racingContainer.classList.add('racing-container');
  main.append(racingContainer);

  drawRaceTrack(cars, racingContainer);

  const garageFooter = document.createElement('div');
  garageFooter.classList.add('garage__footer');
  garageFooter.innerHTML = drawGarageFooter(carsNumber, page);
  main.append(garageFooter);

  container.append(main);
}

export function drawWinners(winnersNumber: number, winners: Winner[], page = 1) {
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
  winnersTableHeader.innerHTML = winnersHeaderHtml;
  winnersTable.append(winnersTableHeader);

  const winnersTableList = document.createElement('table');
  winnersTableList.classList.add('winners-table__list');
  winnersTableList.innerHTML = drawWinnersTable(winners);
  winnersTable.append(winnersTableList);

  winList.append(winnersTable);

  const winnersFooter = document.createElement('div');
  winnersFooter.classList.add('winners__footer');
  winnersFooter.innerHTML = drawWinnersFooter(winnersNumber, page);
  winList.append(winnersFooter);

  container.append(winList);
}

export function drawFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = footerHtml;
  container.append(footer);
}

export function drawModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal-overlay');
  modal.classList.add('hide');
  modal.innerHTML = modalHtml;
  container.append(modal);
}
