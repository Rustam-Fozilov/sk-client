import { ApiService } from "./api.service";
import { type Blog } from "../types/blog.type";
import Swal from "sweetalert2";

export class BlogService {
  public blogs: Blog[] = [];
  private apiService = new ApiService();

  public async fetchBlogs(params?: Object, headers?: Object) {
    let pagination: any = {};

    await this.apiService
      .get('/api/blogs', params, headers)
      .then(res => {
        this.blogs = res.data.data;
        pagination = res.data.pagination;
      })
      .catch(err => {
        //
      });

    return {
      blogs: this.blogs,
      pagination: pagination
    };
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
