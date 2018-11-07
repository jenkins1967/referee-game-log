import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Observer, from } from 'rxjs';
import { UserInfo } from '../models/userInfo';

@Injectable({
  providedIn: 'root'
})
export abstract class UserManagementService {

  abstract getUser(uid:string):Observable<UserInfo>;
  abstract addUser(user:User):Observable<void>;
  abstract updateUser(user:User, userInfo:UserInfo):Observable<void>;
}



