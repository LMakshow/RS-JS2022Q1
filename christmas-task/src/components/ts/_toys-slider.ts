import * as noUiSlider from 'nouislider';

interface Slider {
  sliderQuery: string;
  sliderRange: number[];
  sliderStep: number;
  start: () => void;
}

export default class ToysSlider implements Slider {
  sliderQuery: string;
  sliderRange: number[];
  sliderStep: number;

  constructor(sliderQuery: string, sliderRange: number[], sliderStep: number) {
    this.sliderQuery = sliderQuery;
    this.sliderRange = sliderRange;
    this.sliderStep = sliderStep;
    this.start();
  }

  start() {
    const sliderTarget: noUiSlider.target = document.querySelector(`.${this.sliderQuery}__slider`);
    const sliderLabels = [
      document.querySelector(`.${this.sliderQuery}__labels-low`),
      document.querySelector(`.${this.sliderQuery}__labels-high`),
    ];

    noUiSlider.create(sliderTarget, {
      start: [this.sliderRange[0], this.sliderRange[1]],
      connect: true,
      range: {
        min: this.sliderRange[0],
        max: this.sliderRange[1],
      },
      step: this.sliderStep,
      format: {
        from: (formattedValue) => Number(formattedValue),
        to: (numericValue) => Math.round(numericValue),
      },
    });

    sliderTarget.noUiSlider.on('update', (values, handle) => (sliderLabels[handle].innerHTML = String(values[handle])));
  }
}
