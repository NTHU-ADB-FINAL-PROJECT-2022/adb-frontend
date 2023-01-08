export class Filter {
  constructor(
    public supplier_id: string,
    public city: string,
    public district: string,
    public radius: string,
    public season: number
  ) {}
}