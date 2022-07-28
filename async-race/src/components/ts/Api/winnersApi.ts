import serverUrl from '../global';

const winnersUrl = `${serverUrl}/garage`;

export async function getWinners(page = 1, limit = 10, sort = 'id', order = 'ASC') {
  const response = fetch(`${winnersUrl}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);

  return {
    winners: (await response).json(),
    winnersNumber: (await response).headers.get('X-Total-Count'),
  };
}

export async function getWinner(carId: number) {
  return (await fetch(`${winnersUrl}?id=${carId}`)).json();
}

export async function deleteWinner(carId: number) {
  return (await fetch(`${winnersUrl}?id=${carId}`, {
    method: 'DELETE',
  })).status;
}

export async function createWinner(carId: number, time: number, wins = 1) {
  const data = {
    carId,
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

export async function updateCar(carId: number, time: number, wins: number) {
  const data = {
    wins,
    time,
  };

  return (await fetch(`${winnersUrl}?id=${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })).json();
}
