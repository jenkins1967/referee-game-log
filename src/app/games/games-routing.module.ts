import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailComponent } from './game-detail.component';
import { GamesComponent } from './games.component';
import { GameEditorComponent } from './game-editor.component';
import { AuthenticationGuard } from '../authentication/services/authentication.guard';
import { GamesSelectorComponent } from './games-selector.component';
import { UserService } from '../authentication/services/user.service';

const routes: Routes = [
  {
    path:'games',
    component:GamesComponent,
    canActivate: [AuthenticationGuard],
    children:[
      {
        path:'',
        component:GamesSelectorComponent        
      },
      {
        path:'new',
        component:GameEditorComponent
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
