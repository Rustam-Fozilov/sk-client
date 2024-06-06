import axios from "axios";

export class ApiService {
  public get(url: string, params?: object, headers?: object) {
    axios
        .get(url, {
          params: params,
          headers: headers,
        })
  }

  public post(url: string, params: object, headers?: object) {
    axios
        .post(url, params, headers)
  }

  public put(url: string, params?: object, headers?: object) {
    axios
        .put(url, params, headers)
  }

  public delete(url: string, headers?: object) {
    axios
        .delete(url, headers)
  }
}