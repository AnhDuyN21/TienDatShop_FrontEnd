import type { Product, ProductResponse } from "../types/product";
import axiosClient from "./axiosClient";

export const getProductListApi = () => {
    return axiosClient.get<ProductResponse>('/api/products/all',{
        headers: {
        skipAuth: true,
        },
    });
}
export const getProductByIdApi = (id: number) => {
    return axiosClient.get<Product>(`/api/products/${id}`,{
        headers: {
        skipAuth: true,
        },
    });
}
