import { Chrome, Facebook } from "lucide-react"; // Using Chrome as a generic Google icon
import { Link } from "react-router-dom";

export default function LoginComponent() {
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
            Đăng nhập tài khoản
          </span>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              ĐĂNG NHẬP TÀI KHOẢN
            </h1>
            <p className="text-gray-600 text-sm">
              Nếu bạn đã có tài khoản, đăng nhập tại đây.
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
                htmlFor="email"
                className="text-gray-700 font-semibold text-sm mb-1 block"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-700 font-semibold text-sm mb-1 block"
              >
                Mật khẩu*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Mật khẩu"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f0ad4e] hover:bg-[#f0ad4e]/90 text-white font-bold py-2 px-4 rounded-md mb-4 transition-colors"
          >
            ĐĂNG NHẬP
          </button>

          <div className="text-center text-sm text-gray-600">
            Bạn chưa có tài khoản.{" "}
            <Link to="/signup" className="text-[#f0ad4e] hover:underline">
              Đăng ký tại đây.
            </Link>
          </div>
          <div className="text-center text-sm mt-2">
            <Link
              to="/forgot-password"
              className="text-[#f0ad4e] hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
