import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../authentication/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-user-information-display',
  templateUrl: './user-information-display.component.html',
  styleUrls: ['./user-information-display.component.scss']
})
export class UserInformationDisplayComponent{

  @Input() user:User = null;
  
}
