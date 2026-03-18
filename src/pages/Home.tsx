import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Xóa token
    navigate('/login'); // Quay về trang login
  };

  return (
    <div className="h-screen w-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-10 border border-slate-200">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Trang Chủ</h1>
        <p className="text-slate-600 text-lg">Chào mừng bạn đã đến với hệ thống quản lý Kapi.</p>
        
        <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-blue-800 font-medium">Bạn đã đăng nhập thành công từ cổng 8080!</p>
        </div>

        <button 
          onClick={handleLogout}
          className="mt-8 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default HomePage;