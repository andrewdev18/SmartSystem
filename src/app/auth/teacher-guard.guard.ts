import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuardGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user: User | undefined = this.userService.getUser();
    if (user) {
      if (user.role == 'teacher') {
        return true;
      }
    }
    this.router.navigate(['home']);
    return false;
  }
}
