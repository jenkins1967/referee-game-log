import { Component, OnInit } from '@angular/core';
import { UserService } from '../authentication/services/user.service';
import { User } from '../core/models/user';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  
  constructor() {

   }

  ngOnInit() {
    
  }

}
