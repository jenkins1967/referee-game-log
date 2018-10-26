
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean>{

    return Observable.create((obs:Observer<boolean>) => {
        this.userService.CurrentUser.subscribe((user:User) => {
          if(user != null)          {
            obs.next(true);
            obs.complete();
          }
          else{
            this.router.navigate(['/login']);
          }          
        });
      });
    }
  }