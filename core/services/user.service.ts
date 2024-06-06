export class UserService {
  private f_name: string | null;
  private l_name: string | null;
  private phone: string | null;
  private email: string | null;
  private avatar: string | null;

  constructor(f_name = null, l_name = null, email = null, phone = null, avatar = null) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.email = email;
    this.phone = phone;
    this.avatar = avatar;
  }

  public getUser() {
    return {
      f_name: this.f_name,
      l_name: this.l_name,
      email: this.email,
      phone: this.phone,
      avatar: this.avatar,
    }
  }

  public setUser(
      f_name: string,
      l_name: string,
      email: string,
      phone: string,
      avatar: string
  ) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.email = email;
    this.phone = phone;
    this.avatar = avatar;
  }
}