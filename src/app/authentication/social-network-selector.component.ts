import {Output, Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-social-network-selector',
  templateUrl: './social-network-selector.component.html',
  styleUrls: ['./social-network-selector.component.scss']
})
export class SocialNetworkSelectorComponent implements OnInit {
  @Input() actionName:string = "Login";
  @Output() googleSelected =new EventEmitter();
  @Output() facebookSelected =new EventEmitter();
  @Output() twitterSelected =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  tryTwitter(){
    this.twitterSelected.emit();
  }

  tryGoogle(){
    this.googleSelected.emit();
  }

  tryFacebook(){
    this.facebookSelected.emit();
  }


}
