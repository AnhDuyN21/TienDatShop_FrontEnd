// pages/ProductDetailPage.tsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { useProductDetail } from "../hooks/useProduct";
import { Button } from "../components/ui/Button";
import { Breadcrumb } from "../components/ui/Breadcrumb";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { product, loading } = useProductDetail(Number(id));

  return (
    <MainLayout>
      {loading ? <DetailSkeleton /> : product ? <ProductDetail product={product} /> : (
        <p className="text-center mt-40 text-gray-400">Không tìm thấy sản phẩm</p>
      )}
    </MainLayout>
  );
}

const ProductDetail = ({ product }: { product: any }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-4xl mx-auto px-5 pt-24 pb-16">
      {/* Breadcrumb */}
        <Breadcrumb
        items={[
            { label: "Trang chủ", path: "/" },
            { label: product.name }, 
        ]}
        />

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="grid md:grid-cols-2">

          {/* ── Cột ảnh ── */}
          <div className="p-7 md:border-r border-gray-100">
            <div className="relative rounded-xl overflow-hidden bg-gray-50 aspect-square">
              <img
                src={product.images?.[selectedImg]}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3">
              {product.images?.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors
                    ${selectedImg === i ? "border-green-600" : "border-transparent"}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Cột info ── */}
          <div className="p-7 flex flex-col">
            <span className="inline-flex w-fit bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>

            <h1 className="text-2xl font-semibold text-gray-900 leading-snug mb-2">
              {product.name}
            </h1>

            <div className="flex gap-4 text-sm text-gray-400 mb-4">
              <span>Thương hiệu: <strong className="text-gray-700">{product.brandName}</strong></span>
              <span>Xuất xứ: <strong className="text-gray-700">{product.origin}</strong></span>
            </div>

            <hr className="border-gray-100 mb-4" />

            {/* Giá */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-semibold text-green-700">
                {product.price.toLocaleString("vi-VN")}đ
              </span>
              <span className="text-sm text-gray-400">/ {product.weight}g</span>
            </div>

            {/* Tồn kho */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-green-700">
                Còn hàng — {product.stockQuantity} sản phẩm
              </span>
            </div>

            {/* Mô tả */}
            <p className="text-sm text-gray-500 bg-gray-50 rounded-xl px-4 py-3 leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Số lượng */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-500">Số lượng</span>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-lg"
                >−</button>
                <span className="w-10 text-center text-sm font-medium border-x border-gray-200 h-9 leading-9 text-black">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(Math.min(product.stockQuantity, qty + 1))}
                  className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-lg"
                >+</button>
              </div>
            </div>

                <Button >
                Thêm vào giỏ hàng
                </Button>

            {/* Chi tiết */}
            <div className="mt-5 grid grid-cols-2 border border-gray-100 rounded-xl overflow-hidden text-sm">
              {[
                ["Thành phần", product.ingredients],
                ["Hướng dẫn dùng", product.usageInstruction],
                ["Khối lượng", `${product.weight}g`],
                ["Bảo quản", product.storageCondition],
              ].map(([label, value], i) => (
                <div key={label} className={`p-3 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-gray-100`}>
                  <p className="text-xs uppercase tracking-wide text-gray-400 font-medium mb-1">{label}</p>
                  <p className="text-gray-700 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex justify-around mt-5 pt-4 border-t border-gray-100">
              {[["🚚", "Giao hàng nhanh"], ["✓", "Hàng chính hãng"], ["↩", "Đổi trả 7 ngày"]].map(([icon, txt]) => (
                <div key={txt} className="flex flex-col items-center gap-1">
                  <span className="text-base">{icon}</span>
                  <span className="text-xs text-gray-400 text-center leading-tight max-w-16">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Skeleton ──────────────────────────────────────────────
const DetailSkeleton = () => (
  <div className="max-w-4xl mx-auto px-5 pt-24 animate-pulse">
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-7">
          <div className="bg-gray-100 rounded-xl aspect-square" />
          <div className="flex gap-2 mt-3">
            {[...Array(2)].map((_, i) => <div key={i} className="w-14 h-14 bg-gray-100 rounded-lg" />)}
          </div>
        </div>
        <div className="p-7 flex flex-col gap-4">
          <div className="h-5 bg-gray-100 rounded-full w-1/4" />
          <div className="h-8 bg-gray-100 rounded-xl w-3/4" />
          <div className="h-4 bg-gray-100 rounded w-1/2" />
          <div className="h-10 bg-gray-100 rounded-xl w-1/3" />
          <div className="h-20 bg-gray-100 rounded-xl" />
          <div className="h-12 bg-gray-100 rounded-xl" />
        </div>
      </div>
    </div>
  </div>
);