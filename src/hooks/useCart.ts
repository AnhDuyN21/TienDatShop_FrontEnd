import { useState, useEffect, useRef } from "react";
import { createCartApi, getMyCartApi } from "../api/cart";
import { getProductByIdApi } from "../api/product";
import { getMeApi } from "../api/auth";
import { toast } from "react-toastify";

export const useCart = () => {
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyCartApi()
      .then(async (res) => {
 const carts: any[] = res.data;
      
      // API trả về array → lấy cart WAITING đầu tiên
      const waiting = Array.isArray(carts) 
        ? carts.find((c) => c.status === "WAITING")
        : carts; // fallback nếu sau này backend sửa trả về object
        if (!waiting) { setCart(null); return; }

        const itemsWithProduct = await Promise.all(
          waiting.items.map(async (item: any) => {
            const p = await getProductByIdApi(item.productId);
            return { ...item, product: p.data };
          })
        );
        setCart({ ...waiting, items: itemsWithProduct });
      })
      .catch(() => setCart(null))
      .finally(() => setLoading(false));
  }, []);

  return { cart, loading, setCart };
};
export const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const customerIdRef = useRef<number | null>(null);

  const addToCart = async (productId: number, quantity: number, price: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Vui lòng đăng nhập để thêm vào giỏ hàng");
      return;
    }

    setLoading(true);
    try {
      if (!customerIdRef.current) {
        const meRes = await getMeApi();
        customerIdRef.current = meRes.data.id;
      }

      await createCartApi({
        customerId: customerIdRef.current!,
        items: [{ productId, quantity, priceAtPurchase: price }],
      });

      toast.success("Đã thêm vào giỏ hàng!");
    } catch {
      toast.error("Thêm vào giỏ hàng thất bại");
    } finally {
      setLoading(false);
    }
  };

  return { addToCart, loading };
};