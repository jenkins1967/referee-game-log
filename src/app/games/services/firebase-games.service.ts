import { Injectable } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';
import { User } from 'src/app/core/models/user';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { GamesService } from './games.service';

@Injectable({
    providedIn: 'root'
  })
  export class FirebaseGamesService implements GamesService {
    private gamesCollectionBase = "/games";
    private list:AngularFireList<Game>;
      
    constructor(private readonly db:AngularFireDatabase)
       {               
     }
  
     all(uid:string):Observable<Game[]>{
       return this.getList(uid).valueChanges();
     }
     
     add(game:Game){
       game.id = this.db.createPushId();
       this.getList(game.owner).push(game);
     }
    update(game:Game){
      this.getList(game.owner).set(game.id, game);
    }
    remove(uid:string,key:string){
      this.getList(uid).remove(key);
    }

    private getList(uid:string):AngularFireList<Game>{
        return this.db.list<Game>(`${this.gamesCollectionBase}/${uid}`); 
    }
  }