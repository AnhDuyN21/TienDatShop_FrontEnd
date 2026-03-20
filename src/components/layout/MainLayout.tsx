import { Footer } from "./Footer";
import { Header } from "./Header";


export const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="h-full w-screen bg-gray-50">
    <Header />
    {children}
    <Footer />
  </div>
);