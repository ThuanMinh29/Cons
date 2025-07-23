import { Chrome, Facebook } from "lucide-react"; // Using Chrome as a generic Google icon
import { Link } from "react-router-dom";

export default function SignUpComponent() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <Link to="/" className="hover:underline text-black">
            Trang chủ
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-semibold text-amber-500">
            Đăng ký tài khoản
          </span>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              ĐĂNG KÝ TÀI KHOẢN
            </h1>
            <p className="text-gray-600 text-sm">
              Nếu chưa có tài khoản vui lòng đăng ký tại đây
            </p>
          </div>

          <div className="flex space-x-4 mb-6">
            <button className="flex-1 bg-[#3b5998] hover:bg-[#3b5998]/90 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center transition-colors">
              <Facebook className="mr-2 h-4 w-4" /> Facebook
            </button>
            <button className="flex-1 bg-[#dd4b39] hover:bg-[#dd4b39]/90 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center transition-colors">
              <Chrome className="mr-2 h-4 w-4" /> Google
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="ho"
                className="text-gray-700 font-semibold text-sm mb-1 block"
              >
                Họ<span className="text-red-500">*</span>
              </label>
              <input
                id="ho"
                type="text"
                placeholder="Họ"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="ten"
                className="text-gray-700 font-semibold text-sm mb-1 block"
              >
                Tên<span className="text-red-500">*</span>
              </label>
              <input
                id="ten"
                type="text"
                placeholder="Tên"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold text-sm mb-1 block"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-700 font-semibold text-sm mb-1 block"
              >
                Mật khẩu<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Mật khẩu"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <button
              type="submit"
              className="flex-1 bg-[#f0ad4e] hover:bg-[#f0ad4e]/90 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              ĐĂNG KÝ
            </button>
            <Link
              to="/login"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md transition-colors text-center flex items-center justify-center"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
