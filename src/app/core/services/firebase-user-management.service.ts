import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Observer, from } from 'rxjs';
import {map} from 'rxjs/operators';
import { UserInfo } from '../models/userInfo';
import * as moment from 'moment'; 
import { FirebaseBaseDataService } from './firebase-base-data.service';
import { UserService } from 'src/app/authentication/services/user.service';
import { UserManagementService } from './user-management.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUserManagementService  extends FirebaseBaseDataService implements UserManagementService{
  constructor(private readonly http:HttpClient,
    userService:UserService){
    super(userService);
  }

  getUser(uid:string):Observable<UserInfo>{
    return Observable.create((obs:Observer<UserInfo>) =>{
      super.getUserToken().then((token:string) =>{
        const url = `${super.getBaseUrl()}/users/${uid}.json?auth=${token}`;
        this.http.get(url, {observe:'body'}).pipe(
            map((result) =>{
              obs.next(result as UserInfo);
              obs.complete();
            })
        ).subscribe();
      });
    });    
    
  }

  addUser(user:User):Observable<void>{
    const userInfo = new UserInfo();
    userInfo.memberSinceTimestamp = moment.utc().valueOf();
    return this.updateUser(user, userInfo);
  }

  updateUser(user:User, userInfo:UserInfo):Observable<void>{
    return Observable.create((obs:Observer<void>) =>{
      super.getUserToken().then((token:string) =>{
        const url = `${super.getBaseUrl()}/users/${user.uid}.json?auth=${token}`;
        this.http.put(url, userInfo, {observe:'response'}).pipe(
            map((response) =>{
                if(response.ok){
                    obs.next(null);
                    obs.complete();
                }
                else{
                  console.error("Failed to add user: " + response.statusText);
                  obs.error(new Error("Failed to add user."));
                }
            })
        ).subscribe(() =>{});        
      }, (reason) =>{
        console.error("Token request rejected.");
      });
    });
  }
}
