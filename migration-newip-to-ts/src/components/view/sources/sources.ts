import './sources.css';
import { SourcesData } from '../../types';
import { DOMDraw } from '../../interfaces';

class Sources implements DOMDraw {
  draw(data: SourcesData['sources'] | []) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources').innerHTML = '';
    document.querySelector('.sources').append(fragment);
    if (document.querySelector('.sources').innerHTML === '')
      document.querySelector('.sources').innerHTML = `...No news sources to show for category: ${localStorage.getItem(
        'category'
      )}, language: ${localStorage.getItem('language')} and country: ${localStorage.getItem('country')}.`;
  }
}

export default Sources;
