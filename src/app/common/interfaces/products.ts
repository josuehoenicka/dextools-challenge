export interface iProductos {
  _id: string;
  code: number;
  description: string;
  price: number;
  sku: string;
  currency: string;
  name: string;
  pictures: Array<string>;
}
