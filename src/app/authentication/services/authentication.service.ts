import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UserCredential, AuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) {

  }

  doFacebookLogin() {
    
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      return this.signInWithProvider(provider);
  }

  doTwitterLogin() {
      let provider = new firebase.auth.TwitterAuthProvider();
      return this.signInWithProvider(provider);      
  }

  doGoogleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    return this.signInWithProvider(provider);
  }

  private signInWithProvider(provider: AuthProvider): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      return this.afAuth.auth
        .signInWithPopup(provider)
        .then((user) => {
          resolve(user);
        }, err => {
          console.log(err);
          reject(err);
        });
    })
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then((user) => {
          resolve(user);
        }, err => reject(err))
    })
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then((user) => {
          resolve(user);
        }, err => reject(err))
    })
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut()
        resolve();
      }
      else {
        reject();
      }
    });
  }
}

