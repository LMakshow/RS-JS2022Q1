import { CameraData } from '../../data';
import * as noUiSlider from 'nouislider';

interface Filter {
  filter(data: CameraData): CameraData;
  filtersReset(): void;
}

export default class CameraFilter implements Filter {
  private searchBox: HTMLInputElement;
  private makersList: NodeListOf<HTMLInputElement>;
  private priceSlider: noUiSlider.target;
  private mpixSlider: noUiSlider.target;
  private typesList: NodeListOf<HTMLInputElement>;
  private stabList: NodeListOf<HTMLInputElement>;
  private stockCheck: HTMLInputElement;
  public checkboxes: NodeListOf<HTMLInputElement>;

  constructor() {
    this.searchBox = document.querySelector('.search-box');
    this.makersList = document.querySelectorAll('.checkbox_shop[name="maker"]');
    this.priceSlider = document.querySelector('.shop-price__slider');
    this.mpixSlider = document.querySelector('.shop-mpix__slider');
    this.typesList = document.querySelectorAll('.checkbox_shop[name="type"]');
    this.stabList = document.querySelectorAll('.checkbox_shop[name="stab"]');
    this.stockCheck = document.querySelector('.checkbox_shop[name="stock"]');
    this.checkboxes = document.querySelectorAll('.checkbox_shop');
    this.init();
  }

  init() {
    const checkboxesChecked = JSON.parse(localStorage.getItem('checkboxes')) as boolean[];
    if (checkboxesChecked) {
      this.checkboxes.forEach((chbox, idx) => {
        chbox.checked = checkboxesChecked[idx];
      });
    }
    const prices = JSON.parse(localStorage.getItem('prices')) as [number, number];
    const mpixes = JSON.parse(localStorage.getItem('mpixes')) as [number, number];
    this.priceSlider.noUiSlider.set(prices);
    this.mpixSlider.noUiSlider.set(mpixes);
  }

  filterName(data: CameraData) {
    if (!this.searchBox.value) return data;
    return data.filter((el) => el.name.toLowerCase().indexOf(this.searchBox.value.toLowerCase()) !== -1);
  }

  filterMaker(data: CameraData) {
    const makers: string[] = [];
    this.makersList.forEach((chbox) => {
      if (chbox.checked) makers.push(chbox.value.toLowerCase());
    });
    if (!makers.length) return data;
    return data.filter((el) => makers.indexOf(el.manufacturer.toLowerCase()) !== -1);
  }

  filterPrice(data: CameraData) {
    const prices = this.priceSlider.noUiSlider.get() as [number, number];
    return data.filter((el) => Number(el.price) >= prices[0] && Number(el.price) <= prices[1]);
  }

  filterMpix(data: CameraData) {
    const mpixes = this.mpixSlider.noUiSlider.get() as [number, number];
    return data.filter((el) => Number(el.mpix) >= mpixes[0] && Number(el.mpix) <= mpixes[1]);
  }

  filterType(data: CameraData) {
    const types: string[] = [];
    this.typesList.forEach((chbox) => {
      if (chbox.checked) types.push(chbox.value.toLowerCase());
    });
    if (!types.length) return data;
    return data.filter((el) => types.indexOf(el.type.toLowerCase()) !== -1);
  }

  filterStab(data: CameraData) {
    const stabs: string[] = [];
    this.stabList.forEach((chbox) => {
      if (chbox.checked) stabs.push(chbox.value.toLowerCase());
    });
    if (!stabs.length) return data;
    return data.filter((el) => stabs.indexOf(el.stabilization.toLowerCase()) !== -1);
  }

  filterStock(data: CameraData) {
    if (!this.stockCheck.checked) return data;
    return data.filter((el) => el.stock);
  }

  filtersReset() {
    this.makersList.forEach((chbox) => (chbox.checked = false));
    this.priceSlider.noUiSlider.set([0, 999999]);
    this.mpixSlider.noUiSlider.set([0, 999999]);
    this.typesList.forEach((chbox) => (chbox.checked = false));
    this.stabList.forEach((chbox) => (chbox.checked = false));
    this.stockCheck.checked = false;

    localStorage.removeItem('checkboxes');
    localStorage.removeItem('prices');
    localStorage.removeItem('mpixes');
  }

  filter(data: CameraData): CameraData {
    let filteredData = data;
    filteredData = this.filterName(filteredData);
    filteredData = this.filterMaker(filteredData);
    filteredData = this.filterPrice(filteredData);
    filteredData = this.filterMpix(filteredData);
    filteredData = this.filterType(filteredData);
    filteredData = this.filterStab(filteredData);
    filteredData = this.filterStock(filteredData);
    return filteredData;
  }
}
