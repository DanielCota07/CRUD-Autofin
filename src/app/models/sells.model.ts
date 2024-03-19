export interface Client {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface Sell {
    id: number;
    client: number;
    total: number;
}

export interface SellDetail {
    id: number;
    sell: number;
    product: number;
    quantity: number;
    total: number;
}

