import serverUrl from './apiGlobal';

const engineUrl = `${serverUrl}/engine`;

export async function engineStart(carId: number) {
  return (await fetch(`${engineUrl}?id=${carId}&status=started`, {
    method: 'PATCH',
  })).json();
}

export async function engineStop(carId: number) {
  return (await fetch(`${engineUrl}?id=${carId}&status=stopped`, {
    method: 'PATCH',
  })).json();
}

export async function engineDrive(carId: number) {
  return (await fetch(`${engineUrl}?id=${carId}&status=drive`, {
    method: 'PATCH',
  })).json();
}
