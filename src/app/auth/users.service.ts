import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loginUser(user: string, pass: string) {
    return this.http.get(`${this.apiUrl}/users?username=${user}&password=${pass}`)
  }

  login(user: string, pass: string) {
    let currentUser: any;
    this.loginUser(user, pass).subscribe(res => {
      currentUser = res;
    });
    if(currentUser.length > 0) {
      sessionStorage.setItem("user", JSON.stringify(currentUser));
      return true;
    }
    return false;
  }

  loginTemp(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  getUser(): User | undefined {
    let user: User | undefined;
    let data: string | null = sessionStorage.getItem("user")!;
    if (data != null) {
      user = JSON.parse(data);
    }
    return user;
  }

  logout() {
    sessionStorage.removeItem("user");
  }
}
