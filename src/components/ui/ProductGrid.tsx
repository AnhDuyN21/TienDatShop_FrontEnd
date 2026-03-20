import type { Product } from "../../types/product";
import { ProductCard } from "../../components/ui/ProductCard";

export const ProductGrid = ({
  products,
}: {
  products: Product[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6 pt-30 z-0">
    {products.map((p) => (
      <ProductCard key={p.id} product={p}/>
    ))}
  </div>
);
export const ProductSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4 pt-30">
    {[...Array(12)].map((_, i) => (
      <div key={i} className="border rounded-lg p-4 animate-pulse">
        <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    ))}
  </div>
);