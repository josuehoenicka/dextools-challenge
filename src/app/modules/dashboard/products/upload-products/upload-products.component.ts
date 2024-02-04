import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UploadProductsComponent {
  @Output() onCancelEvent: EventEmitter<true> = new EventEmitter<true>();
  @Output() onFileUploadedEvent: EventEmitter<File> = new EventEmitter<File>();

  fileUploaded: boolean = false;

  onCancelChild() {
    this.onCancelEvent.emit(true);
  }

  onSave(e?: any) {

  }

  onSelectFileUploadChild(event: any) {
    console.error(event);
    this.fileUploaded = true;
  }

  onUploadFileUploadChild(event: any) {
    console.error(event);
    const file: File = event.files[0];
    this.onFileUploadedEvent.emit(file);
  }
}
