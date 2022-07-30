import {
  createWinner,
  getWinner,
  getWinners,
  updateWinner,
} from '../Api/winnersApi';
import { drawWinnersTable, drawWinnersTableHeader } from '../DOM/DOM-html';
import storage from '../global';

/** Updates storage Winners and Winners number */
export async function updateWinnerStorage() {
  try {
    const { winners, winnersNumber } = await getWinners(
      storage.winnersPage,
      storage.winnersSort,
      storage.winnersOrder,
    );

    storage.winners = winners;
    storage.winnersNumber = winnersNumber;
  } catch (e) { storage.winnersNumber = 'SERVER LOST'; }
}

/** Updates the table: winners list, number of winners,
 * checks the buttons if they should be disabled or not. */
export async function updateWinnersTable() {
  const winnersNumberSpan = document.querySelector('.winners-number');
  const winnersTableHeader = document.querySelector('.winners-table');
  const winnersTableList = document.querySelector('.winners-table__list');
  const winnersButtonPrev = document.querySelector('.btn-winner-prev') as HTMLButtonElement;
  const winnersButtonNext = document.querySelector('.btn-winner-next') as HTMLButtonElement;
  const winnersPageNumber = document.querySelector('.winners-page');

  await updateWinnerStorage();
  winnersNumberSpan.innerHTML = storage.winnersNumber;
  winnersTableHeader.innerHTML = drawWinnersTableHeader(storage.winnersSort, storage.winnersOrder);
  winnersTableList.innerHTML = drawWinnersTable(storage.winners, storage.winnersPage);

  winnersButtonPrev.disabled = (storage.winnersPage === 1);
  winnersButtonNext.disabled = (Number.isNaN(Number(storage.winnersNumber))
    || Number(storage.winnersNumber) <= storage.winnersPage * 10);
  winnersPageNumber.innerHTML = `${storage.winnersPage} / ${Math.ceil(Number(storage.winnersNumber) / 10)}`;
}

/** Adds winner to the table. Called after the race is over. */
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

/** Event listeners for winners pagination buttons */
export function winnersFooterButtonsEvents() {
  const winnersButtonPrev = document.querySelector('.btn-winner-prev') as HTMLButtonElement;
  const winnersButtonNext = document.querySelector('.btn-winner-next') as HTMLButtonElement;

  winnersButtonPrev.addEventListener('click', async () => {
    if (storage.winnersPage === 1) return;
    storage.winnersPage -= 1;
    await updateWinnerStorage();
    updateWinnersTable();
  });

  winnersButtonNext.addEventListener('click', async () => {
    if (storage.winnersPage * 10 < Number(storage.winnersNumber)) {
      storage.winnersPage += 1;
      await updateWinnerStorage();
      updateWinnersTable();
    }
  });
}

async function sortWinnersByWins() {
  storage.winnersSort = 'wins';
  storage.winnersOrder = storage.winnersOrder === 'ASC' ? 'DESC' : 'ASC';
  await updateWinnerStorage();
  updateWinnersTable();
}

async function sortWinnersByTime() {
  storage.winnersSort = 'time';
  storage.winnersOrder = storage.winnersOrder === 'ASC' ? 'DESC' : 'ASC';
  await updateWinnerStorage();
  updateWinnersTable();
}

/** Event listeners for sorting winners table: by wins and time */
export function sortWinnersTableEvents() {
  document.querySelector('.winners-table').addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.sort-wins')) sortWinnersByWins();
    if (target.closest('.sort-time')) sortWinnersByTime();
  });
}
