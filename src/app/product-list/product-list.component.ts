import { Component, OnInit } from '@angular/core';
import { OrderDto, OrderService, OrderStatus, ProductType } from '../provider/order.service';
import { ProductService } from '../provider/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: ProductType[] = [];
  public order: OrderDto = {};
  public productAdd?: ProductType;

  public loading?: boolean = false;
  constructor(
    private productService: ProductService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  async loadProduct() {
    this.loading = true;
    const localResponse = localStorage.getItem('productList');
    if (localResponse) {
      this.productList = JSON.parse(localResponse);
    }
    else {
      const response = await this.productService.getProduct().toPromise();
      if (response) {
        this.productList = Object.values(response)[3] as ProductType[];
        if (this.productList?.length)
          localStorage.setItem('productList', JSON.stringify(this.productList));
        console.log("🚀 ~ loadProduct ~ response", this.productList);

      }
    }

    this.loading = false;
  }
  async addToCart(product: ProductType) {

    if (!this.order?.cart || !this.order?.cart?.items?.length) {
      this.order = {
        cart: {
          items: [product],
        },
        statut: OrderStatus.PREPARATION
      };
    }
    else {
      this.order.cart.items.push(product);
    }

    const response = await this.orderService.addToCart(product).toPromise();
    if (response.success)
      console.log("🚀 ~ addToCart ~ response", response.message);

    this.productAdd = product;
  }


}
