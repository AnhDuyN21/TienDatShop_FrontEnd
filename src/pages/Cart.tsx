// pages/CartPage.tsx
import { MainLayout } from "../components/layout/MainLayout";
import { useCart } from "../hooks/useCart";
import { Button } from "../components/ui/Button";

export default function CartPage() {
  const { cart, loading, setCart } = useCart();

  const updateQty = (productId: number, delta: number) => {
    setCart((prev: any) => ({
      ...prev,
      items: prev.items
        .map((item: any) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        ),
    }));
  };

  const removeItem = (productId: number) => {
    setCart((prev: any) => ({
      ...prev,
      items: prev.items.filter((item: any) => item.productId !== productId),
    }));
  };

  const total = cart?.items?.reduce(
    (sum: number, item: any) => sum + item.priceAtPurchase * item.quantity, 0
  ) ?? 0;

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-5 pt-24 pb-16">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Giỏ hàng</h1>

        {loading ? (
          <CartSkeleton />
        ) : !cart || cart.items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {/* ── Danh sách sản phẩm ── */}
            <div className="md:col-span-2 flex flex-col gap-3">
              {cart.items.map((item: any) => (
                <div key={item.productId} className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 items-center">
                  <img
                    src={item.product?.images?.[0]}
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0 bg-gray-50"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{item.product?.name}</p>
                    <p className="text-sm text-gray-400 mt-0.5">{item.product?.origin}</p>
                    <p className="text-green-700 font-semibold mt-1">
                      {item.priceAtPurchase.toLocaleString("vi-VN")}đ
                    </p>
                  </div>

                  {/* Số lượng */}
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <button
                      onClick={() => updateQty(item.productId, -1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    >−</button>
                    <span className="w-9 text-center text-black text-sm font-medium border-x border-gray-200 h-8 leading-8">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.productId, 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    >+</button>
                  </div>

                  {/* Thành tiền */}
                  <div className="text-right flex-shrink-0 min-w-20">
                    <p className="font-semibold text-gray-900">
                      {(item.priceAtPurchase * item.quantity).toLocaleString("vi-VN")}đ
                    </p>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-xs text-red-400 hover:text-red-600 mt-1"
                    >Xóa</button>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Tóm tắt đơn hàng ── */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
                <h2 className="font-semibold text-gray-900 mb-4">Tóm tắt đơn hàng</h2>

                <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
                  <div className="flex justify-between">
                    <span>Tạm tính ({cart.items.length} sản phẩm)</span>
                    <span className="text-gray-900">{total.toLocaleString("vi-VN")}đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển</span>
                    <span className="text-green-600">Miễn phí</span>
                  </div>
                  {cart.promotionCode && (
                    <div className="flex justify-between text-green-600">
                      <span>Mã giảm giá</span>
                      <span>{cart.promotionCode}</span>
                    </div>
                  )}
                </div>

                <hr className="border-gray-100 mb-4" />

                <div className="flex justify-between font-semibold text-gray-900 mb-5">
                  <span>Tổng cộng</span>
                  <span className="text-green-700 text-lg">{total.toLocaleString("vi-VN")}đ</span>
                </div>

                <Button>Tiến hành thanh toán</Button>
              </div>
            </div>

          </div>
        )}
      </div>
    </MainLayout>
  );
}

// ── Empty state ──
const EmptyCart = () => (
  <div className="text-center py-20">
    <p className="text-5xl mb-4">🛒</p>
    <p className="text-gray-500 text-lg">Giỏ hàng của bạn đang trống</p>
    <p className="text-gray-400 text-sm mt-1">Hãy thêm sản phẩm vào giỏ hàng nhé!</p>
  </div>
);

// ── Skeleton ──
const CartSkeleton = () => (
  <div className="grid md:grid-cols-3 gap-6 animate-pulse">
    <div className="md:col-span-2 flex flex-col gap-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4">
          <div className="w-20 h-20 bg-gray-100 rounded-xl" />
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-4 bg-gray-100 rounded w-3/4" />
            <div className="h-3 bg-gray-100 rounded w-1/2" />
            <div className="h-4 bg-gray-100 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
    <div className="bg-white rounded-2xl border border-gray-100 p-5 h-64" />
  </div>
);