import { type University } from "../types/university.type";
import { ApiService } from "./api.service";

export class UniversityService {
  public universities: University[] = [];
  private apiService = new ApiService  

  public async fetchUniversities(params?: Object, headers?: Object) {
    await this.apiService
      .get('/api/universities', params, headers)
      .then(res => {
        this.universities = res.data.data;        
      })
      .catch(err => {
        console.error(err);
      });

    return this.universities;
  }

  public async fetchUniversityById(id: number, params?: Object, headers?: Object) {
    let university: University|null = null;

    await this.apiService
      .get(`/api/universities/${id}`, params, headers)
      .then(res => {
        university = res.data;        
      })
      .catch(err => {
        console.error(err);
      });

    return university;
  }
}
