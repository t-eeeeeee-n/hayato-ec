import Client from "@/app/client";
import { Product, Category } from "@/types";

const products: Product[] = [
  {
    id: 1,
    name: "大間産本マグロ(冷凍)大トロ 200gサク",
    price: 1000,
    imageUrl: "/images/product_maguro_1.png",
    quantity: 1,
    description: "Delicious fresh apples.",
    details: "This product is sourced from the finest fish markets and frozen to preserve its quality.",
    shippingInfo: "Ships within 2-3 business days. Delivery charges may apply.",
    reviews: [
      { user: "John Doe", comment: "Amazing quality, very fresh!", rating: 5 },
      { user: "Jane Smith", comment: "Great taste but a bit pricey.", rating: 4 },
    ],
    thumbnails: [
      "/images/thumb1.png",
      "/images/thumb2.png",
      "/images/thumb3.png"
    ]
  },
  {
    id: 2,
    name: "大間産本マグロ(冷凍)腹上一番 200gサク",
    price: 2000,
    imageUrl: "/images/product_maguro_2.png",
    quantity: 1,
    description: "Juicy organic tomatoes.",
    details: "These organic tomatoes are grown without pesticides and harvested at peak ripeness.",
    shippingInfo: "Ships within 2-3 business days. Delivery charges may apply.",
    reviews: [
      { user: "Alice Brown", comment: "Very juicy and tasty!", rating: 5 },
      { user: "Bob Johnson", comment: "Not as fresh as I expected.", rating: 3 },
    ],
    thumbnails: [
      "/images/thumb1.png",
      "/images/thumb2.png",
      "/images/thumb3.png"
    ]
  },
];

const categories: Category[] = [
  { id: 1, name: "鮪", imageUrl: "/images/category_maguro.png" },
  { id: 2, name: "雲丹", imageUrl: "/images/category_uni.png" },
  // 他のカテゴリデータを追加
];

const Page = async () => {
  return <Client products={products} categories={categories} />;
}

export default Page;
