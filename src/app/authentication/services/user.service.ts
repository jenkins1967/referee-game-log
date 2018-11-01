import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot,  RouterStateSnapshot } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {BehaviorSubject,Subject, Observable, Observer } from "rxjs";
import { User } from "src/app/core/models/user";

@Injectable()
export class UserService implements Resolve<User> {
  
  currentUser = new Subject<User>();
  constructor(public afAuth: AngularFireAuth)
   {         
      this.afAuth.authState.subscribe((fbUser:firebase.User) =>{
        const newUser = fbUser ? User.fromAuthUser(fbUser):null;
        this.currentUser.next(newUser);        
      });
   }

  getCurrentUser():User|null{   
    var fbUser = this.afAuth.auth.currentUser; 
    if(fbUser){
      return User.fromAuthUser(fbUser);
    }
    return null;    
  }

  updateCurrentUser(value){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res)
      }, err => reject(err))
    })
  }

  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<User> {
    return Observable.create((obs:Observer<User>) =>{
      obs.next(this.getCurrentUser());
      obs.complete();      
    });    
  }
}

