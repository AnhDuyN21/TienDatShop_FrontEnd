import { useState } from 'react';
import { loginApi } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const navigate = useNavigate();
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await loginApi({ email, password });
      
      const token = response.data;
      if(token) {
        localStorage.setItem('token', token);
        setToken(token);
         toast.success("Đăng nhập thành công ");
        navigate('/');
      }
    } catch (err : any) {
       toast.error("Sai tài khoản hoặc mật khẩu");
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null); 
    toast.success("Đăng xuất thành công");
    navigate('/');
  };

  return {
    login,
    logout,
    loading,
    error,
    isLoggedIn: !!token, 
  };
};