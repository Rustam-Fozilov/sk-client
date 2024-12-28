import { ApiService } from "./api.service";
import Swal from "sweetalert2";

export class AuthService {
  private apiService = new ApiService();

  public async login(code: string) {
    return await this.apiService
      .post('/api/auth/confirm/code', {
        code: code,
      })
      .then(res => {
        if (res.data.access_token) {
          sessionStorage.setItem('authToken', res.data.access_token);
          return true;
        } else {
          Swal.fire({
            title: 'Nimadir xato ketti',
            text: 'Qayta urinib ko\'ring',
            icon: 'error',
            customClass: {
              title: 'text-md',
              confirmButton: "bg-primary-blue text-white font-tt-medium rounded-lg",
            },
          });
          return false;
        }
      })
      .catch(err => {
        Swal.fire({
          title: 'Xato kod kiritdingiz',
          icon: 'error',
          customClass: {
            title: 'text-md',
            confirmButton: "bg-primary-blue text-white font-tt-medium rounded-lg",
          },
        });
        return false;
      });
  }

  public async me() {
    return await this.apiService
      .get('/api/user/me')
      .then(res => {
        sessionStorage.setItem('me', JSON.stringify(res.data));
        return true;
      })
      .catch(err => {
        this.logout();
      });
  }

  public async logout() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('me');

    await this.apiService
      .get('/api/logout')
      .then(res => {})
      .catch(err => {
        Swal.fire({
          title: 'Nimadir xato ketti',
          icon: 'error',
          customClass: {
            title: 'text-md',
            confirmButton: "bg-primary-blue text-white font-tt-medium rounded-lg",
          },
        });
      });
  }
}
