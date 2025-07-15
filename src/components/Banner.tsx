import { ChevronDown } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center flex-wrap lg:flex-nowrap">
            <li>
              <a
                href="#"
                className="block px-3 sm:px-6 py-3 sm:py-4 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors duration-200 text-sm sm:text-base"
              >
                TRANG CHỦ
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-3 sm:px-6 py-3 sm:py-4 text-white hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
              >
                GIỚI THIỆU
              </a>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="flex items-center gap-1 px-3 sm:px-6 py-3 sm:py-4 text-white hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
              >
                SẢN PHẨM
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Sản phẩm 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Sản phẩm 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Sản phẩm 3
                </a>
              </div>
            </li>

            <li className="relative group">
              <a
                href="#"
                className="flex items-center gap-1 px-3 sm:px-6 py-3 sm:py-4 text-white hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
              >
                TIN TỨC
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Tin tức 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Tin tức 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Tin tức 3
                </a>
              </div>
            </li>

            <li>
              <a
                href="#"
                className="block px-3 sm:px-6 py-3 sm:py-4 text-white hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
              >
                LIÊN HỆ
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://bizweb.dktcdn.net/thumb/grande/100/321/299/themes/670850/assets/slider_1.jpg?1705892750011')`,
        }}
      >
        {/* Overlay đen mờ toàn bộ */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content container căn giữa */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="bg-black/60 p-4 sm:p-6 lg:p-8 rounded-md w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl text-white text-left shadow-lg">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6">
              Think Different - Do Different
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
              Hiện thực hóa ước mơ sở hữu ngôi nhà hoàn hảo của khách hàng, thổi
              hồn vào từng công trình bằng kinh nghiệm, sự chuyên nghiệp của
              chúng tôi.
            </p>
            <div className="text-left">
              <button className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-sm text-sm sm:text-base">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
