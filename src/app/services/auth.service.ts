import ApiClient from '../utils/api-client.util';

export interface ILoginParams {
  email: string,
  password: string
}

export class AuthService {
  private _apiClient: ApiClient;

  constructor() {
    this._apiClient = new ApiClient();

    this.login = this.login.bind(this);
  }

  async login(params?: ILoginParams) {
    if (!params || !params.email || !params.password) {
      throw new Error('Login failed!');
    }

    try {
      const result = await this._apiClient
                      .post('/auth/login', params);
      return result;
    } catch(err) {
      throw new Error(err);
    }
  }
}