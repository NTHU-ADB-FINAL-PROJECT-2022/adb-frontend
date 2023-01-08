export class CancelSupplier {
  constructor(
    public supplier_id: number,
    public supplier_name: string,
    public address: string,
    public latitude: number,
    public longitude: number,
    public top_product: CancelProduct[],
    public top_reason: TopReason[]
  ) {}
}

export class CancelProduct {
  constructor(
    public product_id: string,
    public product_name: string,
    public cancel_reason: string,
    public frequency: number
  ) {}
}

export class TopReason {
  constructor(
    public cancel_reason: string,
    public frequency: number
  ) {}
}
