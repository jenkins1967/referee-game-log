import { Component, OnInit } from '@angular/core';
import { GamesService } from './services/games.service';
import { Game } from './models/game';
import { User } from '../core/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games-selector',
  templateUrl: './games-selector.component.html',
  styleUrls: ['./games-selector.component.scss']
})
export class GamesSelectorComponent implements OnInit {

  scheduledGames:Array<Game>;
  pastGames:Array<Game>;
  constructor(private readonly gameService:GamesService, 
    private readonly route:ActivatedRoute, private readonly router:Router){}

  ngOnInit() {
    this.route.data.subscribe((data: { user:User }) => {
      const now = Date.now();
      this.gameService.all(data.user.uid).subscribe((games:any[]) =>{      
        this.scheduledGames = games.filter((game:Game) =>{
          game.scheduledStart > now;
        });
  
        this.pastGames = games.filter((game:Game) =>{
          game.scheduledStart <= now;
        });
      });
    });
        
  }
  create():void {
    this.router.navigate(["games", "new"]);
  }
}
