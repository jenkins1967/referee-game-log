import { Injectable } from '@angular/core';
import { FirebaseBaseDataService } from './firebase-base-data.service';
import { UserService } from 'src/app/authentication/services/user.service';
import { ReferenceDataService } from './reference-data.service';
import { HttpClient } from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';
import { RefereeGrade } from '../models/referee-grade';
import { Observable, observable } from 'rxjs';
import { Misconduct } from '../models/misconduct';

@Injectable({
  providedIn: 'root'
})
export class FirebaseReferenceDataService extends FirebaseBaseDataService implements ReferenceDataService {

  private baseUrl:string;
  constructor(private http:HttpClient,
    userService:UserService) {
    super(userService)
    this.baseUrl = `${super.getBaseUrl()}/referenceData`;
   }

   UssfRefereeGrades():Observable<Array<RefereeGrade>>{
     return Observable.create((observer =>{
        this.userService.currentToken.pipe(
          take(1),
          map((token:string) =>{
            return `${this.baseUrl}/ussfGrades.json?auth=${token}`;   
          }),
          map((url:string) =>{
            return this.http.get<Array<RefereeGrade>>(url).pipe(
              map((result) =>{
                  const list = new Array<RefereeGrade>();
                  for(let item in result)
                  {
                    if(result[item])
                    {
                      list.push(result[item] as RefereeGrade);
                    }
                  }
                  observer.next(list);
                  observer.complete();
              })).subscribe();
            })
        ).subscribe();        
     }));              
     
   }
  Misconducts():Observable<Array<Misconduct>>{
    return Observable.create((observer =>{
      this.userService.currentToken.pipe(
        take(1),
        map((token:string) =>{
          return `${this.baseUrl}/misconducts.json?auth=${token}`;   
        }),
        map((url:string) =>{
          return this.http.get<Array<Misconduct>>(url).pipe(
            map((result:Array<Misconduct>) =>{
                observer.next(result);
                observer.complete();
            }));
          })
      );        
   })); 
  }
}
