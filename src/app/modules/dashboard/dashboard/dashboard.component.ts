import { Token } from '@angular/compiler';
import { Component, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { toast } from 'src/app/common/enums/toast';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';

enum TABs {
  WATCH,
  UPLOAD,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  currentTAB!: TABs;
  public localTABs = TABs;
  items!: MenuItem[];
  isloading: boolean = false;
  tokenFromLogin: any;
  products = [];

  constructor(
    private messageService: MessageService,
    private localStorage: LocalstorageService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.onInitViewTab(true);

    /* Note: Show skeleton */
    this.isloading = true;

    this.tokenFromLogin = this.localStorage.getLoginResponseFromLocalStorage();

    console.error(this.tokenFromLogin)

    if (this.tokenFromLogin) {
      this.getProducts(this.tokenFromLogin);
    } else {
      this.showMSG(toast.error, 'ERROR', 'Token not found in localStorage');
    }

    /* Note: Component loaded. Stop showing skeleton and activate TABs */
    this.isloading = false;
    this.onInitViewTab(false);
  }

  onInitViewTab(boolean?: boolean) {
    this.items = [
      {
        label: 'Watch Products',
        disabled: boolean,
        command: (event) => {
          this.currentTAB = TABs.WATCH;
        },
      },
      {
        label: 'Upload Products',
        disabled: boolean,
        command: (event) => {
          this.currentTAB = TABs.UPLOAD;
        },
      },
    ];
    this.currentTAB = TABs.WATCH;
  }

  getProducts(token: string) {
    this.productsService.getData(token).subscribe((res) => {
      this.productsService.setProducts(res);
    });
  }


  onCancelParent(cancelEvent: boolean) {
    this.showMSG(toast.success, 'Ok', 'The product was canceled');
    if (cancelEvent === true) this.onInitViewTab();
  }

  onFileUploadedParent(file: File) {
    console.log('File:', file);
  }

  onSaveSuccessfull(e: any){
    console.error(e);
    this.onInitViewTab();
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
