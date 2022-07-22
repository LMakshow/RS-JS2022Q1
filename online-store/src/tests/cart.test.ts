import { jest } from '@jest/globals';
import Cart from '../components/ts/cart';

global.Storage.prototype.getItem = jest.fn(() => '');
document.body.innerHTML = `
<div class="modal-overlay">
<div class="shop-popup">
  <div class="shop-popup__button">
    <img src="./assets/svg/search-clear.svg" alt="&times;">
  </div>
  <div class="shop-popup__text">Извините, в корзину можно добавить не более 20 товаров.</div>
</div>
</div>
  `;
const cart = new Cart();

describe('Should have full cart implementation', () => {
  test('adding Some camera to the cart', () => {
    cart.add('Some camera');
    expect(cart.cartStorage).toEqual({ 'Some camera': 1 });
  });

  test('deleting Some camera from the cart', () => {
    cart.remove('Some camera');
    expect(cart.cartStorage).toEqual({});
  });

  test('in case of toggling mode, properly add/delete', () => {
    cart.toggle('Some camera');
    expect(cart.cartStorage).toEqual({ 'Some camera': 1 });
  });

  test('if more than 20 items, show modal message', () => {
    const spy = jest.spyOn(cart, 'showModal');
    cart.cartCounter = 20;
    cart.toggle('Another camera');
    expect(cart.cartStorage).toEqual({ 'Some camera': 1 });
    expect(spy).toHaveBeenCalled();
  });

  test('should clear the cart if reset button is pressed', () => {
    cart.clear();
    expect(cart.cartStorage).toEqual({});
    expect(cart.cartCounter).toBe(0);
  });
});
