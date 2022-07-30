import { Car, Winner } from '../Api/apiGlobal';
import drawCar from './draw-car';

export const headerHtml = `<nav class="nav">
<button class="btn btn-garage btn-active">
  <img alt="" class="btn-img" src="./assets/icons/btn-garage.svg" />
  <p class="btn-text">GARAGE</p>
</button>
<button class="btn btn-winners">
  <img alt="" class="btn-img" src="./assets/icons/btn-winners.svg" />
  <p class="btn-text">WINNERS</p>
</button>
</nav>
<h1 class="logo">Async&nbsp;&nbsp;Race</h1>`;

export const footerHtml = `<div class="footer__links">
<a class="footer__github footer-text footer__link" href="https://github.com/LMakshow">Made by Maksym Lytvyn<img
    src="./assets/icons/github.svg" alt="GitHub"></a>
<a class="footer__link" href="https://rs.school/"><img src="./assets/icons/rss.svg" alt="GitHub"></a>
</div>`;

export function garageDashboardHtml(carsNumber: string) {
  return `<div class="dashboard-container">
  <div class="generate-container">
    <p class="txt">CARS IN THE GARAGE: <span class="cars-number">${carsNumber}</span></p>
    <button class="btn btn-generate txt btn-active">
      GENERATE 100 CARS
    </button>
  </div>
  <div class="create-container">
    <div class="choose-name">
      <label for="car-name" class="txt">NAME:</label>
      <input id="car-name" class="choose-name__input" placeholder="Enter car name" />
    </div>
    <div class="choose-color">
      <label for="car-color" class="txt">COLOR:</label>
      <input class="color-picker" type="color" id="car-color" name="car-color" value="#bf0000">
    </div>
    <button class="btn btn-create txt btn-active">
      CREATE CAR
    </button>
  </div>
</div>
<button class="btn btn-text btn-reset">
    RETURN CARS<br />
    TO THE START
</button>
<button class="btn btn-race btn-active">
  <p class="btn-text">START</p>
  <p class="btn-text-big">RACE</p>
</button>`;
}

export function drawCarContainer(car: Car) {
  return `<div class="car-hud">
    <div class="car-hud__top">
      <div class="btn btn-edit" data-id=${car.id}>
        <img alt="E" class="btn-img_small" src="./assets/icons/btn-edit.svg" />
      </div>
      <p class="car-name">${car.name}</p>
      <div class="btn btn-delete" data-id=${car.id}>
        <img alt="X" class="btn-img_small" src="./assets/icons/btn-delete.svg" />
      </div>
    </div>
    <div class="car-hud__bottom">
      <button class="btn btn-reset-car txt" data-id=${car.id} disabled>
        RESET
      </button>
      <button class="btn btn-start-car txt btn-active" data-id=${car.id}>
        START
      </button>
    </div>
  </div>

  <div class="racing-track" data-id=${car.id}>
    <div class="car car-${car.id}" data-id=${car.id}>
     ${drawCar(car.color)}
    </div>
  </div>
  <img alt="" class="img-finish-line" src="./assets/images/finish-line.svg" />`;
}

export function drawGarageFooter(carsNumber: string, garagePage: number) {
  const carsNum = Number(carsNumber);
  return `<button class="btn btn-text btn-garage-prev" ${garagePage === 1 ? 'disabled' : ''}>
  PREV
</button>
<div class="btn-text garage-page">${garagePage} / ${Math.ceil(carsNum / 7)}</div>
<button class="btn btn-text btn-garage-next" ${carsNum > garagePage * 7 ? '' : 'disabled'}>
  NEXT
</button>`;
}

export function drawWinnersTableHeader(winnersSort: 'id' | 'wins' | 'time', winnersOrder: 'ASC' | 'DESC') {
  return `<colgroup>
<col class="winners-table__no">
<col class="winners-table__winner">
<col class="winners-table__wins">
<col class="winners-table__best-time">
</colgroup>
<tr>
<th class="winners-table__header">No</th>
<th class="winners-table__header">Winner</th>
<th class="winners-table__header"><div class="sort-wins">Wins<img class="sort-wins__img ${winnersSort === 'wins' ? '' : 'hide'} ${winnersOrder === 'ASC' ? 'turn-180' : ''}" src="./assets/icons/arrow.svg" alt="▼"></div></th>
<th class="winners-table__header"><div class="sort-time">Time<img class="sort-time__img ${winnersSort === 'time' ? '' : 'hide'} ${winnersOrder === 'ASC' ? '' : 'turn-180'}" src="./assets/icons/arrow.svg" alt="▼"></div></th>
</tr>`;
}

export function drawWinnersTable(winners: Winner[], winnersPage: number) {
  let innerHTML = `<colgroup>
    <col class="winners-table__no">
    <col class="winners-table__winner">
    <col class="winners-table__wins">
    <col class="winners-table__best-time">
  </colgroup>`;
  if (winners.length === 0) {
    innerHTML += `<tr>
    <th class="winners-table__cell" colspan="4">No winners yet! Time to start a race!</th>
  </tr>`;
  }
  if (winners.length > 0) {
    innerHTML += `<tr>
    <th class="${winnersPage === 1 ? 'winners-table__winner' : 'winners-table__cell'}">${winnersPage * 10 - 9}</th>
    <th class="${winnersPage === 1 ? 'winners-table__winner' : 'winners-table__cell'}"><div class="winners-table__container"><div class="winners-table__img">${drawCar(winners[0].color)}</div><span class="winner-table__name txt">${winners[0].name}</span></div></th>
    <th class="${winnersPage === 1 ? 'winners-table__winner' : 'winners-table__cell'}">${winners[0].wins}</th>
    <th class="${winnersPage === 1 ? 'winners-table__winner' : 'winners-table__cell'}">${winners[0].time}</th>
  </tr>`;
  }
  if (winners.length > 1) {
    winners.slice(1).forEach((winner, index) => {
      innerHTML += `<tr>
      <th class="winners-table__cell">${winnersPage * 10 - 10 + index + 2}</th>
      <th class="winners-table__cell"><div class="winners-table__container"><div class="winners-table__img">${drawCar(winner.color)}</div><span class="winner-table__name txt">${winner.name}</span></div></th>
      <th class="winners-table__cell">${winner.wins}</th>
      <th class="winners-table__cell">${winner.time}</th>
      </tr>`;
    });
  }
  return innerHTML;
}

export function drawWinnersNumberText(winnersNumber: string) {
  return `<div class="winners-number-container">
  <p class="winners-number-text txt">TOTAL WINNERS: <span class="cars-number">${winnersNumber}</span></p>
</div>`;
}

export function drawWinnersFooter(winnersNumber: string, winnersPage: number) {
  const winnersNum = Number(winnersNumber);
  return `<button class="btn btn-text btn-winner-prev" ${winnersPage === 1 ? 'disabled' : ''}>
  PREV
</button>
<div class="btn-text winners-page">${winnersPage} / ${Math.ceil(winnersNum / 10)}</div>
<button class="btn btn-text btn-winner-next" ${winnersNum > winnersPage * 10 ? '' : 'disabled'}>
  NEXT
</button>`;
}

export const waitForServerHtml = 'Waiting for the server response<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';

export const modalHtml = `<div class="winner-popup">
<div class="modal-popup__button">
  <img src="./assets/icons/close.svg" alt="&times;">
</div>
<div class="inner-popup">
<div class="btn-text-big">Winner!</div>
<div class="inner-popup__text btn-txt"></div>
</div>
</div>`;
