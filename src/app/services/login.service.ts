import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://login-user-theta.vercel.app/api/user'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logout`);
  }
}
