import AppController from '../controller/controller';
import { NewsData, SourcesData } from '../types';
import { AppView } from '../view/appView';

interface App {
    controller: AppController;
    view: AppView;
    start(): void;
}

class NewsApp implements App {
    controller: AppController;
    view: AppView;
    
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data: NewsData) => this.view.drawNews(data)));
        this.controller.getSources((data: SourcesData) => this.view.drawSources(data));
    }
}

export default NewsApp;
