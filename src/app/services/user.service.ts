import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(userId: string): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  getBalance(): Observable<{balance: number}> {
    const url = `${this.apiUrl}/balance`;
    return this.http.get<{balance: number}>(url);
  }
  changePassword(newPassword: string): Observable<User> {
    const url = `${this.apiUrl}/password`;
    return this.http.post<User>(url, {newPassword});
  }
  
}
