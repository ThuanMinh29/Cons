const About = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            VỀ CHÚNG TÔI
          </h2>
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400 mx-2 transform rotate-45"></div>
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Tiêu chí kinh doanh hàng đầu của chúng tôi là tạo ra sản phẩm nội
            thất độc đáo, cung cấp giải pháp tối ưu cho khách hàng và đảm bảo
            hoàn thành dự án theo đúng ý tưởng thiết kế, chất lượng và tiến độ
            đã đề ra.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Left Image */}
          <div className="order-2 lg:order-1 h-full">
            <img
              src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_about_image.jpg?1705892750011"
              alt="Construction Worker"
              className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Grid of Services */}
          <div className="order-1 lg:order-2 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
              {/* Card 1 */}
              <div className="flex flex-col text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_about_image_1.png?1705892750011"
                  alt="Thi công xây dựng"
                  className="mx-auto mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  THI CÔNG XÂY DỰNG
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Với đội ngũ kiến trúc sư, kỹ sư, thợ lành nghề, dồi dào kinh
                  nghiệm, công ty sẽ mang đến cho khách hàng sự hài lòng về chất
                  lượng.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_about_image_2.png?1705892750011"
                  alt="Thi công nội thất"
                  className="mx-auto mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  THI CÔNG NỘI THẤT
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Với đội ngũ kiến trúc sư, kỹ sư, thợ lành nghề, dồi dào kinh
                  nghiệm, công ty sẽ mang đến cho khách hàng sự hài lòng về chất
                  lượng.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_about_image_3.png?1705892750011"
                  alt="Sơn sửa công trình"
                  className="mx-auto mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  SƠN SỬA CÔNG TRÌNH
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Với đội ngũ kiến trúc sư, kỹ sư, thợ lành nghề, dồi dào kinh
                  nghiệm, công ty sẽ mang đến cho khách hàng sự hài lòng về chất
                  lượng.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_about_image_4.png?1705892750011"
                  alt="Thi công ống nước"
                  className="mx-auto mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20"
                />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  THI CÔNG ỐNG NƯỚC
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Với đội ngũ kiến trúc sư, kỹ sư, thợ lành nghề, dồi dào kinh
                  nghiệm, công ty sẽ mang đến cho khách hàng sự hài lòng về chất
                  lượng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
