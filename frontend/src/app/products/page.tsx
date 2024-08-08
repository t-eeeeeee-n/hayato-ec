// src/app/products/page.tsx
import Client from './client';
import { Product, Category } from '@/types';

const products: Product[] = [
    {
        id: 1,
        name: "大間産本マグロ(冷凍)大トロ 200gサク",
        price: 1000,
        imageUrl: "/images/product_maguro_1.png",
        quantity: 1,
        description: "最高級のマグロ",
        details: "冷凍保存可能",
        shippingInfo: "2-3日で発送",
        reviews: [
            { user: "John Doe", comment: "Amazing quality, very fresh!", rating: 5 },
            { user: "Jane Smith", comment: "Great taste but a bit pricey.", rating: 4 },
        ],
        thumbnails: [
            "/images/thumb1.png",
            "/images/thumb2.png",
            "/images/thumb3.png"
        ],
        categoryId: 1
    },
    {
        id: 2,
        name: "大間産本マグロ(冷凍)腹上一番 200gサク",
        price: 2000,
        imageUrl: "/images/product_maguro_2.png",
        quantity: 1,
        description: "とてもおいしいマグロ",
        details: "新鮮な味わい",
        shippingInfo: "2-3日で発送",
        reviews: [
            { user: "Alice Brown", comment: "Very juicy and tasty!", rating: 5 },
            { user: "Bob Johnson", comment: "Not as fresh as I expected.", rating: 3 },
        ],
        thumbnails: [
            "/images/thumb1.png",
            "/images/thumb2.png",
            "/images/thumb3.png"
        ],
        categoryId: 1
    },
];

const categories: Category[] = [
    { id: 1, name: "鮪", imageUrl: "/images/category_maguro.png" },
    { id: 2, name: "雲丹", imageUrl: "/images/category_uni.png" },
    // 他のカテゴリデータを追加
];

const Page = () => {
    return <Client products={products} categories={categories} />;
};

export default Page;
