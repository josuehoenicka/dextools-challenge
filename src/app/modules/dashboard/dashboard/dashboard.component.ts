import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { toast } from 'src/app/common/enums/toast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const token = params['token'];
      console.log('Token:', token);
    });
  }

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
