import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisconductComponent } from './misconduct.component';
import { MisconductListComponent } from './misconduct-list.component';
import { MisconductDetailComponent } from './misconduct-detail.component';
import { MisconductEditorComponent } from './misconduct-editor.component';

const routes: Routes = [
  {
    path:'games/:id/misconduct',
    component:MisconductComponent,
    children:[
      {
          path:'',
          component:MisconductListComponent
      },
      {        
        path:':misconductId',
        component:MisconductDetailComponent
      },
      {
        path:'new',
        component:MisconductEditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisconductRoutingModule { }
