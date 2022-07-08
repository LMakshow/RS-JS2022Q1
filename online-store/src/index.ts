/* eslint-disable @typescript-eslint/no-unused-vars */

// import ShopApp from './components/app';\
import { CameraData } from './data';
import ShopSlider from './components/ts/_shop-slider';
import RenderCards from './components/ts/_shop-cards';
import data from './data';

import './global.scss';
import SortCards from './components/ts/_shop-sort';

const priceSlider = new ShopSlider('shop-price', [4999, 164988], 1);
const mpixSlider = new ShopSlider('shop-mpix', [2, 46], 1);

const cards = new RenderCards();
const sort = new SortCards();

const shopSortSelect: HTMLSelectElement = document.querySelector('.shop-sort__select');
shopSortSelect.addEventListener('change', () => {
  const sortedData: CameraData = sort.sort(data, shopSortSelect.value);
  cards.draw(sortedData);
});

const sortedData: CameraData = sort.sort(data, shopSortSelect.value);
cards.draw(sortedData);

// const app = new ShopApp();
// app.start();
