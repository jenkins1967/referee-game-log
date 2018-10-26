import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesListComponent } from './games-list.component';
import { GameDetailComponent } from './game-detail.component';
import { GamesComponent } from './games.component';
import { GameEditorComponent } from './game-editor.component';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [GamesListComponent, GameDetailComponent, GamesComponent, GameEditorComponent]
})
export class GamesModule { }
