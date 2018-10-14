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

  private getDataFromResponse(response: { status: number, data: any }) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Oops! Something went wrong!');
    }

    return response.data;
  }

  async get(url: string, config?: IHttpRequestConfig) {
    try {
      const result = await this._axiosInstance.get(url, config);

      const resData = this.getDataFromResponse(result);

      return resData;
    } catch(err) {
      throw new Error(err);
    }
  }

  async post(url: string, data?: any, config?: IHttpRequestConfig) {
    try {
      const result = await this._axiosInstance
                            .post(url, data || {}, config || {});

      const resData = this.getDataFromResponse(result);

      return resData;
    } catch(err) {
      throw new Error(err);
    }
  }
}