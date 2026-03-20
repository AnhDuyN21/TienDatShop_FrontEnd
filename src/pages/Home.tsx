import { useProductList } from "../hooks/useProduct";
import { MainLayout } from "../components/layout/MainLayout";
import { ProductGrid, ProductSkeleton } from "../components/ui/ProductGrid";

export default function HomePage() {
  const { products, loading } = useProductList();

  return (
    <MainLayout>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <ProductGrid products={products} />
      )}
    </MainLayout>
  );
}
