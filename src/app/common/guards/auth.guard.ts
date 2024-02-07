// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
  ) {}

  canActivate(): boolean {
    if (this.localStorageService.getLoginResponseFromLocalStorage()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
