import { Injectable } from '@angular/core';

import {of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:any[]=[

    {productId:'1A',productName:'burger',productPrice:'150',productImage:'https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg',productQnt: 1}

  ]

  addproduct(prod:any){
    this.products.push(prod)
  }

  viewMenu(){
    return of (this.products)
  }


  constructor() { }
}
