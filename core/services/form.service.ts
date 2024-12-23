import { ApiService } from "./api.service";
import Swal from "sweetalert2";

export class FormService {
  private apiService = new ApiService();

  public async submitForm(form: any, params?: Object, headers?: Object) {
    let response = null;

    await this.apiService
      .post('/api/form', form, headers)
      .then(res => {
        if (res.status == 200) {
          Swal.fire({
            title: 'Muvaffaqiyatli yuborildi',
            icon: 'success',
            confirmButtonText: 'OK',
            heightAuto: false,
            customClass: {
              title: 'text-md',
              confirmButton: "bg-soft-blue text-white font-tt-medium rounded-lg",
            },
          });
        }
      })
      .catch(err => {
        if (err.response?.data?.errors) {
          Swal.fire({
            title: 'Nimadir xato ketti',
            text: err.response.data.errors[0]?.message,
            icon: 'error',
            customClass: {
              title: 'text-md',
              confirmButton: "bg-soft-blue text-white font-tt-medium rounded-lg",
            },
          });
        }
      });

    return response;
  }
}
