import { Component } from '@angular/core';
import { subscriberServices } from 'src/app/service/subscriber.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
 OnSubscribe()
 {
  let subservice= new subscriberServices();
  subservice.onsubscribeClicked('quaterly');
 }
}
