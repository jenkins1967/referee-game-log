import { Game } from '../models/game';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class GamesService{
  abstract all(uid:string):Observable<Game[]>;  
  abstract add(game:Game);
  abstract update(game:Game);
  abstract remove(uid:string, key:string);
}


