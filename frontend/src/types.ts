export interface Review {
    user: string;
    comment: string;
    rating: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    description: string;
    details: string;
    shippingInfo: string;
    reviews: Review[];
    thumbnails: string[];
}

export interface Category {
    id: number;
    name: string;
    imageUrl: string;
}