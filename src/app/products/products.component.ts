import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private service:ProductService){}

  pid:any;
  pname:any;
  pprice:any;
  pimage:any;
   user:any;

   products:any[]=[

    {productId:'1A',productName:'burger',productPrice:'150',productImage:'https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg',productQnt:1},
    {productId:'2A',productName:'burger',productPrice:'150',productImage:'https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg',productQnt:1},
    {productId:'3A',productName:'burger',productPrice:'150',productImage:'https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg',productQnt:1},

  ]

  submit(prod:any){
    const ind=this.products.findIndex(obj=> obj.productId==prod.productId)

      this.service.addproduct(this.products[ind])
  }




}
