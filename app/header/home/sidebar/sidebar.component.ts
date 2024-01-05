import { Component } from '@angular/core';
import { subscriberServices } from 'src/app/service/subscriber.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers:[subscriberServices],
})
export class SidebarComponent {
  subservice:subscriberServices;
  constructor(subservice:subscriberServices)
  {
    this.subservice=subservice;
  }
  OnSubscribe(){
     this.subservice.onsubscribeClicked("monthly");
  }
}
