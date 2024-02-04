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
    { columna: 'Code' },
    { columna: 'Description' },
    { columna: 'Price' },
    { columna: 'More' },
    { columna: 'More 2' },
    { columna: 'More 3' },
  ];

  ngOnInit(): void {
    this.onLoadProducts()
  }

  onLoadProducts(res?: any) {
    // console.error(res);
    for (var _i = 0; _i < 100; _i++) {
      var arr_loadedProducts: iProductos = {
        code: 'test',
        description: 'Test',
        price: 0.0,
        more1: 0.0,
        more2: 0.0,
        more3: 0.0,
      };
      this.arr_products.push(arr_loadedProducts);
    }
  }
}
