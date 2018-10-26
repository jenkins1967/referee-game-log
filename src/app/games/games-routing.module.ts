import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './games-list.component';
import { GameDetailComponent } from './game-detail.component';
import { GamesComponent } from './games.component';
import { GameEditorComponent } from './game-editor.component';

const routes: Routes = [
  {
    path:'games',
    component:GamesComponent,
    children:[
      {
        path:'',
        component:GamesListComponent
      },
      {
        path:'new',
        component:GameEditorComponent,
      },
      {
        path:':id',
        component:GameDetailComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
