import { ApiService } from './api.service';
import Swal from 'sweetalert2';

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

  public async historyList(params?: Object) {
    let history: any = [];

    await this.apiService
      .get('/api/user/search/history/list', params)
      .then(res => {
        history = res.data.data;
      });

    return history;
  }

  public async saveSearch(type: string, id: number) {
    await this.apiService
      .post('/api/user/search/history/add', {
        'searchable_type': type,
        'searchable_id': id,
      });
  }

  public async removeHistory(type: string, id: number) {
    await this.apiService
      .delete('/api/user/search/history/delete', {
        'searchable_type': type,
        'searchable_id': id,
      })
      .catch(e => {
        Swal.fire({
          title: 'Nimadir xato ketti',
          text: 'Qayta urinib ko\'ring',
          icon: 'error',
          customClass: {
            title: 'text-md',
            confirmButton: "bg-primary-blue text-white font-tt-medium rounded-lg",
          },
        });
      })
  }
}