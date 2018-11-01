
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { Observable, Observer } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return Observable.create((obs: Observer<boolean>) => {      
      var user = this.userService.getCurrentUser();
      console.log("Auth guard user is " + user);
      if (user) {
        obs.next(true);
        obs.complete();
        return;
      }
      else {
        this.userService.currentUser.subscribe((user: User) => {
          const authenticated = user != null;
          console.log("Auth guard is returning " + authenticated);
          if (!authenticated) {
            this.router.navigate(["login"]);
          }
          obs.next(authenticated);
          obs.complete();
        });
      }
    });
  }
}