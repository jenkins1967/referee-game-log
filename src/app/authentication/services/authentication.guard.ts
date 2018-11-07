
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { Observable, Observer, from } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
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

  canActivate(): Promise<boolean> {

   /*     return this.userService.user().pipe(
      take(1),
      map(user =>{
        return user != null;
      }),
      tap(loggedIn =>{
        if(!loggedIn){
            this.router.navigate(["login"]);
        }
      })
    );
  }*/
  return this.userService.isAuthenticated().then((loggedIn:boolean) =>{
    if(loggedIn) {
      return true;
    }    
      this.router.navigate(["login"]);    
      return false;
    },
    (reason) =>{
      this.router.navigate(["login"]);  
      return false;
    })
  }
}