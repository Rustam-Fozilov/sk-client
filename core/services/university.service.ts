import { type University } from "../types/university.type";
import { ApiService } from "./api.service";

export class UniversityService {
  public universities: University[] = [];
  private apiService = new ApiService  

  public async fetchUniversities() {
    await this.apiService
      .get('/api/universities')
      .then(res => {
        this.universities = res.data.data;        
      })
      .catch(err => {
        console.error(err);
      });

    return this.universities;
  }
}
