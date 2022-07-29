import { getCars } from './Api/garageApi';
import { getWinners } from './Api/winnersApi';

const { cars, carsNumber } = await getCars();
const { winners, winnersNumber } = await getWinners();

const storage = {
  cars,
  carsNumber,
  garagePage: 1,
  updateCar: 0,
  winners,
  winnersNumber,
  winnersPage: 1,
};

const carBrands = ['Acura', 'Alfa-Romeo', 'Aston-Martin', 'Audi', 'Bentley', 'BMW',
  'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Citroen', 'Dodge',
  'Ferrari', 'Fiat', 'Ford', 'Geely', 'Genesis', 'GMC', 'Honda', 'Hyundai',
  'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Koenigsegg', 'Lamborghini', 'Lancia',
  'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda',
  'McLaren', 'Mercedes', 'Mini', 'Mitsubishi', 'Nissan', 'Opel', 'Pagani',
  'Peugeot', 'Pontiac', 'Porsche', 'Ram', 'Renault', 'Rolls-Royce', 'Skoda',
  'Smart', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo',
];

const carModels = ['Durango', 'Challenger', 'Charger', 'Grand Caravan', 'X7', 'X5', 'X3', 'X6 M', 'X6', 'X1', 'X4', 'C3 Aircross', 'Duster', 'CR-V', 'Corolla',
  'C4 Cactus', 'DS3 Crossback', 'C1', 'C3', 'DS4 Crossback', 'UX 250h', 'NX 300h', 'LC 500', 'RX 350/200t', 'Rapid', 'Largus',
  'IS 200t', 'LS 500h', 'RX', 'Hatchback', 'CX-5', 'Sedan', 'CX-30', 'CX-9', 'CX-3', 'MX-5 Roadster', 'Phantom', 'Camry', 'Polo',
  'Cullinan', 'Ghost', 'Dawn', 'Duster', 'Arkana', 'Sandero', 'Logan', 'Logan MCV', 'Captur', 'Kadjar', 'RAV4', 'Rio', 'Creta', 'Solaris',
];

export function generateName() {
  const randomBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const randomModel = carModels[Math.floor(Math.random() * carModels.length)];
  return `${randomBrand} ${randomModel}`;
}

export function generateColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default storage;
