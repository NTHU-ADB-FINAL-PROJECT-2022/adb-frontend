export class CancelProduct {
  constructor(
    public supplier_id: number,
    public supplier_name: string,
    public product_id: string,
    public product_name: string,
    public cancel_reason: string,
    public frequency: number,
  ) {}
}