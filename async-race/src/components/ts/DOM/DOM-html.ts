import { Car, Winner } from '../Api/apiGlobal';
import drawCar from './draw-car';
import '../../../assets/icons/btn-garage.svg';

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

export function garageDashboardHtml(carsNumber: number) {
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
      <div class="btn btn-edit">
        <img alt="E" class="btn-img_small" src="./assets/icons/btn-edit.svg" />
      </div>
      <p class="car-name">${car.name}</p>
      <div class="btn btn-delete">
        <img alt="X" class="btn-img_small" src="./assets/icons/btn-delete.svg" />
      </div>
    </div>
    <div class="car-hud__bottom">
      <button class="btn btn-reset-car txt" disabled>
        RESET
      </button>
      <button class="btn btn-start-car txt btn-active">
        START
      </button>
    </div>
  </div>

  <div class="racing-track">
    <div class="car car-id${car.id}">
     ${drawCar(car.color)}
    </div>
  </div>
  <img alt="" class="img-finish-line" src="./assets/images/finish-line.svg" />`;
}

export function drawGarageFooter(carsNumber: number, garagePage: number) {
  return `<button class="btn btn-text btn-garage-prev" ${garagePage === 1 ? 'disabled' : ''}>
  PREV
</button>
<div class="btn-text garage-page">${garagePage} / ${Math.ceil(carsNumber / 7)}</div>
<button class="btn btn-text btn-garage-next" ${garagePage * 7 >= carsNumber ? 'disabled' : ''}>
  NEXT
</button>`;
}

export function drawWinnersTable(winners: Winner[]) {
  let innerHTML = `<colgroup>
    <col class="winners-table__no">
    <col class="winners-table__winner">
    <col class="winners-table__wins">
    <col class="winners-table__best-time">
  </colgroup>
  <tr>
    <th class="winners-table__header">No</th>
    <th class="winners-table__header">Winner</th>
    <th class="winners-table__header">Wins</th>
    <th class="winners-table__header">Best Time</th>
  </tr>`;
  if (winners.length === 0) {
    innerHTML += `<tr>
    <th class="winners-table__cell" colspan="4">No winners yet! Time to start a race!</th>
  </tr>`;
  }
  if (winners.length > 0) {
    innerHTML += `<tr>
    <th class="winners-table__winner">1</th>
    <th class="winners-table__winner"><div class="winners-table__container"><div class="winners-table__img">${drawCar(winners[0].color)}</div><span class="winner-table__name txt">${winners[0].name}</span></div></th>
    <th class="winners-table__winner">${winners[0].wins}</th>
    <th class="winners-table__winner">${winners[0].time}</th>
  </tr>`;
  }
  if (winners.length > 1) {
    winners.slice(1).forEach((winner, index) => {
      innerHTML += `<tr>
      <th class="winners-table__cell">${index + 2}</th>
      <th class="winners-table__cell"><div class="winners-table__container"><div class="winners-table__img">${drawCar(winner.color)}</div><span class="winner-table__name txt">${winner.name}</span></div></th>
      <th class="winners-table__cell">${winner.wins}</th>
      <th class="winners-table__cell">${winner.time}</th>
      </tr>`;
    });
  }
  return innerHTML;
}

export function drawWinnersFooter(winnersNumber: number, winnersPage: number) {
  return `<button class="btn btn-text btn-winner-prev" ${winnersPage === 1 ? 'disabled' : ''}>
  PREV
</button>
<div class="btn-text winners-page">${winnersPage} / ${Math.ceil(winnersNumber / 10)}</div>
<button class="btn btn-text btn-winner-next" ${winnersPage * 10 >= winnersNumber ? 'disabled' : ''}>
  NEXT
</button>`;
}
