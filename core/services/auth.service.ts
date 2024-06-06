export class AuthService {
  private login: string;
  private password: string;

  constructor(login = '', password = '') {
    this.login = login;
    this.password = password;
  }

  public getLogin() {
    return this.login;
  }

  public setLogin(login: string) {
    this.login = login;
  }

  public getPassword() {
    return this.password;
  }

  public setPassword(password: string) {
    return this.password;
  }

  public userLogin() {
    console.log('User Login');
  }

  public userRegister() {
    console.log('User Register');
  }
}
