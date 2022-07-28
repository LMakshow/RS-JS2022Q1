const serverUrl = 'http://127.0.0.1:3000';

export interface Car {
  name: string,
  color: string,
  id?: number,
}

export interface Winner {
  time: string,
  wins: string,
  id?: number,
  name?: string,
  color?: string,
}

export default serverUrl;
