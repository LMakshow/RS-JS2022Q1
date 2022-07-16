import { CameraData } from '../../data';

interface Sort {
  sort(data: CameraData): CameraData;
  sortReset(): void;
}

export default class SortCards implements Sort {
  public shopSortSelect: HTMLSelectElement;
  constructor(query: string) {
    this.shopSortSelect = document.querySelector(query);
    this.init();
  }

  private init() {
    const sortOrder = localStorage.getItem('sortOrder');
    if (sortOrder) {
      this.shopSortSelect.value = sortOrder;
    }
  }

  public sort(data: CameraData) {
    switch (this.shopSortSelect.value) {
      case 'nameAZ':
        return this.nameAZ(data);
      case 'nameZA':
        return this.nameZA(data);
      case 'priceUp':
        return this.priceUp(data);
      case 'priceDown':
        return this.priceDown(data);
      case 'mpixUp':
        return this.mpixUp(data);
      case 'mpixDown':
        return this.mpixDown(data);
    }
  }

  private nameAZ<T extends { name: string }[]>(data: T): T {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  private nameZA<T extends { name: string }[]>(data: T): T {
    return data.sort((a, b) => b.name.localeCompare(a.name));
  }

  private priceUp<T extends { price: string }[]>(data: T): T {
    return data.sort((a, b) => Number(a.price) - Number(b.price));
  }

  private priceDown<T extends { price: string }[]>(data: T): T {
    return data.sort((a, b) => Number(b.price) - Number(a.price));
  }

  private mpixUp<T extends { mpix: string }[]>(data: T): T {
    return data.sort((a, b) => Number(a.mpix) - Number(b.mpix));
  }

  private mpixDown<T extends { mpix: string }[]>(data: T): T {
    return data.sort((a, b) => Number(b.mpix) - Number(a.mpix));
  }

  public sortReset() {
    this.shopSortSelect.value = 'nameAZ';
    localStorage.removeItem('sortOrder');
  }
}
