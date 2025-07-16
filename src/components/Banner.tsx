const Banner = () => {
  return (
    <div className="w-full">
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
