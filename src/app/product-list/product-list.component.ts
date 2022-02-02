import { Component, OnInit } from '@angular/core';
import { ProductType } from '../provider/order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: ProductType[] = productList;

  constructor() { }

  ngOnInit(): void {
  }

}

export const productList: ProductType[] = [
  {
    title: "title",
    img_path: "shop.png",
    price: 35,
    id: 1,
    description: 'lorem ipsum ...'
  },
  {
    title: "title",
    img_path: "shop.png",
    price: 35,
    id: 2,
    description: 'lorem ipsum ...'
  },
  {
    title: "title",
    img_path: "shop.png",
    price: 35,
    id: 3,
    description: 'lorem ipsum ...'
  }, {
    title: "title",
    img_path: "shop.png",
    price: 35,
    id: 4,
    description: 'lorem ipsum ...'
  }, {
    title: "title",
    img_path: "shop.png",
    price: 35,
    id: 5,
    description: 'lorem ipsum ...'
  }, {
    title: "title",
    img_path: "shop.png",
    price: 35,
    id: 6,
    description: 'lorem ipsum ...'
  },
]
