import { NewsData, SourcesData } from '../types';
import AppLoader from './appLoader';
import { ILoad } from './loader';

interface Controller extends ILoad {
  getSources(
    category: string,
    language: string,
    country: string,
    callback: ((data?: SourcesData) => void) | undefined
  ): void;
  getNews(e: Event, callback: ((data?: NewsData) => void) | undefined): void;
}

class AppController extends AppLoader implements Controller {
  getSources(
    category: string,
    language: string,
    country: string,
    callback: ((data?: SourcesData) => void) | undefined
  ) {
    super.getResp(
      {
        endpoint: 'sources',
        options: {
          category: category,
          language: language,
          country: country,
        },
      },
      callback
    );
  }

  getNews(e: Event, callback: ((data?: NewsData) => void) | undefined) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
