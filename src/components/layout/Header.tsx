import { useAuth } from "../../hooks/useAuth";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow px-6 py-4 flex justify-between items-center z-40 ">
      <h1 className="text-2xl font-bold text-green-600">LocalMart</h1>

    <div className="flex gap-3 items-center">
       {isLoggedIn ? (
          <Button variant="outline" onClick={logout}>
            Đăng xuất
          </Button>
        ) : (
          <>
            <Button variant="outline" onClick={() => navigate("/login")}>
              Đăng nhập
            </Button>
            <Button onClick={() => navigate("/register")}>Đăng ký</Button>
          </>
        )}

      <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
         
        </span>
      </div>
    </div>
  </header>
);
}