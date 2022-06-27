import News from './news/news';
import Sources from './sources/sources';
import { NewsData, SourcesData } from "../types";

interface Viewer {
    news: News;
    sources: Sources;
    drawNews(data: NewsData): void;
    drawSources(data: SourcesData): void;
}

export class AppView implements Viewer {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData): void {
        const values: NewsData["articles"] | [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData): void {
        const values: SourcesData["sources"] | [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
