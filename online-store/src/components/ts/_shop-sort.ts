import { CameraData } from '../../data';

interface Sort {
  sort(data: CameraData, sortType: string): CameraData;
}

export default class SortCards implements Sort {
  public sort(data: CameraData, sortType: string): CameraData {
    switch (sortType) {
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

  private nameAZ(data: CameraData) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  private nameZA(data: CameraData) {
    return data.sort((a, b) => b.name.localeCompare(a.name));
  }

  private priceUp(data: CameraData) {
    return data.sort((a, b) => Number(a.price) - Number(b.price));
  }

  private priceDown(data: CameraData) {
    return data.sort((a, b) => Number(b.price) - Number(a.price));
  }

  private mpixUp(data: CameraData) {
    return data.sort((a, b) => Number(a.mpix) - Number(b.mpix));
  }

  private mpixDown(data: CameraData) {
    return data.sort((a, b) => Number(b.mpix) - Number(a.mpix));
  }
}
