import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private basePath = "users";
  constructor(private db:AngularFirestore) { }

  getUser(key: string): Observable<{}> {
    const itemPath =  `${this.basePath}/${key}`;
    var item = this.db.doc(itemPath);
    return item.valueChanges();
  }

  addUser(user:User):Observable<User>{
    const itemPath =  `${this.basePath}/${user.uid}`;
    
    return Observable.create((obs:Observer<User>)=>{
      this.db.doc(itemPath).set(user).then(() => {
        obs.next(user);
        obs.complete();
      })  
    })
    
  }
}
