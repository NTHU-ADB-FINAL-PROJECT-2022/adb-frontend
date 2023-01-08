import { CancelSupplier } from '../models/cancel_supplier.model';

export const CANCEL_SUPPLIERS: CancelSupplier[] = [
  {
    supplier_id: 4581,
    supplier_name: '佳格食品股份有限公司',
    address: '台北市大安區仁愛路3段136號5樓',
    longitude: 121.544213,
    latitude: 25.038271,
    top_product: [
      {
        frequency: 38,
        product_id: '1145317',
        product_name: '《桂格北海道鮮奶麥片》特濃鮮奶(15包/袋)',
        cancel_reason: '取消-缺貨',
      },
      {
        frequency: 29,
        product_id: '1087705',
        product_name: '《得意的一天》五珍寶健康油2L/瓶',
        cancel_reason: '取消-缺貨',
      },
      {
        frequency: 13,
        product_id: '998552',
        product_name: '《桂格》高鐵海洋膠原奶粉750G一罐',
        cancel_reason: '取消-缺貨',
      },
    ],
    top_reason: [
      {
        frequency: 36,
        cancel_reason: '取消-缺貨',
      },
      {
        frequency: 20,
        cancel_reason: '取消-轉單前訂購單已取消\t',
      },
    ],
  },
  {
    supplier_id: 3508,
    supplier_name: '永豐餘消費品實業股份有限公司',
    address: '台北市中正區重慶南路二段51號16樓',
    longitude: 121.513383,
    latitude: 25.046697,
    top_product: [
      {
        frequency: 31,
        product_id: '4270365',
        product_name: '《量販組》柔情輕柔抽取式衛生紙-豹紋版(100抽x48包)/箱',
        cancel_reason: '取消-缺貨',
      },
      {
        frequency: 26,
        product_id: '1098717',
        product_name: '得意廚房紙巾(60張x6捲)',
        cancel_reason: '取消-缺貨',
      },
      {
        frequency: 24,
        product_id: '1498064',
        product_name: '五月花柔濕巾超厚型-小太陽(80抽/包)',
        cancel_reason: '取消-缺貨',
      },
    ],
    top_reason: [
      {
        frequency: 99,
        cancel_reason: '取消-缺貨',
      },
      {
        frequency: 66,
        cancel_reason: '取消-轉單前訂購單已取消\t',
      },
    ],
  },
];
