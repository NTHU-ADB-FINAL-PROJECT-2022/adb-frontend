export class CancelOrder {
  constructor(
    public rg_number: number,
    public product_id: string,
    public product_name: string,
    public longitude: number,
    public latitude: number,
    public address: string,
    public cancel_reason: string
  ) {}
}