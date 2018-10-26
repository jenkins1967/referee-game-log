import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjuriesRoutingModule } from './injuries-routing.module';
import { InjuriesComponent } from './injuries.component';
import { InjuryEditorComponent } from './injury-editor.component';
import { InjuryListComponent } from './injury-list.component';
import { InjuryDetailComponent } from './injury-detail.component';

@NgModule({
  imports: [
    CommonModule,
    InjuriesRoutingModule
  ],
  declarations: [InjuriesComponent, InjuryEditorComponent, InjuryListComponent, InjuryDetailComponent]
})
export class InjuriesModule { }
