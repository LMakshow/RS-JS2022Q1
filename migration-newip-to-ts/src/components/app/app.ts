import AppController from '../controller/controller';
import { NewsData, SourcesData } from '../types';
import { AppView } from '../view/appView';

interface App {
  controller: AppController;
  view: AppView;
  start(): void;
}

class NewsApp implements Pick<App, 'start'> {
  private readonly _controller: AppController;
  private readonly _view: AppView;

  constructor() {
    this._controller = new AppController();
    this._view = new AppView();
  }

  public start() {
    document
      .querySelector('.sources')
      .addEventListener('click', (e) => this._controller.getNews(e, (data: NewsData) => this._view.drawNews(data)));
    this._controller.getSources((data: SourcesData) => this._view.drawSources(data));
  }
}

export default NewsApp;
