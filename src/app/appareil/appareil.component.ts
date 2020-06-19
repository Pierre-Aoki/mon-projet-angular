import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {

  //Propriété perso : 
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilIndex: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus)
    {
      return 'green';
    } else{
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus == 'allumé') {
      this.appareilService.switchOffOne(this.appareilIndex); 
    } else if (this.appareilStatus == 'éteint') {
      this.appareilService.switchOnOne(this.appareilIndex);
    }
  }

}
