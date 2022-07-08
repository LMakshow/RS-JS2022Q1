import * as noUiSlider from 'nouislider';

interface Slider {
  sliderQuery: string;
  sliderRange: number[];
  sliderStep: number;
  start: () => void;
}

/**
 * Slider takes sliderQuery: class of the future slider,
 * sliderRange: array of numbers of slider's range and
 * sliderStep: minimal step of the slider.
 *
 * It will connect the slider to the sliderQuery__labels-low
 * and sliderQuery__labels-high as their input labels.
 */
export default class ShopSlider implements Slider {
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
    const sliderLabels: HTMLInputElement[] = [
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

    sliderTarget.noUiSlider.on('update', (values, handle) => (sliderLabels[handle].value = String(values[handle])));
    sliderLabels[0].addEventListener('change', function () {
      sliderTarget.noUiSlider.set([this.value, null]);
    });
    sliderLabels[1].addEventListener('change', function () {
      sliderTarget.noUiSlider.set([null, this.value]);
    });
  }
}
