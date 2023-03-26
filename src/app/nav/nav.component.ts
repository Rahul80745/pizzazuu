import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router:Router){}
  JSONuser:any;
  user:any;
  username:any;


  logout(){
    this.JSONuser=localStorage.removeItem('logged');
    this.router.navigateByUrl('');

  }

  ngOnInit(){
    if(localStorage.getItem('logged')==null)
    {
      this.router.navigateByUrl('');
    }
    else{
      this.JSONuser=localStorage.getItem('logged');
      this.user=JSON.parse(this.JSONuser);
      this.username=this.user.username
    }

  }



}


