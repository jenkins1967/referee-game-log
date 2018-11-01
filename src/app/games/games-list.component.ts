import { Component, OnInit , Input} from '@angular/core';
import { Game } from './models/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input() games:Array<Game>;
  ngOnInit(){

  }
}
