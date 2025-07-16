const Body = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              Về Ant Construction
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
              Chúng tôi là đội ngũ chuyên nghiệp với nhiều năm kinh nghiệm trong
              lĩnh vực xây dựng và thiết kế
            </p>
            <button className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 text-sm sm:text-base">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Ant Construction được thành lập với sứ mệnh mang đến những
                  giải pháp xây dựng chất lượng cao, đáp ứng mọi nhu cầu của
                  khách hàng từ thiết kế đến thi công.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Với đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm và trang
                  thiết bị hiện đại, chúng tôi cam kết mang đến những công trình
                  bền vững, thẩm mỹ và tiết kiệm.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Chúng tôi tin rằng mỗi ngôi nhà đều có câu chuyện riêng và
                  chúng tôi ở đây để giúp bạn kể câu chuyện đó một cách hoàn hảo
                  nhất.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                alt="Ant Construction"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-black">
                  Q
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Chất lượng
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Cam kết mang đến chất lượng cao nhất trong từng sản phẩm
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-black">
                  P
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Chuyên nghiệp
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Đội ngũ chuyên nghiệp với kinh nghiệm dày dạn trong ngành
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-black">
                  I
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Sáng tạo
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Không ngừng đổi mới và sáng tạo trong thiết kế
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
