import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0b493ad2690e4afcbe87fad6033fe24b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
