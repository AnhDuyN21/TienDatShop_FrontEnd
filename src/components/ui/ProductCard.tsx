import type { Product } from "../../types/product.ts";

type Props = {
  product: Product;

};

export const ProductCard = ({ product }: Props) => (
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
    <img
      src={product.images?.[0] || "https://via.placeholder.com/300"}
      className="h-40 w-full object-cover rounded-xl"
    />

    <h3 className="mt-3 font-semibold">{product.name}</h3>
    <p className="text-sm text-gray-500">{product.origin}</p>

    <p className="text-green-600 font-bold mt-2">
      {product.price.toLocaleString("vi-VN")}đ
    </p>

    <button
      
      className="mt-auto bg-green-600 text-white py-2 rounded-xl"
    >
      Thêm vào giỏ
    </button>
  </div>
);