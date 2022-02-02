import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../product-list/product-list.component';
import { ProductType } from '../provider/order.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: ProductType;
  id: number;
  constructor(private route: ActivatedRoute) {
    this.id = +(this.route.snapshot.paramMap.get('id') as string);
    this.item = productList.find(x => x.id === this.id) as ProductType;
    console.log("🚀 ~ constructor ~ this.id", this.item)
  }

  ngOnInit(): void {
  }

}
