import { Component } from '@angular/core';


import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private service:ProductService){}

  products2:any[]=[];




 ngOnInit(){
  this.service.viewMenu().subscribe(res =>{this.products2=res})
 }
 delete(prod2:any){
      const ind=this.products2.findIndex(obj=> obj.productId==prod2.productId)
      this.products2.splice(ind,1)
 }
 inc(prod2:any){
    prod2.productQnt=prod2.productQnt+1 ;
 }
 del(prod2:any){
  if(prod2.productQnt>1){
    prod2.productQnt=prod2.productQnt-1

  }

 }


}
