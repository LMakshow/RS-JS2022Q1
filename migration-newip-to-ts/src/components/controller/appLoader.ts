import { ILoad, Loader } from './loader';

class AppLoader extends Loader implements Partial<ILoad> {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '0b493ad2690e4afcbe87fad6033fe24b', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
