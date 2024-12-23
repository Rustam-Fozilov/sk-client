import { ApiService } from './api.service';

export class SearchService {
  public searchResults: any[] = [];
  private apiService = new ApiService();

  public async search(query: string, params?: Object, headers?: Object) {
    await this.apiService
      .post('/api/search', {
          search: query,
          ...params,
        },
        headers
      )
      .then(res => {
        this.searchResults = res.data;
      })
      .catch(err => {
        console.error(err);
      });

    return this.searchResults;
  }
}