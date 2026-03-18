import { useState } from 'react';
import { loginApi } from '../api/auth';
import { useNavigate } from 'react-router-dom';


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
        navigate('/home');
      }
    } catch (err : any) {
      setError(err.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};