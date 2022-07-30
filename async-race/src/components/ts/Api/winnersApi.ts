import serverUrl, { Car, Winner } from './apiGlobal';
import { getCar } from './garageApi';

const winnersUrl = `${serverUrl}/winners`;

export async function getWinners(page = 1, sort = 'time', order = 'ASC', limit = 10) {
  const response = await fetch(`${winnersUrl}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  let winners = await response.json() as Winner[];
  winners = await Promise.all(winners.map(async (winner) => {
    const car = await getCar(winner.id) as Car;
    return {
      ...winner,
      name: car.name,
      color: car.color,
    };
  }));

  return {
    winners,
    winnersNumber: response.headers.get('X-Total-Count'),
  };
}

export async function getWinner(carId: number) {
  const response = await fetch(`${winnersUrl}/${carId}`);
  const winner = await response.json();
  return winner;
}

export async function deleteWinner(carId: number) {
  return (await fetch(`${winnersUrl}/${carId}`, {
    method: 'DELETE',
  })).status;
}

export async function createWinner(id: number, time: number, wins = 1) {
  const data = {
    id,
    wins,
    time,
  };

  return (await fetch(`${winnersUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })).json();
}

export async function updateWinner(carId: number, time: number, wins: number) {
  const data = {
    wins,
    time,
  };

  return (await fetch(`${winnersUrl}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })).json();
}
