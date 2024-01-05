import { Component, inject } from '@angular/core';
import { subscriberServices } from 'src/app/service/subscriber.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  onSubscribe(){
    let subservice=new subscriberServices();
    subservice.onsubscribeClicked('quaterly');
  }

}
