/* eslint-disable @typescript-eslint/no-unused-vars */

// import ShopApp from './components/app';\
import ShopSlider from './components/ts/_shop-slider';
import RenderCards from './components/ts/_shop-cards';
import data from './data';

import './global.scss';

const priceSlider = new ShopSlider('shop-price', [4999, 164988], 1);
const mpixSlider = new ShopSlider('shop-mpix', [3, 46], 1);

const cards = new RenderCards();
cards.draw(data);

// const app = new ShopApp();
// app.start();
