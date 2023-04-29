import { Car } from '../interfaces/car';

export function generateId(): number {
  const id = Math.floor(Math.random() * 1000000);
  return id;
}

export const mockCarClassCollection: Array<string> = [
  'limousine',
  'suv',
  'coupé',
  'cabriolet',
  'kleinbus',
  'compakt',
  'kombi',
  'pickup',
  'van',
  'elektrisch',
  'luxus',
  'Hallloooooo'
];

export const mockCarBrandsCollection: Array<string> = [
  'vw',
  'bmw',
  'audi',
  'fiat',
  'mercedes',
  'opel',
  'tesla',
  'hyundai',
  'polestar',
];

export const mockCarArray: Array<Car> = [
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    'BMW M5',
    mockCarClassCollection[0],
    2019,
    'Diesel',
    7.7,
    'Automatik',
    360,
    700,
    4,
    'Bremen',
    'https://bit.ly/41qjK2O'
  ),
  new Car(
    generateId(),
    'DE123',
    'BMW M5',
    mockCarClassCollection[0],
    2019,
    'Diesel',
    7.7,
    'Automatik',
    360,
    700,
    4,
    'Bremen',
    'https://bit.ly/41qjK2O'
  ),
  new Car(
    generateId(),
    'DE123',
    'BMW M5',
    mockCarClassCollection[0],
    2019,
    'Diesel',
    7.7,
    'Automatik',
    360,
    700,
    4,
    'Bremen',
    'https://bit.ly/41qjK2O'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW T-Roc',
    mockCarClassCollection[1],
    2018,
    'Benzin',
    5.9,
    'Automatik',
    110,
    700,
    4,
    'Bremen',
    'https://bit.ly/3KEPKuO'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW T-Roc',
    mockCarClassCollection[1],
    2018,
    'Benzin',
    5.9,
    'Automatik',
    110,
    700,
    4,
    'Bremen',
    'https://bit.ly/3KEPKuO'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW T-Roc',
    mockCarClassCollection[1],
    2018,
    'Benzin',
    5.9,
    'Automatik',
    110,
    700,
    4,
    'Bremen',
    'https://bit.ly/3KEPKuO'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW Touran',
    mockCarClassCollection[1],
    2015,
    'Benzin',
    6.7,
    'Manuell',
    150,
    700,
    4,
    'Bremen',
    'https://bit.ly/3ZLs4sN'
  ),
];
