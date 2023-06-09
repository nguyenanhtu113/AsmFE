import { Injectable } from '@angular/core';
import { IBrand } from '../interfaces/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  API_URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAllBrand(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>(`${this.API_URL}/categories`)
  }

  getOneBrand(id: any): Observable<IBrand> {
    return this.http.get<IBrand>(`${this.API_URL}/categories/` + id)
  }

  addBrand(brand: IBrand): Observable<IBrand> {
    return this.http.post<IBrand>(`${this.API_URL}/categories`, brand)
  }

  editBrand(brand: IBrand): Observable<IBrand> {
    return this.http.put<IBrand>(`${this.API_URL}/categories/${brand._id}`, brand)
  }
}
