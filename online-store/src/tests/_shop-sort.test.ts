import { jest } from '@jest/globals';
import SortCards from '../components/ts/_shop-sort';
import data from '../data';

global.Storage.prototype.getItem = jest.fn(() => 'nameZA');
document.body.innerHTML = `
    <select class="shop-sort__select" name="shop-sort__select" id="shop-sort__select">
      <option class="shop-sort__option" value="nameAZ" selected>по названию (от A до Z)</option>
      <option class="shop-sort__option" value="nameZA">по названию (от Z до A)</option>
      <option class="shop-sort__option" value="priceUp">цена (сначала дешевые)</option>
      <option class="shop-sort__option" value="priceDown">цена (сначала дорогие)</option>
      <option class="shop-sort__option" value="mpixUp">мегапиксели (возрастание)</option>
      <option class="shop-sort__option" value="mpixDown">мегапиксели (убывание)</option>
    </select>
  `;
const sortCards = new SortCards('.shop-sort__select');

describe('Should properly sort data cards', () => {
  test('sorting from A to Z', () => {
    sortCards.shopSortSelect.value = 'nameAZ';
    const sortedData = sortCards.sort(data);
    expect(sortedData[0].name).toBe('Canon EOS 2000D 18-55 DC III');
  });

  test('sorting from Z to A', () => {
    sortCards.shopSortSelect.value = 'nameZA';
    const sortedData = sortCards.sort(data);
    expect(sortedData[0].name).toBe('Sony Cyber-Shot RX100 MkVA Black');
  });

  test('sorting prices from low to high', () => {
    sortCards.shopSortSelect.value = 'priceUp';
    const sortedData = sortCards.sort(data);
    expect(sortedData[0].name).toBe('Fujifilm Instax Mini 90 Brown EX D');
  });

  test('sorting prices from high to low', () => {
    sortCards.shopSortSelect.value = 'priceDown';
    const sortedData = sortCards.sort(data);
    expect(sortedData[0].name).toBe('Canon EOS C70 Cinema Camera');
  });

  test('sorting mpix from low to high', () => {
    sortCards.shopSortSelect.value = 'mpixUp';
    const sortedData = sortCards.sort(data);
    expect(sortedData[0].name).toBe('Fujifilm Instax Mini 90 Brown EX D');
  });

  test('sorting mpix from high to low', () => {
    sortCards.shopSortSelect.value = 'mpixDown';
    const sortedData = sortCards.sort(data);
    expect(sortedData[0].name).toBe('Nikon Z7 24-70 f4 Kit');
  });

  test('resetting sort function should work', () => {
    sortCards.sortReset();
    expect(sortCards.shopSortSelect.value).toBe('nameAZ');
  });
});
