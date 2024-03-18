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
    clientId: Client;
    total: number;
}

export interface SellDetail {
    id: number;
    sellId: Sell;
    productId: Product;
    quantity: number;
    total: number;
}

