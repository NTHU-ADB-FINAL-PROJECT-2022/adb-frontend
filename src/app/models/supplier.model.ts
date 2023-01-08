export class Supplier {
  constructor(
    public supplier_id: number | string,
    public supplier_name: string,
    public address: string,
    public latitude: number | string,
    public longitude: number | string,
    public delay_ratio: number| string,
    public top_product: Product[]
  ) {}
}

export class Product {
  constructor(
    public product_id: string| number,
    public product_name: string,
    public frequency: string | number
  ) {}
}