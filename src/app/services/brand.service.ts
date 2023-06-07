import { Injectable } from '@angular/core';
import { IBrand } from '../interfaces/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  getAllBrand(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>("http://localhost:3000/brands")
  }

  getOneBrand(id: any): Observable<IBrand> {
    return this.http.get<IBrand>("http://localhost:3000/brands/" + id)
  }

  addBrand(brand: IBrand): Observable<IBrand> {
    return this.http.post<IBrand>("http://localhost:3000/brands", brand)
  }

  editBrand(brand: IBrand): Observable<IBrand> {
    return this.http.put<IBrand>(`http://localhost:3000/brands/${brand.id}`, brand)
  }
}
