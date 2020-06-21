import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
    this.appareils = this.appareilService.apprareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    console.log('onEteindre');
    this.appareilService.switchOffAll();
  }

}
