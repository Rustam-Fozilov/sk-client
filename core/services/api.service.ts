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
    return await axios
        .get(this.baseUrl + url, {
          params: params,
          headers: headers,
        })
  }

  public async post(url: string, params: object, headers?: object) {
    return axios
        .post(this.baseUrl + url, params, headers)
  }

  public async put(url: string, params?: object, headers?: object) {
    return await axios
        .put(this.baseUrl + url, params, headers)
  }

  public async delete(url: string, headers?: object) {
    return await axios
        .delete(this.baseUrl + url, headers)
  }
}