import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  //Propriété perso : 
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilIndex: number;

constructor(private appareilService: AppareilService) { }

  appareils: any[];

  ngOnInit(): void {
    this.appareils = this.appareilService.apprareils;
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

  onSwitch() {
    if (this.appareilStatus == 'allumé') {
      this.appareilService.switchOffOne(this.appareilIndex);
    } else if (this.appareilStatus == 'éteint') {
      this.appareilService.switchOnOne(this.appareilIndex);
    }
  }


}
