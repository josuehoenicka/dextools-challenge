import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { WatchProductsComponent } from './products/watch-products/watch-products.component';
import { UploadProductsComponent } from './products/upload-products/upload-products.component';
import { NavComponent } from 'src/app/common/components/nav/nav.component';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    DashboardComponent,
    WatchProductsComponent,
    UploadProductsComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FileUploadModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    TabMenuModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class DashboardModule { }
