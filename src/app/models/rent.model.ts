export class Rent {
  constructor(
    public id: number,
    public address: string,
    public land_area: number,
    public tarde_date: Date,
    public floor: string,
    public main_use: string,
    public material: string,
    public build_area: number,
    public room_num: number,
    public hall_num: number,
    public toilet_num: number,
    public price: string,
    public unit_price: string,
    public trade_id: string,
    public lat: number,
    public lon: number,
    public stationsNearBy: number,
    public martStations: any[],
    public hsrStations: any[],
    public trainStations: any[]
  ) {}
}
