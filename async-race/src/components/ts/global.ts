import { getCars } from './Api/garageApi';
import { getWinners } from './Api/winnersApi';

const { cars, carsNumber } = await getCars();
const { winners, winnersNumber } = await getWinners();

const storage = {
  cars,
  carsNumber,
  garagePage: 1,
  winners,
  winnersNumber,
  winnersPage: 1,
};

export default storage;
