import { Component, OnInit } from '@angular/core';

export interface ProductType {
  title: string;
  img_path: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: ProductType[] = [
    {
      title: "title",
      img_path: "shop.png",
      price: 35
    },
    {
      title: "title",
      img_path: "shop.png",
      price: 35
    }, {
      title: "title",
      img_path: "shop.png",
      price: 35
    }, {
      title: "title",
      img_path: "shop.png",
      price: 35
    }, {
      title: "title",
      img_path: "shop.png",
      price: 35
    }, {
      title: "title",
      img_path: "shop.png",
      price: 35
    }, {
      title: "title",
      img_path: "shop.png",
      price: 35
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
