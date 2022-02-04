import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface ProductType {
    name: string;
    image: string;
    price: number;
    id: number;
    description: string;
    quantity?: number;
}

export interface UserDto {
    id?: string;
    email?: string;
    password?: string;

    orderList?: OrderDto[];
}

export enum OrderStatus {
    INIT = "INIT",
    PREPARATION = "PREPARATION"
}

export interface OrderDto {
    id?: string;
    statut?: OrderStatus;
    cart?: CartDto;
}

export interface CartDto {
    id?: string;
    qte?: number;
    prix_total?: number;
    items?: ProductType[];
}

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    path: string = 'http://93.3.28.232:5000/api/orders'
    constructor(
        protected httpClient: HttpClient,
    ) {

    }

    public createOrUpdateOrder(order: OrderDto) {
        this.httpClient.post(this.path, order);
    }

    public addToCart(product: ProductType): Observable<{ success?: boolean, message?: string }> {
        return this.httpClient.post(this.path, product);
    }
}