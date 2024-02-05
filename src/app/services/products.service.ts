import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'http://vps.churrasco.digital:3005/products';

  constructor(private http: HttpClient) {}

  getProducts(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    };
    return this.http.get(this.productsUrl, httpOptions);
  }
}
