import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list.component';
import { GameDetailComponent } from './game-detail.component';
import { GamesComponent } from './games.component';
import { GameEditorComponent } from './game-editor.component';
import { GamesSelectorComponent } from './games-selector.component';
import { GamesService } from './services/games.service';
import { FirebaseGamesService } from './services/firebase-games.service';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [GamesListComponent, GameDetailComponent, GamesComponent, GameEditorComponent, GamesSelectorComponent],
  providers:[
    {provide:GamesService, useClass:FirebaseGamesService}
  ]
})
export class GamesModule { }
