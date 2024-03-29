import { Component } from '@angular/core';
import { iProductos } from 'src/app/common/interfaces/products';
import { LocalstorageService } from 'src/app/services/localstorage.service';
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
  tokenFromLogin: any;

  columnsNamesProd: any[] = [
    { columna: 'Code' },
    { columna: 'Description' },
    { columna: 'Name' },
    { columna: 'Price' },
    { columna: 'Currency' },
    { columna: 'SKU' },
  ];

  constructor(private productsService: ProductsService, private localStorage: LocalstorageService) {}

  async ngOnInit(): Promise<void> {
    this.loading = true;
    await this.onLoadProducts();
  }

  onLoadProducts() {
    // console.error(res);
    this.tokenFromLogin = this.localStorage.getLoginResponseFromLocalStorage();
    this.productsService.getData(this.tokenFromLogin).subscribe((res) => {
      this.productsService.setProducts(res);
    });
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
        this.arr_products.unshift(arr_loadedProducts);
      }
    });

    this.loading = false;
  }
}
