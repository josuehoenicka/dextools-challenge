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
  encapsulation: ViewEncapsulation.None
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
    private router: Router
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
    let token = 3 /* Task: Change for EP's response*/

    // this.authService.login(username, password).subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.error(error);
    //     if (error.status === 400) {
    //       this.showMSG(toast.error,"ERROR",'El usuario o contraseña son incorrectos');
    //     } else {
    //       this.showMSG(toast.error,"ERROR",'Error en la autenticación. Por favor, inténtelo de nuevo');
    //     }
    //   }
    // );
    this.router.navigate([`home/dashboard`]);
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
