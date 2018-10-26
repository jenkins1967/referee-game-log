import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from './services/user.service';
import { User } from '../core/models/user';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) : Promise<User> {

        return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {         
        return resolve(User.fromAuthUser(res as firebase.User));
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      })
    })
  }
}