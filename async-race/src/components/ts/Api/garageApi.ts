import serverUrl, { Car } from './apiGlobal';

const garageUrl = `${serverUrl}/garage`;

export async function getCars(page = 1, limit = 7) {
  const response = await fetch(`${garageUrl}?_page=${page}&_limit=${limit}`);
  const cars = await response.json() as Car[];

  return {
    cars,
    carsNumber: response.headers.get('X-Total-Count'),
  };
}

export async function getCar(carId: number) {
  const response = await fetch(`${garageUrl}?id=${carId}`);
  const car = await response.json() as Car[];
  return car[0];
}

export async function deleteCar(carId: number) {
  return (await fetch(`${garageUrl}/${carId}`, {
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

  return (await fetch(`${garageUrl}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })).json();
}
