import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private readonly tokenFromLogin = 'loginResponse';

  constructor() { }

  getLoginResponseFromLocalStorage(): any {
    const response = localStorage.getItem(this.tokenFromLogin);
    return response ? JSON.parse(response) : null;
  }

  saveLoginResponseToLocalStorage(response: any): void {
    localStorage.setItem(this.tokenFromLogin, JSON.stringify(response));
  }

  clearLocalStorage(): void {
    localStorage.removeItem(this.tokenFromLogin);
  }

}
