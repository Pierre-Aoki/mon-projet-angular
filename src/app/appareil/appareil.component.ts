import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent {
  //Propriété perso : 
  @Input() appareilId: number; 
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilIndex: number;

  constructor(private appareilService: AppareilService) {

  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus) {
      return 'green';
    } else {
      return 'red';
    }
   }

   onSwitchon() {
    this.appareilService.switchOnOne(this.appareilIndex);
   }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.appareilIndex);
  }
}
