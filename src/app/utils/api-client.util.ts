import axios from 'axios';

interface IHttpRequestConfig {
  baseURL?: string,
  timeout?: number,
  params?: Object
}

const DEFAULT_CONFIG: IHttpRequestConfig = {
  baseURL: 'http://localhost:4040/api/',
  timeout: 1000
}

export default class ApiClient {
  private _axiosInstance: any;

  constructor() {
    this._axiosInstance = axios.create(DEFAULT_CONFIG);

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  *get(url: string, config?: IHttpRequestConfig) {
    try {
      yield this._axiosInstance.get(url, config);
    } catch(err) {
      throw new Error(err);
    }
  }

  *post(url: string, data?: any, config?: IHttpRequestConfig) {
    try {
      yield this._axiosInstance.post(url, data || {}, config || {});
    } catch(err) {
      throw new Error(err);
    }
  }
}