import { Component } from '@angular/core';
import { IBrand } from 'src/app/interfaces/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent {
  brands: IBrand[] = [];

  constructor(private brandService: BrandService) {
    this.brandService.getAllBrand().subscribe(data => {
      this.brands = data
    }, error => console.log(error))
  }

}
