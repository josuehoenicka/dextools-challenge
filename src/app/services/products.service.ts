import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject: Subject<any[]> = new Subject<any[]>();
  private apiUrl = 'http://vps.churrasco.digital:3005';

  constructor(private http: HttpClient) {}

  getData(token: any): Observable<any> {
    console.error(token.token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token.token}`,
    });
    return this.http.get<any>(`${this.apiUrl}/products`, { headers: headers });
  }

  addData(token: any, productData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.apiUrl}/addproduct`, productData, { headers: headers });
  }

  setProducts(products: any[]) {
    this.productsSubject.next(products);
  }

  getProducts(): Observable<any[]> {
    return this.productsSubject.asObservable();
  }

}
