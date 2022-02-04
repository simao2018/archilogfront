import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from '../provider/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  private _product: ProductType | undefined;

  @Input('product') set product(v: ProductType | undefined) {
    this._product = v;
    if (this._product)
      this.productCartList.push(this._product);
  }

  get product(): ProductType | undefined {
    return this._product;
  }

  productCartList: ProductType[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
