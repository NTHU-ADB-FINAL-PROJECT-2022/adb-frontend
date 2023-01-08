import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare let NeoVis: any; //declare moment

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('viz')
  viz!: any;



  product_cypher = `MATCH (orders)-[buy:buy]-(product)-[sold_by:sold_by]-(supplier)-[is_in:is_in]-(district)-[is_part_of:is_part_of]-(city)
  set sold_by.label = 'sold_by'
  with collect(orders) as collect_order, product, city, district, supplier,sold_by,is_in,is_part_of
  ORDER BY SIZE(collect_order) DESC LIMIT 3
  match p=(orders)-[buy:buy]-(product)-[sold_by:sold_by]-(supplier)-[is_in:is_in]-(district)-[is_part_of:is_part_of]-(city)
  return p`;

  supplier_cyper = `MATCH (product)-[sold_by:sold_by]-(supplier)-[is_in:is_in]-(district)-[is_part_of:is_part_of]-(city)
  WITH supplier, count(product) AS product_num, collect(product) as collect_product,district,city,is_in,is_part_of
  ORDER BY product_num DESC LIMIT 3
  match p = (orders)-[buy:buy]-(product)-[sold_by:sold_by]-(supplier)-[is_in:is_in]-(district)-[is_part_of:is_part_of]-(city)
  where product in collect_product
  return *`;


  selected_cypher = this.product_cypher

  constructor() {}

  ngAfterViewInit(): void {
    this.draw();
  }

  ngOnInit(): void {}

  supplier_view() {
    this.selected_cypher = this.supplier_cyper
    this.draw();
  }

  product_view() {
    this.selected_cypher = this.product_cypher
    this.draw();
  }


  draw() {
    var config = {
      containerId: 'viz',
      neo4j: {
        serverUrl: 'bolt://localhost:7687',
        serverUser: 'neo4j',
        serverPassword: 'adb',
      },
      visConfig: {
        nodes: {
          shape: 'dot'
        },
        edges: {
          arrows: {
            to: { enabled: true },
          },
        },
      },
      labels: {
        product_name: {
          label: 'product_name',
          color: "#6c5ec4"
        },
        order_id: {
          label: 'order_id',
          caption: 'type',
          color: "#6c5ec4"
        },
        sup_name: {
          label: 'sup_name',
          caption: 'type',
          color: "#56932f"
        },
        sup_district: {
          label: 'district_name',
          caption: 'type',
          color: "#6c3156"
        },
        sup_city: {
          label: 'city_name',
          caption: 'type',
          color: "#FFA07A"
        },
      },
      relationships: {
        sold_by: {
          // size: 1.0,
          label: 'label',
          caption: true,
        },
        buy: {
          // size: 1.0,
          label: 'label',
          caption: true,
        },
        is_in: {
          // size: 1.0,
          label: 'label',
          caption: true,
        },
        is_part_of: {
          label: 'label',
          caption: 'caption',
        },
      },
      initialCypher: this.selected_cypher,
    };

    this.viz = new NeoVis.default(config);
    this.viz.render();
  }
}
