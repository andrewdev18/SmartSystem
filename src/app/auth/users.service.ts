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

  loginUser(credentials: { username: string, password: string }) {
    return this.http.post(`${this.apiUrl}/user/login`, credentials);
  }

  // login(user: string, pass: string) {
  //   let currentUser: any;
  //   this.loginUser(user, pass).subscribe(res => {
  //     currentUser = res;
  //   });
  //   if (currentUser.length > 0) {
  //     sessionStorage.setItem("user", JSON.stringify(currentUser));
  //     return true;
  //   }
  //   return false;
  // }

  loginTemp(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  getUser(): any {
    let user: any;
    let data: string | null = sessionStorage.getItem("user")!;
    if (data != null) {
      user = JSON.parse(data);
    }
    return user;
  }

  logout() {
    sessionStorage.removeItem("user");
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/user/register`, user);
  }
}
