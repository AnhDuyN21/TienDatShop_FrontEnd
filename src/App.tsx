import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailPage from './pages/ProductDetail';
import CartPage from './pages/Cart';

// 1. Component bảo vệ Route (Hợp thức hóa việc có Token mới cho vào Dashboard)
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  
  // Nếu không có token, đá người dùng về trang login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};


function App() {
return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        
        {/* Route cho Trang Chủ */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* Mặc định vào sẽ đá sang /home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;