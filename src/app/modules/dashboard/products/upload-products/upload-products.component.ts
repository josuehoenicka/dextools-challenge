import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { toast } from 'src/app/common/enums/toast';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadProductsComponent {
  @Output() onCancelEvent: EventEmitter<true> = new EventEmitter<true>();
  @Output() onFileUploadedEvent: EventEmitter<File> = new EventEmitter<File>();

  constructor(private messageService: MessageService, private productsService: ProductsService,private localStorage: LocalstorageService) {}

  fileUploaded: boolean = false;
  tokenFromLogin: any;

  ngOnInit(): void {
    this.tokenFromLogin = this.localStorage.getLoginResponseFromLocalStorage();
    console.error(this.tokenFromLogin)
  }

  onCancelChild() {
    this.onCancelEvent.emit(true);
  }

  onSave(e?: any) {
    this.productsService.addData(this.tokenFromLogin, e).subscribe((res) => {
      console.error(res);
    });
  }

  onSelectFileUploadChild(event: any) {
    console.error(event);
    if (this.fileUploaded) {
      this.showMSG(toast.warn, 'Warn', 'The product was changed');
    } else {
      this.showMSG(toast.success, 'Ok', 'The product was added');
    }
    this.fileUploaded = true;
  }

  onUploadFileUploadChild(event: any) {
    console.error(event);
    const file: File = event.files[0];
    this.onFileUploadedEvent.emit(file);
  }

  onRemoveFile() {
    this.showMSG(toast.success, 'Ok', 'The product was removed');
    this.fileUploaded = false;
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
