import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private baseURL = `http://localhost:3000/api`
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>("http://localhost:3000/users");
  }
  getOneUser(id: any): Observable<IUser> {
    return this.http.get<IUser>("http://localhost:3000/users/" + id);
  }
  deleteUser(id: any): Observable<IUser> {
    return this.http.delete<IUser>("http://localhost:3000/users/" + id);
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`http://localhost:3000/users/${user.id}`, user)
  }
  
}
