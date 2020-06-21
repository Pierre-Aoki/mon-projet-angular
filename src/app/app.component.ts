import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of, from, Subscription } from 'rxjs';
import 'rxjs-compat';
import { verify } from 'crypto';
import { error } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit, OnDestroy {
  
  secondes: number; 
  counterSubscription: Subscription;

  constructor() { }
  
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe;
  }

}
 