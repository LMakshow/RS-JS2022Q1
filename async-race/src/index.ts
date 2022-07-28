import './global.scss';
import { getCars } from './components/ts/Api/garageApi';

getCars().then(async (data) => {
  console.log(`total cars = ${data.carsNumber}`);
  console.log(await data.cars);
});
