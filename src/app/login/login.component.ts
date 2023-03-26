import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, lightSpeedIn } from 'ng-animate';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  bounce:any;
  lightSpeedIn:any;
  constructor(private router:Router){}

  username:any
  password:any
  user:any
  pwd:String='';
  submit(){
    this.pwd=this.username.slice(0,3)+"123"
    if(this.password==this.pwd){
      this.user={
        'username':this.username,
        'password':this.password
      }
      localStorage.setItem('logged',JSON.stringify(this.user));
    }

    this.router.navigateByUrl('/user')
  }

}
