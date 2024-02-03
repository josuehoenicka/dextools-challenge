import { Component } from '@angular/core';
import { toast } from '../../enums/toast';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private messageService: MessageService, private router: Router) {}

  onLogout(): void {
    this.showMSG(toast.info, 'Logged out', 'Come back soon! 😢');

    /* Note: Wait 2,5 seconds to redirect */
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2500);
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
