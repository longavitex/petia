export interface ProductType {
    id: string;
    category: string;
    name: string;
    rate: number;
    price: number;
    originPrice: number;
    quantityPurchase: number;
    sale: boolean;
    quantityRemain: number;
    image: string;
    subImage: string;
    listImage: Array<string>;
    type: string;
    description: string;
    slug: string;
}