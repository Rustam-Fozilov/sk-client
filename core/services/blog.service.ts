import { ApiService } from "./api.service";
import { type Blog } from "../types/blog.type";
import Swal from "sweetalert2";

export class BlogService {
  public blogs: Blog[] = [];
  public pagination: any = {};
  private apiService = new ApiService();

  public async fetchBlogs(params?: Object, headers?: Object) {
    await this.apiService
      .get('/api/blogs', params, headers)
      .then(res => {
        this.blogs = res.data.data;
        this.pagination = res.data.pagination;
      })
      .catch(err => {
        //
      });

    return {
      blogs: this.blogs,
      pagination: this.pagination
    };
  }

  public async fetchBlogById(id: number, params?: Object, headers?: Object) {
    let blog: Blog|null = null;

    await this.apiService
      .get(`/api/blogs/${id}`, params, headers)
      .then(res => {
        blog = res.data;
      });

    return blog;
  }

  public async latestBlog(params?: Object, headers?: Object) {
    let blog: any = {};

    await this.apiService
      .get('/api/blogs/latest', params, headers)
      .then(res => {
        blog = res.data
      })
      .catch((e) => {
        //
      });

    return blog;
  }

  public async saveBlog(id: number) {
    await this.apiService
      .post('/api/user/saved/add', {
        'saveable_type': 'blog',
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

  public async unsaveBlog(id: number) {
    await this.apiService
      .delete('/api/user/saved/delete/', {
        'saveable_type': 'blog',
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

  public async likeBlog(id: number) {
    await this.apiService
      .post('/api/user/liked/add', {
        'likeable_type': 'blog',
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

  public async unlikeBlog(id: number) {
    await this.apiService
      .delete('/api/user/liked/delete/', {
        'likeable_type': 'blog',
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
