import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

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
    this.appareilService.switchOffAll();
  }
}
