import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private messageService: MessageService,
    private productsService: ProductsService,
    private localStorage: LocalstorageService,
    private formBuilder: FormBuilder
  ) {}

  productForm!: FormGroup;
  fileUploaded: boolean = false;
  tokenFromLogin: any;
  filesLength: number = 0;
  arr_filesUploaded: any[] = [];

  ngOnInit(): void {
    this.createForm();
    this.tokenFromLogin = this.localStorage.getLoginResponseFromLocalStorage();
    console.error(this.tokenFromLogin);
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      SKU: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      pictures: [''],
      price: ['', Validators.required],
      currency: ['', Validators.required],
    });
  }

  onCancelChild() {
    this.onCancelEvent.emit(true);
  }

  onSave() {
    if (this.productForm.valid) {
      this.productsService
        .addData(this.tokenFromLogin, this.productForm.value)
        .subscribe(
          (res) => {
            console.error(res);
          },
          (error) => {
            console.error(error);
          }
        );
    } else {
      this.showMSG(
        toast.error,
        'Error',
        'Please fill out all required fields and upload at least one product'
      );
    }
  }

  onSelectFileUploadChild(event: any) {
    if (event.files.length > 0) {
      this.arr_filesUploaded.push(...event.files);
      this.fileUploaded = true;
      this.showMSG(toast.success, 'Ok', 'The product was added');
    }
    console.error(this.arr_filesUploaded);
  }

  onRemoveFile(file: any) {
    console.error(file);
    const index = this.arr_filesUploaded.indexOf(file.file);
    if (index !== -1) {
      this.arr_filesUploaded.splice(index, 1);
    }
    if (this.arr_filesUploaded.length === 0) {
      this.fileUploaded = false;
    }
    this.showMSG(toast.success, 'Ok', 'The product was removed');
    console.error(this.arr_filesUploaded);
  }

  onUploadFileUploadChild(event: any) {
    const file: File = event.files;
    this.onFileUploadedEvent.emit(file);
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
