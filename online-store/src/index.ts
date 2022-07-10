/* eslint-disable @typescript-eslint/no-unused-vars */

import { CameraData } from './data';
import ShopSlider from './components/ts/_shop-slider';
import RenderCards from './components/ts/_shop-cards';
import CameraFilter from './components/ts/_shop-filter';
import data from './data';

import './global.scss';
import SortCards from './components/ts/_shop-sort';

const priceSlider = new ShopSlider('shop-price', [4999, 164988], 1);
const mpixSlider = new ShopSlider('shop-mpix', [2, 46], 1);

const cards = new RenderCards();
const sort = new SortCards();
const filters = new CameraFilter();

let filteredData: CameraData;

// Init sorting list
const shopSortSelect: HTMLSelectElement = document.querySelector('.shop-sort__select');
shopSortSelect.addEventListener('change', () => {
  draw();
});

// Init search box
const searchBox: HTMLInputElement = document.querySelector('.search-box');
searchBox.addEventListener('input', () => draw());

// Init filter checkboxes and sliders
const shopOptions: HTMLElement = document.querySelector('.shop-options');
shopOptions.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('checkbox_shop')) {
    draw();
  }
});
priceSlider.sliderTarget.noUiSlider.on('update', () => draw());
mpixSlider.sliderTarget.noUiSlider.on('update', () => draw());

//Init filter reset button
const shopReset: HTMLElement = document.querySelector('.shop-reset');
shopReset.addEventListener('click', () => {
  filters.filtersReset();
  draw();
});

function draw() {
  filteredData = filters.filter(data);
  const sortedData: CameraData = sort.sort(filteredData, shopSortSelect.value);
  cards.draw(sortedData);
}
