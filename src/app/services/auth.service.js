import ApiClient from '../utils/api-client.util';

export class AuthService {
  _apiClient;

  constructor() {
    this._apiClient = new ApiClient();

    this.login = this.login.bind(this);
    this.checkToken = this.checkToken.bind(this);
  }

  async login(params = {}) {
    if (!params.email || !params.password) {
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

  async checkToken() {
    try {
      const result = await this._apiClient
                      .get('/auth/me', {});
      return result;
    } catch(err) {
      throw new Error(err);
    }
  }
}