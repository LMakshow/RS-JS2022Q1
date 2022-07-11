/* eslint-disable @typescript-eslint/no-unused-vars */

import { CameraData } from './data';
import ShopSlider from './components/ts/_shop-slider';
import RenderCards from './components/ts/_shop-cards';
import CameraFilter from './components/ts/_shop-filter';
import data from './data';

import './global.scss';
import SortCards from './components/ts/_shop-sort';
import Cart from './components/ts/_cart';

const priceSlider = new ShopSlider('shop-price', [4999, 164988], 1);
const mpixSlider = new ShopSlider('shop-mpix', [2, 46], 1);
const cartText: HTMLElement = document.querySelector('.cart__text');

const cards = new RenderCards();
const sort = new SortCards();
const filters = new CameraFilter();

const cart = new Cart();

let filteredData: CameraData;

// Init sorting list
const shopSortSelect: HTMLSelectElement = document.querySelector('.shop-sort__select');
shopSortSelect.addEventListener('change', () => {
  draw();
});

// Init search box
const searchBox: HTMLInputElement = document.querySelector('.search-box');
const searchClear: HTMLInputElement = document.querySelector('.search-clear');
searchBox.addEventListener('input', () => {
  searchBox.value ? searchBox.classList.add('with-clear') : searchBox.classList.remove('with-clear');
  draw();
});
searchClear.addEventListener('click', () => {
  searchBox.value = '';
  searchBox.classList.remove('with-clear');
  searchBox.focus();
  draw();
});

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

// Init filter reset button
const filterReset: HTMLElement = document.querySelector('.shop-reset-filters');
filterReset.addEventListener('click', () => {
  filters.filtersReset();
  draw();
});

// Init all reset button
const allReset: HTMLElement = document.querySelector('.shop-reset-storage');
allReset.addEventListener('click', () => {
  filters.filtersReset();
  cart.clear();
  shopSortSelect.value = 'nameAZ';
  draw();
});

// Init cart toggle
const shopGoods: HTMLElement = document.querySelector('.shop-goods');
shopGoods.addEventListener('click', (e) => {
  const target = (<HTMLElement>e.target).closest('.shop-card');
  if (target) {
    cart.toggle((<HTMLElement>target.children[1]).innerText); //Finds name of a card
    draw();
  }
});

function draw() {
  filteredData = filters.filter(data);
  const sortedData: CameraData = sort.sort(filteredData, shopSortSelect.value);
  cards.draw(sortedData, cart.cartStorage);

  cart.cartCounter ? cartText.classList.add('has-items') : cartText.classList.remove('has-items');
  cartText.innerText = String(cart.cartCounter);
}
