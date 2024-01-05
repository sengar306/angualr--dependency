import { Component, inject } from '@angular/core';
import { subscriberServices } from 'src/app/service/subscriber.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  providers:[subscriberServices],
})
export class HeroComponent {
  subservice:subscriberServices;
  constructor(subservice:subscriberServices)
  {
    this.subservice=subservice;
  }
  onSubscribe(){
     this.subservice.onsubscribeClicked("quaterly");
  }

}
