import { ApiService } from "./api.service";
import Swal from "sweetalert2";

export class BlogService {
  public blogs: any[] = [];
  private apiService = new ApiService();

  public async fetchBlogs(params?: Object, headers?: Object) {
    await this.apiService
      .get('/api/blogs', params, headers)
      .then(res => {
        this.blogs = res.data.data;        
      })
      .catch(err => {
        console.error(err);
      });

    return this.blogs;
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
}
