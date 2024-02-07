import { Component } from '@angular/core';
import { iProductos } from 'src/app/common/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-watch-products',
  templateUrl: './watch-products.component.html',
  styleUrls: ['./watch-products.component.css'],
})
export class WatchProductsComponent {
  products!: any[];
  arr_products: iProductos[] = [];
  prodRows: number = 1000;
  paginatorMore1000: boolean = false;
  totalRecordsProd: any;
  loading!: boolean;

  columnsNamesProd: any[] = [
    { columna: 'Code' },
    { columna: 'Description' },
    { columna: 'Name' },
    { columna: 'Price' },
    { columna: 'Currency' },
    { columna: 'SKU' },
  ];

  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    this.loading = true;
    await this.onLoadProducts();
  }

  onLoadProducts() {
    // console.error(res);
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
      console.error(res)
      for (var _i = 0; _i < this.products.length; _i++) {
        var arr_loadedProducts: iProductos = {
          _id: res[_i]['_id'],
          code: res[_i]['code'],
          description: res[_i]['description'],
          price: res[_i]['price'],
          sku: res[_i]['SKU'],
          currency: res[_i]['currency'],
          name: res[_i]['name'],
          pictures: res[_i]['pictures'],
        };
        this.arr_products.push(arr_loadedProducts);
      }
    });

    this.loading = false;
  }
}
