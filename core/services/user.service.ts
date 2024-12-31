import { ApiService } from "./api.service";
import Swal from "sweetalert2";

export class UserService {
  private apiService = new ApiService();

  public async fetchSavedData(params?: Object, headers?: Object) {
    let savedItems: any[] = [];
    let pagination: any = {};

    await this.apiService
      .get('/api/user/saved/list', params, headers)
      .then(res => {
        savedItems = res.data.data;
        pagination = res.data.pagination;      
      })
      .catch(err => {
        Swal.fire({
          title: 'Nimadir xato ketti',
          text: 'Qayta urinib ko\'ring',
          icon: 'error',
          customClass: {
            title: 'text-md',
            confirmButton: "bg-primary-blue text-white font-tt-medium rounded-lg",
          },
        });
      });

    return {
      savedItems: savedItems,
      pagination: pagination
    };
  }
}