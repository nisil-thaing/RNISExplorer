import ApiClient from '../utils/api-client.util';

export interface ILoginParams {
  username: string,
  password: string
}

export class AuthService {
  private _apiClient: ApiClient;

  constructor() {
    this._apiClient = new ApiClient();

    this.login = this.login.bind(this);
  }

  async login(params?: ILoginParams) {
    if (!params || !params.username || !params.password) {
      throw new Error('Login failed!');
    }

    try {
      const result = await this._apiClient
                      .post(
                        '/auth/login',
                        {
                          ...params,
                          email: params.username
                        });
      return result;
    } catch(err) {
      throw new Error(err);
    }
  }
}