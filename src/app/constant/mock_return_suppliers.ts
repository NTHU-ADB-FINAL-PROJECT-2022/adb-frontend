import { ReturnSupplier } from "../models/return_supplier.model";

export const RETURN_SUPPLIERS:ReturnSupplier[] = 
[
  {
    supplier_id: 1116,
    supplier_name: '精傑科技股份有限公司',
    address: '台北市內湖區民權東路6段23號5樓之1',
    longitude: 121.572748,
    latitude: 25.065923,
    top_product: [
      {
        frequency: 10,
        product_id: '5291502',
        product_name: 'Nokia C2-01 高速3G上網直立機 (簡配/公司貨)-暖銀',
        return_reason: '拒收',
      },
      {
        frequency: 10,
        product_id: '5291504',
        product_name: 'Nokia C2-01 高速3G上網直立機 (簡配/公司貨)-森黑',
        return_reason: '拒收',
      },
      {
        frequency: 10,
        product_id: '5291751',
        product_name: 'Nokia BH-214 原廠立體聲藍牙耳機-黑',
        return_reason: '商品不如預期',
      },
    ],
    top_reason: [
      {
        frequency: 103,
        return_reason: '拒收',
      },
      {
        frequency: 66,
        return_reason: '規格/尺寸不符所需',
      },
      {
        frequency: 47,
        return_reason: '商品不如預期',
      },
    ],
  },
  {
    supplier_id: 7234,
    supplier_name: '金盛世紙業有限公司',
    address: '台北市大安區敦化南路二段333號5樓',
    longitude: 121.549159,
    latitude: 25.033024,
    top_product: [
      {
        frequency: 152,
        product_id: '3642760',
        product_name: 'PASEO倍舒柔抽取式衛生紙-優雅系列(120抽x80包)/箱',
        return_reason: '拒收',
      },
      {
        frequency: 56,
        product_id: '7311627',
        product_name: '倍舒柔超柔韌抽取式衛生紙(120抽x60包)/箱',
        return_reason: '拒收',
      },
      {
        frequency: 34,
        product_id: '4627044',
        product_name: 'PASEO倍舒柔袖珍包面紙-熱情系列(10抽x24包)',
        return_reason: '拒收',
      },
    ],
    top_reason: [
      {
        frequency: 91,
        return_reason: '拒收',
      },
      {
        frequency: 33,
        return_reason: '重訂(改買別款.改付款方式等)',
      },
      {
        frequency: 30,
        return_reason: '規格/尺寸不符所需',
      },
    ],
  },
  {
    supplier_id: 7740,
    supplier_name: '全球雲端運算科技有限公司',
    address: '台北市中正區青島東路4號2樓之7',
    longitude: 121.521123,
    latitude: 25.044195,
    top_product: [
      {
        frequency: 152,
        product_id: '3642760',
        product_name: 'PASEO倍舒柔抽取式衛生紙-優雅系列(120抽x80包)/箱',
        return_reason: '拒收',
      },
      {
        frequency: 56,
        product_id: '7311627',
        product_name: '倍舒柔超柔韌抽取式衛生紙(120抽x60包)/箱',
        return_reason: '拒收',
      },
      {
        frequency: 34,
        product_id: '4627044',
        product_name: 'PASEO倍舒柔袖珍包面紙-熱情系列(10抽x24包)',
        return_reason: '拒收',
      },
    ],
    top_reason: [
      {
        frequency: 46,
        return_reason: '商品瑕疵/故障',
      },
      {
        frequency: 6,
        return_reason: '規格/尺寸不符所需',
      },
      {
        frequency: 4,
        return_reason: '商品不如預期',
      },
    ],
  },
];
