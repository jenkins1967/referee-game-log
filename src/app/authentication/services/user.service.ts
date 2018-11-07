import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject, Subject, Observable, Observer } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { User } from "src/app/core/models/user";

@Injectable()
export class UserService implements Resolve<User> {

  private fbUser: firebase.User;
  private authUser: firebase.User;
  currentUser = new Subject<User>();
  currentToken = new BehaviorSubject<string>(null);

  constructor(public afAuth: AngularFireAuth) {
    
    this.afAuth.user.subscribe((fbUser: firebase.User) => {
      this.updateCurrentUser(fbUser);
      this.updateCurrentToken(fbUser);      
    });

    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      this.authUser = fbUser;
      console.log("auth user " + fbUser);
    })
  }

  get userToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.afAuth.idTokenResult.subscribe((tokenResult: firebase.auth.IdTokenResult) => {
        resolve(tokenResult.token);
      });
    });
  }

  get authenticated(): boolean {
    return this.fbUser != null;
  }

  user(): Observable<User> {
    return this.afAuth.authState.pipe(
      take(1),
      map((user: firebase.User) => {
        if (user) {
          return User.fromAuthUser(user);
        }
        return null;
      })
    );
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.user().subscribe((value: User) => {
        if (value != null) {
          resolve(true);
        }
        else {
          reject(false);
        }
      })
    })

  }


  getCurrentUser(): Observable<User> {
    return Observable.create((obs: Observer<User>) => {
      this.afAuth.user.subscribe((fbUser: firebase.User) => {
        if (fbUser) {
          obs.next(User.fromAuthUser(fbUser));
        }
        else {
          obs.error("No user logged in.");
        }
        obs.complete();
      })
    })
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User | null> {
    return new Promise<User>((resolve, reject) => {
      this.user().subscribe((value: User) => {
        if (value) {
          resolve(value);
        }
        else {
          reject(null);
        }
      })
    });
    /*
     return this.afAuth.user.pipe(
        map((fbUser:firebase.User) =>{
          if(fbUser){
            return User.fromAuthUser(fbUser);
          }
          return null;
        })
     );
     */
  }

  private updateCurrentUser(fbUser:firebase.User){
    this.fbUser = fbUser;
    this.currentUser.next(fbUser ? User.fromAuthUser(fbUser) : null);
    console.log("fbUser now is " + fbUser);
  }

  private updateCurrentToken(fbUser:firebase.User){
    if (fbUser) {
      this.userToken.then((token: string) => {
        this.currentToken.next(token);
      })
    }
    else {
      this.currentToken.next(null);
    }
  }
}

