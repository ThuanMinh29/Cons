import { Link } from "react-router-dom";

export default function Welcome() {
  const services = [
    {
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/about_service_1.png?1705892750011", // Bạn thay đổi link này
      title: "Thi công xây dựng",
      description:
        "Một căn hộ hiện đại với nhiều không gian cùng những sắc thái đa dạng phù hợp cho cá tính của những thành viên trong gia đình.",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/about_service_2.png?1705892750011", // Bạn thay đổi link này
      title: "Thiết kế kiến trúc",
      description:
        "Một căn hộ hiện đại với nhiều không gian cùng những sắc thái đa dạng phù hợp cho cá tính của những thành viên trong gia đình.",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/about_service_3.png?1705892750011", // Bạn thay đổi link này
      title: "Xây dựng cải tạo",
      description:
        "Một căn hộ hiện đại với nhiều không gian cùng những sắc thái đa dạng phù hợp cho cá tính của những thành viên trong gia đình.",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/about_service_4.png?1705892750011", // Bạn thay đổi link này
      title: "Quản lý dự án",
      description:
        "Một căn hộ hiện đại với nhiều không gian cùng những sắc thái đa dạng phù hợp cho cá tính của những thành viên trong gia đình.",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/about_service_5.png?1705892750011", // Bạn thay đổi link này
      title: "Thiết kế xây dựng",
      description:
        "Một căn hộ hiện đại với nhiều không gian cùng những sắc thái đa dạng phù hợp cho cá tính của những thành viên trong gia đình.",
    },
    {
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/about_service_6.png?1705892750011", // Bạn thay đổi link này
      title: "Ký kết chung",
      description:
        "Một căn hộ hiện đại với nhiều không gian cùng những sắc thái đa dạng phù hợp cho cá tính của những thành viên trong gia đình.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm flex items-center">
          <Link to="/" className="text-gray-800 hover:underline">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-400">{">"}</span>
          <span className="text-amber-500 font-medium">Giới thiệu</span>
        </div>
      </div>

      {/* Header Section - Responsive */}
      <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-16">
        <div className="max-w-4xl mb-8 sm:mb-12 text-left">
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            Chào mừng bạn đến với Ant Construction
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Dịch Vụ Quản Lý Xây Dựng
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            Chúng tôi sẽ lập kế hoạch, thiết kế, xây dựng và duy trì dự án của
            bạn.
          </p>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-12 lg:gap-y-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mt-1 object-contain"
              />
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-semibold text-amber-500 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
