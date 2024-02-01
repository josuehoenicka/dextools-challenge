import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  @ViewChild("inputPassword") inputPassword: any;
  @ViewChild("iconInputPassword") iconInputPassword: any;
  mostrarPassword = false;

  watermark: string;
  constructor(private renderer: Renderer2){
    this.watermark = "../../../../assets/img/churrasco.png";
  }

  verPassword() {
    this.mostrarPassword = !this.mostrarPassword;
    let tipoInput = this.mostrarPassword ? "text" : "password";
    this.inputPassword.nativeElement.type = tipoInput;

    /* NOTA: Si esta mostrar password agregar la clase 'pi-eye-slash', sino quitar la clase 'pi-eye-slash' del campo password.
    Esta lógica hace que el icono del ojito este tachado cuando la contraseña se esta mostrando, así el usuario clickeara para
    ocultar la contraseña, o viceversa */
    if (this.mostrarPassword) {
      this.renderer.addClass(
        this.iconInputPassword.nativeElement,
        "pi-eye-slash"
      );
    } else {
      this.renderer.removeClass(
        this.iconInputPassword.nativeElement,
        "pi-eye-slash"
      );
    }
  }
}
