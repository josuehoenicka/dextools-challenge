import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://vps.churrasco.digital:3005/products';

  constructor(private http: HttpClient) {}

  getProducts(token: any): Observable<any> {
    console.error(token.token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token.token}`,
    });
    return this.http.get<any>(this.apiUrl, { headers: headers });
  }
}
