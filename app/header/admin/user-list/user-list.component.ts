import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent {
 
  constructor( private userservice:UserService){
   
  }
  userList=this.userservice.GetAllUsers();

  

}