export default class Cart {
  public cartStorage: { [key: string]: number };
  public cartCounter: number;
  private modalOverlay: HTMLElement;
  private modalButton: HTMLElement;
  constructor() {
    this.cartStorage = {};
    this.cartCounter = 0;
    this.modalOverlay = document.querySelector('.modal-overlay');
    this.modalButton = document.querySelector('.shop-popup__button');
    this.init();
  }

  init() {
    const cart = localStorage.getItem('cartStorage');
    if (cart) {
      this.cartStorage = JSON.parse(cart) as { [key: string]: number };
      this.cartCounter = Object.keys(this.cartStorage).length;
    }

    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) this.modalOverlay.classList.remove('visible');
    });

    this.modalButton.addEventListener('click', () => {
      this.modalOverlay.classList.remove('visible');
    });
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
    } else if (this.cartCounter >= 20) {
      this.showModal();
      return;
    } else {
      this.cartStorage[name] = 1;
      this.cartCounter += 1;
    }
    localStorage.setItem('cartStorage', JSON.stringify(this.cartStorage));
  }

  clear() {
    this.cartStorage = {};
    this.cartCounter = 0;
    localStorage.removeItem('cartStorage');
  }

  showModal() {
    this.modalOverlay.classList.add('visible');
  }
}
