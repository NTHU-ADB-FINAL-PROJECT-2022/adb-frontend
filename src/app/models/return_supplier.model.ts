export class ReturnSupplier {
  constructor(
    public supplier_id: number,
    public supplier_name: string,
    public address: string,
    public latitude: number,
    public longitude: number,
    public top_product: ReturnProduct[],
    public top_reason: TopReason[]
  ) {}
}

export class ReturnProduct {
  constructor(
    public product_id: string,
    public product_name: string,
    public return_reason: string,
    public frequency: number
  ) {}
}

export class TopReason {
  constructor(
    public return_reason: string,
    public frequency: number
  ) {}
}
