import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgbDropdownModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


})
export class HomeComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  img:any='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
  img2:any='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
  img3:any='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';





}







