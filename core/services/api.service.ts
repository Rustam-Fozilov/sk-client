import axios from "axios";
import { getBaseApiUrl } from "../utils/apiUrl.util";

export class ApiService {
  private baseUrl: string = getBaseApiUrl();

  constructor(baseUrl: string = this.baseUrl) {
    this.baseUrl = baseUrl;
  }

  public setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async get(url: string, params?: object, headers?: object) {
    const token = sessionStorage.getItem('authToken');
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    return await axios.get(this.baseUrl + url, {
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
      .post(this.baseUrl + url, params, {
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
      .put(this.baseUrl + url, params, {
        headers: {
          ...authHeader,
          ...headers,
        },
      })
  }

  public async delete(url: string, headers?: object) {
    const token = sessionStorage.getItem('authToken');
    const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    return await axios
      .delete(this.baseUrl + url, {
        headers: {
          ...authHeader,
          ...headers,
        },
      })
  }
}
