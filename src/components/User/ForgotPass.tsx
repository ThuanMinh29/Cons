import { Link } from "react-router-dom";

export default function ForgotPassComponent() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <Link to="/" className="hover:underline text-black">
            Trang chủ
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-semibold text-amber-500">Đặt lại mật khẩu</span>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              ĐẶT LẠI MẬT KHẨU
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua
              email.
            </p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-gray-700 font-semibold text-sm mb-2 block"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f0ad4e] hover:bg-[#f0ad4e]/90 text-white font-bold py-3 px-4 rounded-md mb-4 transition-colors"
          >
            LẤY LẠI MẬT KHẨU
          </button>

          <div className="text-center text-sm text-gray-600">
            Quay lại{" "}
            <Link to="/login" className="text-[#f0ad4e] hover:underline">
              tại đây.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
