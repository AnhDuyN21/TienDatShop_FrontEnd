import { useEffect, useState } from "react";
import { getProductListApi, getProductByIdApi } from "../api/product";
import type { Product } from "../types/product";

export const useProductList  = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

 const fetchProducts = async () => {
    setLoading(true);
    const respose = await getProductListApi();
    setProducts(respose.data);
    setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
  return {products, loading, refetch: fetchProducts};
}

export const useProductDetail = (id: number) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProductByIdApi(id).then(res => setProduct(res.data));
  }, [id]);

  return { product };
};