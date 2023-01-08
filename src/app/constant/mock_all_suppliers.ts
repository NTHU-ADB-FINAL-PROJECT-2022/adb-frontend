import { Supplier } from '../models/supplier.model';

export const SUPPLIERS: Supplier[] = [
  {
    supplier_id: 1000,
    supplier_name: '搜奇行銷股份有限公司',
    address: '台北市中正區八德路二段374號8樓之1',
    longitude: 121.529111,
    latitude: 25.04429,
    delay_ratio: 2,
    top_product: [],
  },
  {
    supplier_id: 10001,
    supplier_name: '薩摩亞商安鋒國際開發有限公司台灣分公司',
    address: '台北市南港區八德路4段768巷1弄18號13樓',
    longitude: 121.580566,
    latitude: 25.050152,
    delay_ratio: 2,
    top_product: [],
  },
  {
    supplier_id: 1002,
    supplier_name: '威健實業股份有限公司',
    address: '台北市內湖區內湖路一段306號3樓',
    longitude: 121.558442,
    latitude: 25.08507,
    delay_ratio: 2,
    top_product: [
      {
        frequency: 596,
        product_id: '7639308',
        product_name: '★HITACHI Touro Mobile 1T 2.5吋 USB3.0外接硬碟',
      },
      {
        frequency: 596,
        product_id: '7639308',
        product_name: '★HITACHI Touro Mobile 1T 2.5吋 USB3.0行動硬碟',
      },
      {
        frequency: 319,
        product_id: '7013587',
        product_name: 'HITACHI Touro Desk 2TB 3.5吋外接硬碟',
      },
    ],
  },
];
