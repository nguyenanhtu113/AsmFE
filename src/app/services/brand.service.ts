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

  addBrand(brand: IBrand): Observable<IBrand> {
    return this.http.post<IBrand>("http://localhost:3000/brands", brand)
  }
}
