import { Component } from '@angular/core';
import { subscriberServices } from '../service/subscriber.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers:[subscriberServices]
})
export class HeaderComponent {
  subservice:subscriberServices;
  constructor(subservice:subscriberServices)
  {
    this.subservice=subservice;
  }
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  onSubscribe(){
    this.subservice.onsubscribeClicked("yearly");
  }
}
