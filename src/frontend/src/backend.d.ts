import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StoreInfo {
    name: string;
    email: string;
    address: string;
    phone: string;
}
export interface Product {
    id: bigint;
    inStock: boolean;
    name: string;
    description: string;
    category: Category;
    price: bigint;
}
export enum Category {
    AC = "AC",
    TV = "TV",
    Laptop = "Laptop",
    WashingMachine = "WashingMachine",
    Refrigerator = "Refrigerator",
    Mobile = "Mobile"
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getProduct(id: bigint): Promise<Product | null>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    getStoreInfo(): Promise<StoreInfo>;
}
