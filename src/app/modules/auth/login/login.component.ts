import { LocalstorageService } from './../../../services/localstorage.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { toast } from 'src/app/common/enums/toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  @ViewChild('inputPassword') inputPassword: any;
  @ViewChild('iconInputPassword') iconInputPassword: any;
  loginForm!: FormGroup;
  mostrarPassword = false;
  watermark: string;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private localStorage: LocalstorageService
  ) {
    this.watermark = '../../../../assets/img/churrasco.png';
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    let token = ''; /* Task: Change for EP's response*/

    this.authService.login(username, password).subscribe(
      (res) => {
        token = res;
        console.log(token);
        this.showMSG(toast.success, 'Log In', `Welcome back ${username} !`);
        this.localStorage.saveLoginResponseToLocalStorage(token);
        /* Note: Wait 2,5 seconds to redirect */
        setTimeout(() => {
          this.router.navigate(['home/dashboard']);
        }, 2500);
      },
      (error) => {
        console.error(error);
        if (error.status === 400) {
          this.showMSG(toast.error,"ERROR",'The username or password is incorrect');
        } else {
          this.showMSG(toast.error,"ERROR",'Authentication failed. Please try again');
        }
      }
    );
    console.error(username, password, token);
  }

  showMSG(
    severityShow: 'success' | 'info' | 'warn' | 'error' | 'custom',
    title: string,
    detail: string
  ) {
    this.messageService.add({
      severity: severityShow,
      summary: title,
      key: 'toast',
      detail: detail,
    });
  }
}
