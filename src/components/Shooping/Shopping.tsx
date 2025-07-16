import { Link } from "react-router-dom";

export default function Shopping() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/" className="text-black hover:underline">
            Trang chủ
          </Link>
          <span className="mx-2 text-black">{">"}</span>
          <span className="text-amber-500 font-medium">Giỏ hàng</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          GIỎ HÀNG (0 sản phẩm)
        </h1>

        {/* Empty Cart Content */}
        <div className="flex flex-col items-center justify-center text-center py-16">
          {/* Placeholder for the empty cart illustration */}
          <div className="relative w-48 h-48 mb-6">
            <img
              src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/empty-cart.png?1705892750011" // Using a placeholder for the illustration
              alt="Empty Cart"
              className="w-full h-full object-contain opacity-70" // To mimic the slightly faded look
            />
            {/* Simple representation of the sad face and lines */}

            {/* Simple representation of clouds/wind */}
          </div>

          <p className="text-xl font-semibold text-amber-500 mb-8">
            Your Cart Is Empty
          </p>

          <Link
            to="/"
            className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200"
          >
            TIẾP TỤC MUA SẮM
          </Link>
        </div>
      </div>
    </div>
  );
}
