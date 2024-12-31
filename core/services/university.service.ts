import { type University } from "../types/university.type";
import { ApiService } from "./api.service";
import Swal from "sweetalert2";

export class UniversityService {
  public universities: University[] = [];
  public pagination: any = {};
  private apiService = new ApiService();

  public async fetchUniversities(params?: Object, headers?: Object) {
    await this.apiService
      .get('/api/universities', params, headers)
      .then(res => {
        this.universities = res.data.data;
        this.pagination = res.data.pagination;      
      })
      .catch(err => {
        //
      });

    return {
      universities: this.universities,
      pagination: this.pagination
    };
  }

  public async fetchUniversityById(id: number, params?: Object, headers?: Object) {
    let university: University|null = null;

    await this.apiService
      .get(`/api/universities/${id}`, params, headers)
      .then(res => {
        university = res.data;        
      })
      .catch(err => {
        //
      });

    return university;
  }

  public async fetchSavedUniversities(params?: Object, headers?: Object) {
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

  public async saveUniversity(id: number) {
    await this.apiService
      .post('/api/user/saved/add', {
        'saveable_type': 'university',
        'saveable_id': id
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
  }

  public async unsaveUniversity(id: number) {
    await this.apiService
      .delete('/api/user/saved/delete/', {
        'saveable_type': 'university',
        'saveable_id': id
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
  }

  public async likeUniversity(id: number) {
    await this.apiService
      .post('/api/user/liked/add', {
        'likeable_type': 'university',
        'likeable_id': id
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
  }

  public async unlikeUniversity(id: number) {
    await this.apiService
      .delete('/api/user/liked/delete/', {
        'likeable_type': 'university',
        'likeable_id': id
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
  }
}
