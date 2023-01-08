export class Town {
  constructor(
    public townid: string,
    public countyid: string,
    public total_suppliers: number,
    public district: string,
    public district_eng: string,
    public longitude: number,
    public latitude: number
  ){}
}
