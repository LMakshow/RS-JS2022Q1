import serverUrl from '../global';

const garageUrl = `${serverUrl}/garage`;

export async function getCars(page = 1, limit = 7) {
  const response = fetch(`${garageUrl}?_page=${page}&_limit=${limit}`);

  return {
    cars: (await response).json(),
    carsNumber: (await response).headers.get('X-Total-Count'),
  };
}

export async function getCar(carId: number) {
  return (await fetch(`${garageUrl}?id=${carId}`)).json();
}

export async function deleteCar(carId: number) {
  return (await fetch(`${garageUrl}?id=${carId}`, {
    method: 'DELETE',
  })).status;
}

export async function createCar(name: string, color: string) {
  const data = {
    name,
    color,
  };

  return (await fetch(`${garageUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })).json();
}

export async function updateCar(carId: number, name: string, color: string) {
  const data = {
    name,
    color,
  };

  return (await fetch(`${garageUrl}?id=${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })).json();
}
