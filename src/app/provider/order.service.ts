export interface ProductType {
    title: string;
    img_path: string;
    price: number;
    id: number;
    description: string;
    qte?: number;
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
