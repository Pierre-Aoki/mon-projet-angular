import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubejct.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils; 
      }
    );
    this.appareilService.emitAppareilSubject();    
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

}
