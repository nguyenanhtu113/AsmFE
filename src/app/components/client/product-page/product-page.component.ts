import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products : IProduct[] = []
  constructor(private ProductService:ProductService){
    this.ProductService.getAllProduct().subscribe(data =>{
      this.products = data
    })
  }
}
