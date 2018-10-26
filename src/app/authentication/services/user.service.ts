import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {BehaviorSubject } from "rxjs";
import { User } from "src/app/core/models/user";

@Injectable()
export class UserService {
  CurrentUser = new BehaviorSubject<User>(null);
  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth)
   {
     afAuth.user.subscribe((fbUser:firebase.User) =>{
       if(fbUser){
        const user = User.fromAuthUser(fbUser);
        this.CurrentUser.next(user);
       }
       else{
         this.CurrentUser.next(null);
       }
     })
   }

  getCurrentUser(){    
    this.afAuth.user

    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
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
}

