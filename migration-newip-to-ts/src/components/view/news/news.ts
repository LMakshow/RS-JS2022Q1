import './news.css';
import { NewsData } from '../../types';
import { DOMDraw } from '../../interfaces';

class News implements DOMDraw {
  draw(data: NewsData['articles'] | []) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragmentGrid = document.createDocumentFragment();
    const fragmentFlex = document.createDocumentFragment();
    const newsItemGrid: HTMLTemplateElement = document.querySelector('#newsItemGrid');
    const newsItemFlex: HTMLTemplateElement = document.querySelector('#newsItemFlex');

    news.forEach((item, idx) => {
      if (idx < 4) {
        const newsClone = newsItemGrid.content.cloneNode(true) as HTMLElement;

        newsClone.querySelector<HTMLElement>(
          '.news__item-grid'
        ).style.background = `linear-gradient(358.86deg, #000 0.9%, rgba(0, 0, 0, 0) 50%), no-repeat center/cover url(${
          item.urlToImage || 'images/news_placeholder.jpg'
        })`;
        newsClone.querySelector('.news__item-grid').setAttribute('href', item.url);
        newsClone.querySelector('.news__meta-date-grid').textContent = item.publishedAt
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('-');

        newsClone.querySelector('.news__description-title-grid').textContent = item.title;
        newsClone.querySelector('.news__description-content-grid').textContent = item.description;

        fragmentGrid.append(newsClone);
      } else {
        const newsClone = newsItemFlex.content.cloneNode(true) as HTMLElement;

        if (idx % 2) newsClone.querySelector('.news__item-flex').classList.add('alt');

        newsClone.querySelector<HTMLElement>('.news__meta-photo-flex').style.backgroundImage = `url(${
          item.urlToImage || 'images/news_placeholder.jpg'
        })`;
        newsClone.querySelector('.news__meta-author-flex').textContent = item.author || item.source.name;
        newsClone.querySelector('.news__meta-date-flex').textContent = item.publishedAt
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('-');

        newsClone.querySelector('.news__description-title-flex').textContent = item.title;
        newsClone.querySelector('.news__description-source-flex').textContent = item.source.name;
        newsClone.querySelector('.news__description-content-flex').textContent = item.description;
        newsClone.querySelector('.news__read-more-flex a').setAttribute('href', item.url);

        fragmentFlex.append(newsClone);
      }
    });

    document.querySelector('.news__grid').innerHTML = '';
    document.querySelector('.news__grid').appendChild(fragmentGrid);
    document.querySelector('.news__flex').innerHTML = '';
    document.querySelector('.news__flex').appendChild(fragmentFlex);
  }
}

export default News;
