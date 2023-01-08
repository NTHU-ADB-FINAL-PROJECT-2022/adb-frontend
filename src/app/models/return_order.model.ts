export class ReturnOrder {
  constructor(
    public rs_number: string,
    public product_id: string,
    public product_name: string,
    public longitude: number,
    public latitude: number,
    public address: string,
    public return_reason: string
  ) {}
}