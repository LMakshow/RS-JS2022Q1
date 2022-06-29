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
  public category: string;
  public language: string;
  public country: string;

  constructor() {
    this._controller = new AppController();
    this._view = new AppView();
  }

  public start() {
    document
      .querySelector('.sources')
      .addEventListener('click', (e) => this._controller.getNews(e, (data: NewsData) => this._view.drawNews(data)));

    document.querySelector('.header__links').addEventListener('click', (e) => this.changeSource(e));

    this.accessStorage();
    this._controller.getSources(this.category, this.language, this.country, (data: SourcesData) =>
      this._view.drawSources(data)
    );
  }

  public accessStorage() {
    if (localStorage.getItem('category')) {
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'all';
      localStorage.setItem('category', 'all');
    }

    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language');
    } else {
      this.language = 'en';
      localStorage.setItem('language', 'en');
    }

    if (localStorage.getItem('country')) {
      this.country = localStorage.getItem('country');
    } else {
      this.country = 'us';
      localStorage.setItem('country', 'us');
    }
  }

  public changeSource(e: Event) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('category')) {
      this.category = target.innerHTML.toLowerCase();
      localStorage.setItem('category', this.category);
      this._controller.getSources(this.category, this.language, this.country, (data: SourcesData) =>
        this._view.drawSources(data)
      );
    }

    if (target.classList.contains('language')) {
      this.language = target.innerHTML.toLowerCase();
      localStorage.setItem('language', this.language);
      this._controller.getSources(this.category, this.language, this.country, (data: SourcesData) =>
        this._view.drawSources(data)
      );
    }

    if (target.classList.contains('country')) {
      this.country = target.innerHTML.toLowerCase();
      localStorage.setItem('country', this.country);
      this._controller.getSources(this.category, this.language, this.country, (data: SourcesData) =>
        this._view.drawSources(data)
      );
    }
  }
}

export default NewsApp;
