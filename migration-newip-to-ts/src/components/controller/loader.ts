import { NewsData, SourcesData } from '../types';
import { HTTPStatus } from '../enum';

/**
 * Loader takes link (here to newsApi) and apiKey in options.
 * getResp is the main method to download news, uses load.
 * errorHandler throws 401 or 404 errors.
 * makeUrl creates URL from baseLink and endpoint.
 * load method 1. create URL, 2. Check for errors, 3. downloads news, 4. process them.
 */
export interface ILoad {
  baseLink: string;
  options: { [key: string]: string };
  getResp(e: { endpoint: string; options?: Record<string, unknown> }, callback: <T>(data?: T) => void): void;
  errorHandler<T extends Response>(res: T): T;
  makeUrl(options: Record<string, unknown>, endpoint: string): string;
}

export class Loader implements Readonly<ILoad> {
  baseLink: string;
  options: { [key: string]: string };

  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: Record<string, unknown> },
    callback = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler<T extends Response>(res: T): T {
    if (!res.ok) {
      if (HTTPStatus[res.status])
        console.log(`Sorry, but there is ${res.status} ${HTTPStatus[res.status]} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { [key: string]: string }, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: { (data?: NewsData | SourcesData): void }, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => this.errorHandler(res))
      .then((res) => res.json())
      .then((data?: NewsData | SourcesData) => callback(data))
      .catch((err?: string) => console.error(err));
  }
}
