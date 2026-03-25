import axiosClient from "./axiosClient";

type CartItem = {
  productId: number;
  quantity: number;
  priceAtPurchase: number;
};

type CreateCartPayload = {
  customerId: number;
  items: CartItem[];
};
export const createCartApi = (payload: CreateCartPayload) => {
  return axiosClient.post("/api/carts", payload);
};
export const getMyCartApi = () => axiosClient.get("/api/carts/me");