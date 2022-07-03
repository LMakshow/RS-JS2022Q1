/* eslint-disable @typescript-eslint/no-unused-vars */

// import ChristmasApp from './components/app';\
import ToysSlider from './components/ts/_toys-slider';

import './global.css';

const numberSlider = new ToysSlider('toys-number', [1, 12], 1);
const yearSlider = new ToysSlider('toys-year', [1940, 2010], 10);

// const app = new ChristmasApp();
// app.start();
