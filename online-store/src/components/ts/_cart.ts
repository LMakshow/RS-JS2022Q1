export default class Cart {
  public cartStorage: { [key: string]: number };
  public cartCounter: number;
  constructor() {
    this.cartStorage = {};
    this.cartCounter = 0;
    this.init();
  }

  init() {
    const cart = localStorage.getItem('cartStorage');
    if (cart) {
      this.cartStorage = JSON.parse(cart) as { [key: string]: number };
      this.cartCounter = Object.keys(this.cartStorage).length;
    }
  }

  add(name: string) {
    if (this.cartStorage[name]) {
      this.cartStorage[name] += 1;
    } else {
      this.cartStorage[name] = 1;
    }
    this.cartCounter += 1;
    localStorage.setItem('cartStorage', JSON.stringify(this.cartStorage));
  }

  remove(name: string) {
    if (this.cartStorage[name]) {
      this.cartStorage[name] -= 1;
      this.cartCounter -= 1;
    }
    if (this.cartStorage[name] <= 0) delete this.cartStorage[name];
    localStorage.setItem('cartStorage', JSON.stringify(this.cartStorage));
  }

  toggle(name: string) {
    if (this.cartStorage[name]) {
      delete this.cartStorage[name];
      this.cartCounter -= 1;
    } else {
      this.cartStorage[name] = 1;
      this.cartCounter += 1;
    }
    localStorage.setItem('cartStorage', JSON.stringify(this.cartStorage));
  }

  clear() {
    this.cartStorage = {};
    this.cartCounter = 0;
    localStorage.setItem('cartStorage', '');
  }
}
