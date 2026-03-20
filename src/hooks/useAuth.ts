import { useState } from 'react';
import { loginApi } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await loginApi({ email, password });
      
      const token = response.data;
      if(token) {
        localStorage.setItem('token', token);
         toast.success("Đăng nhập thành công ");
        navigate('/');
      }
    } catch (err : any) {
       toast.error("Sai tài khoản hoặc mật khẩu");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};