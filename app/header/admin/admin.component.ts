import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers:[UserService],
 
})
export class AdminComponent {
 constructor(private userservice:UserService)
 {

 }
 name :string=""
 gender:string="male";
 subType:string="yearly";
 status:string ="active";

CreateNewUser()
{
  this.userservice.CreateUser(this.name,this.gender,this.subType,this.status);

}
}