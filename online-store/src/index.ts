/* eslint-disable @typescript-eslint/no-unused-vars */

import { CameraData } from './data';
import ShopSlider from './components/ts/_shop-slider';
import RenderCards from './components/ts/_shop-cards';
import CameraFilter from './components/ts/_shop-filter';
import data from './data';

import './global.scss';
import SortCards from './components/ts/_shop-sort';
import Cart from './components/ts/_cart';
import printSelfcheck from './components/ts/print-selfcheck';

const priceSlider = new ShopSlider('shop-price', [4999, 164988], 1);
const mpixSlider = new ShopSlider('shop-mpix', [2, 46], 1);
const cartText: HTMLElement = document.querySelector('.cart__text');

const cards = new RenderCards();
const sort = new SortCards('.shop-sort__select');
const filters = new CameraFilter();

const cart = new Cart();

let filteredData: CameraData;

// Eventlistener for sorting list
sort.shopSortSelect.addEventListener('change', () => {
  localStorage.setItem('sortOrder', sort.shopSortSelect.value);
  draw();
});

// Eventlistener for search box
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

// Eventlistener for filter checkboxes
const shopOptions: HTMLElement = document.querySelector('.shop-options');
shopOptions.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('checkbox_shop')) {
    const checkboxesChecked: boolean[] = [];
    filters.checkboxes.forEach((chbox, idx) => {
      checkboxesChecked[idx] = chbox.checked;
    });
    localStorage.setItem('checkboxes', JSON.stringify(checkboxesChecked));
    draw();
  }
});

// Eventlistener for sliders
priceSlider.sliderTarget.noUiSlider.on('update', () => {
  draw();
});
priceSlider.sliderTarget.noUiSlider.on('set', () => {
  const prices = priceSlider.sliderTarget.noUiSlider.get() as [number, number];
  localStorage.setItem('prices', JSON.stringify(prices));
});

mpixSlider.sliderTarget.noUiSlider.on('update', () => {
  draw();
});
mpixSlider.sliderTarget.noUiSlider.on('set', () => {
  const mpixes = mpixSlider.sliderTarget.noUiSlider.get() as [number, number];
  localStorage.setItem('mpixes', JSON.stringify(mpixes));
});

// Eventlistener for filter reset button
const filterReset: HTMLElement = document.querySelector('.shop-reset-filters');
filterReset.addEventListener('click', () => {
  filters.filtersReset();
  draw();
});

// Eventlistener for all reset button
const allReset: HTMLElement = document.querySelector('.shop-reset-storage');
allReset.addEventListener('click', () => {
  filters.filtersReset();
  sort.sortReset();
  cart.clear();
  draw();
});

// Eventlistener for cart toggle
const shopGoods: HTMLElement = document.querySelector('.shop-goods');
shopGoods.addEventListener('click', (e) => {
  const target = (<HTMLElement>e.target).closest('.shop-card');
  if (target) {
    cart.toggle((<HTMLElement>target.children[1]).innerText); //Finds name of a card
    draw();
  }
});

// Draw/redraw cards
function draw() {
  filteredData = filters.filter(data);
  const sortedData: CameraData = sort.sort(filteredData);
  cards.draw(sortedData, cart.cartStorage);

  cart.cartCounter ? cartText.classList.add('has-items') : cartText.classList.remove('has-items');
  cartText.innerText = String(cart.cartCounter);
}

window.onload = printSelfcheck;
