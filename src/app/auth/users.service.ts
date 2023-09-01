import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  login(user: User) {
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
