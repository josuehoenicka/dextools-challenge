import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  private readonly tokenFromLogin = 'loginResponse';
  private readonly urlsKey = 'uploadedFileUrls';

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

  saveUrlsToLocalStorage(urls: string[]): void {
    localStorage.setItem(this.urlsKey, JSON.stringify(urls));
  }

  getUrlsFromLocalStorage(): string[] {
    const urlsString = localStorage.getItem(this.urlsKey);
    return urlsString ? JSON.parse(urlsString) : [];
  }
}
