import { Building, Trophy, UserPlus, Users } from "lucide-react";

const Why = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            TẠI SAO CHỌN CHÚNG TÔI
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400 mx-2 transform rotate-45"></div>
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Ngôi nhà của bạn sẽ được hoàn thiện và độc đáo bởi chính Ant
            Construction thiết kế. Chúng tôi tập trung vào chất lượng từ những
            chi tiết nhỏ nhất đến tổng thể trong một quy trình làm việc chuyên
            nghiệp.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Feature 1 - Sustainable */}
          <div className="text-center">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_why_image_1.png?1705892750011"
                  alt="Bền vững"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              BỀN VỮNG
            </h3>
            <div className="w-10 sm:w-12 h-0.5 bg-yellow-400 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Với mong muốn xây dựng những công trình chất lượng, chắc chắn
              nhất, chúng tôi lựa chọn những vật liệu tốt nhất và những thiết kế
              luôn được cập nhật liên tục.
            </p>
          </div>

          {/* Feature 2 - Aesthetic */}
          <div className="text-center">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_why_image_2.png?1705892750011"
                  alt="Thẩm mỹ"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              THẨM MỸ
            </h3>
            <div className="w-10 sm:w-12 h-0.5 bg-yellow-400 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Đội ngũ KTS, Kiến Trúc Sư trẻ, tạo bao và đầy sáng tạo của Su.A
              Design sẽ mang đến có ngôi nhà của bạn những thiết kế hoàn hảo,
              tối ưu, tinh tế nhất.
            </p>
          </div>

          {/* Feature 3 - Economical */}
          <div className="text-center">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/sec_why_image_3.png?1705892750011"
                  alt="Tiết kiệm"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              TIẾT KIỆM
            </h3>
            <div className="w-10 sm:w-12 h-0.5 bg-yellow-400 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Chúng tôi luôn chọn những vật liệu bền bỉ với giá thành tốt nhất,
              khách hàng sẽ nhận được sự tư vấn tốt nhất để có thể lựa chọn giải
              pháp phù hợp với mình.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-yellow-400 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Stat 1 - Projects */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-2 sm:mr-3">
                  1000+
                </span>
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <p className="text-black font-semibold text-xs sm:text-sm md:text-base">
                DỰ ÁN
              </p>
            </div>

            {/* Stat 2 - Customers */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-2 sm:mr-3">
                  1500+
                </span>
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <p className="text-black font-semibold text-xs sm:text-sm md:text-base">
                KHÁCH HÀNG
              </p>
            </div>

            {/* Stat 3 - Employees */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-2 sm:mr-3">
                  4500+
                </span>
                <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <p className="text-black font-semibold text-xs sm:text-sm md:text-base">
                NHÂN VIÊN
              </p>
            </div>

            {/* Stat 4 - Awards */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-2 sm:mr-3">
                  250+
                </span>
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <p className="text-black font-semibold text-xs sm:text-sm md:text-base">
                GIẢI THƯỞNG
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
