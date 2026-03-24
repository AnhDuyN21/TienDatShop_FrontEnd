import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product.ts";

type Props = {
  product: Product;

};

export const ProductCard = ({ product }: Props) =>{
  const navigate = useNavigate();
  return (
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
    <img
      src={product.images?.[0] || "https://product.hstatic.net/200000483069/product/432744868_371413429071414_5725785381183741070_n_3233dddea68f4df7ab516c3dab8ca968_1024x1024.jpg"}
      className="h-40 w-full object-cover rounded-xl cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    />

    <h3 className="mt-3 font-semibold"
    onClick={() => navigate(`/products/${product.id}`)}>
    {product.name}
    </h3>
    <p className="text-sm text-gray-500">{product.origin}</p>

    <p className="text-green-600 font-bold mt-2">
      {product.price.toLocaleString("vi-VN")}đ
    </p>

    <button className="mt-auto bg-green-600 text-white py-2 rounded-xl">
      Thêm vào giỏ
    </button>
  </div>
);
} 
  