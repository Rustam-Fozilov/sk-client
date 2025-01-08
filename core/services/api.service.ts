import axios from "axios";
import { getBaseApiUrl } from "../utils/apiUrl.util";

export class ApiService {
  private baseUrl: string = 'https://api.surish-kerak.uz';

  constructor(baseUrl: string = this.baseUrl) {
    this.baseUrl = baseUrl;
  }

  public setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async get(url: string, params?: object, headers?: object) {
    const token = sessionStorage.getItem('authToken');
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    return await axios.get('https://api.surish-kerak.uz' + url, {
      params: params,
      headers: {
        ...authHeader,
        ...headers,
      },
    });
  }

  public async post(url: string, params?: object, headers?: object) {
    const token = sessionStorage.getItem('authToken');
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    return await axios
      .post('https://api.surish-kerak.uz' + url, params, {
        headers: {
          ...authHeader,
          ...headers,
        },
      })
  }

  public async put(url: string, params?: object, headers?: object) {
    const token = sessionStorage.getItem('authToken');
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    return await axios
      .put('https://api.surish-kerak.uz' + url, params, {
        headers: {
          ...authHeader,
          ...headers,
        },
      })
  }

  public async delete(url: string, params?: object, headers?: object) {
    const token = sessionStorage.getItem('authToken');
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    return await axios
      .delete('https://api.surish-kerak.uz' + url, {
        params: params,
        headers: {
          ...authHeader,
          ...headers,
        },
      })
  }
}
