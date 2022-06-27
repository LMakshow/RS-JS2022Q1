import { NewsData, SourcesData } from "../types";

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
    getResp(e:{ endpoint: string, options?: {}}, callback: ((data?: NewsData | SourcesData) => void)): void;
    errorHandler(res: Response): Response;
    makeUrl(options: {}, endpoint: string): string;
}

export class Loader implements ILoad {
    baseLink: string;
    options: { [key: string]: string }

    constructor(baseLink: string, options: { [key: string]: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp( { endpoint, options = {} }: { endpoint: string, options?: {} }, callback = () => {
        console.error('No callback for GET response');
    }): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
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

    load(method: string, endpoint: string, callback: { (data: {}): void }, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}
