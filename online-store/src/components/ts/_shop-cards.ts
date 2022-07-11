import { CameraData } from '../../data';

interface DOMDraw {
  draw(data: Record<string, unknown>[], cart: Record<string, unknown>): void;
}

export default class RenderCards implements DOMDraw {
  draw(data: CameraData, cart: { [key: string]: number }): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('.shop-card-template');

    if (!data.length) {
      const p = document.createElement('p');
      p.textContent = 'Извините, по вашему запросу товаров нет.';
      p.classList.add('text-no-cards');

      fragment.append(p);
    } else {
      data.forEach((item) => {
        const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

        const img: HTMLImageElement = sourceClone.querySelector('.shop-card__image');
        img.src = `./images/cameras/${item.img}.jpg`;

        sourceClone.querySelector('.shop-card__name').textContent = item.name;
        sourceClone.querySelector('.shop-card__price').textContent = item.price.replace(
          /(\d)(?=(?:\d\d\d)+$)/g, // Replace 3 digits with themselves + no-break space
          '$1\u202f'
        );
        sourceClone.querySelector('.shop-card__mpix').textContent = item.mpix;
        sourceClone.querySelector('.shop-card__type').textContent = item.type;
        sourceClone.querySelector('.shop-card__stab').textContent = item.stabilization;

        sourceClone.querySelector('.shop-card__stock').textContent = item.stock ? 'В наличии' : 'Под заказ';
        item.stock
          ? sourceClone.querySelector('.shop-card__stock').classList.add('text-in-stock')
          : sourceClone.querySelector('.shop-card__stock').classList.add('text-out-of-stock');

        sourceClone.querySelector('.shop-card__cart').textContent = cart[item.name] ? 'Выбрано!' : 'В корзину';
        cart[item.name]
          ? sourceClone.querySelector('.shop-card__cart').classList.add('added')
          : sourceClone.querySelector('.shop-card__cart').classList.remove('added');

        fragment.append(sourceClone);
      });
    }

    document.querySelector('.shop-goods').innerHTML = '';
    document.querySelector('.shop-goods').append(fragment);
  }
}
