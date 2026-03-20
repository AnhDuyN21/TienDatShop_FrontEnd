export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            LocalMart
          </h2>
          <p className="text-sm">
            Đặc sản địa phương chất lượng cao từ khắp mọi miền Việt Nam.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Về chúng tôi</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Giới thiệu</li>
            <li className="hover:text-white cursor-pointer">Tuyển dụng</li>
            <li className="hover:text-white cursor-pointer">Tin tức</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Hỗ trợ</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Liên hệ</li>
            <li className="hover:text-white cursor-pointer">Chính sách</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Kết nối</h3>
          <div className="flex gap-4 text-xl">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">📘</span>
            <span className="hover:text-white cursor-pointer">📸</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 LocalMart. All rights reserved.
      </div>
    </footer>
  );
};