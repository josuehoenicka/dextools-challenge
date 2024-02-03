import { Component } from '@angular/core';
import { iProductos } from 'src/app/common/interfaces/products';

@Component({
  selector: 'app-watch-products',
  templateUrl: './watch-products.component.html',
  styleUrls: ['./watch-products.component.css'],
})
export class WatchProductsComponent {
  arr_products: iProductos[] = [];
  prodRows: number = 1000;
  paginatorMore1000: boolean = false;
  totalRecordsProd: any;
  loading: boolean = false;

  columnsNamesProd: any[] = [
    { columna: 'Código' },
    { columna: 'Descripción' },
    { columna: 'Precio' },
    { columna: 'Subtotal' },
    { columna: 'IVA' },
    { columna: 'TOTAL' },
  ];

  ngOnInit(): void {
    this.onLoadProducts()
  }

  onLoadProducts(res?: any) {
    // console.error(res);
    for (var _i = 0; _i < 100; _i++) {
      var arr_loadedProducts: iProductos = {
        codigo: 'test',
        descripcion: 'Test',
        precio: 0.0,
        subtotal: 0.0,
        iva: 0.0,
        total: 0.0,
      };
      this.arr_products.push(arr_loadedProducts);
    }
  }
}
