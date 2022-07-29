import {
  createWinner,
  getWinner,
  getWinners,
  updateWinner,
} from '../Api/winnersApi';
import { drawWinnersTable } from '../DOM/DOM-html';
import storage from '../global';

export async function updateWinnersTable() {
  const winnersTable = document.querySelector('.winners-table__list');

  const { winners, winnersNumber } = await getWinners(
    storage.garagePage,
    10,
    storage.winnersSort,
    storage.winnersOrder,
  );

  storage.winners = winners;
  storage.winnersNumber = Number(winnersNumber);
  winnersTable.innerHTML = drawWinnersTable(storage.winners);
}

export async function newWinner(id: number, time: number) {
  const existingWinner = await getWinner(id);
  if (Object.keys(existingWinner).length > 0) {
    if (existingWinner.time > time) existingWinner.time = time;
    existingWinner.wins += 1;
    await updateWinner(id, existingWinner.time, existingWinner.wins);
  } else {
    await createWinner(id, time, 1);
  }
  updateWinnersTable();
}
