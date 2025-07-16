const Footer = () => {
  // const partnerLogos = [
  //   "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_4.jpg?1705892750011",
  //   "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_5.jpg?1705892750011",
  //   "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_1.jpg?1705892750011",
  //   "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_2.jpg?1705892750011",
  //   "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_3.jpg?1705892750011",
  // ];

  return (
    <footer className="w-full">
      {/* Partner logos section */}
      {/* <div className="bg-yellow-400 py-4 sm:py-6">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`partner-${index + 1}`}
              className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
            />
          ))}
        </div>
      </div> */}

      {/* Main footer content */}
      <div className="bg-[#1b1b1b] text-gray-300 py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1 */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-white font-bold mb-2 text-sm sm:text-base">
              THÔNG TIN LIÊN HỆ
            </h4>
            <div className="w-8 sm:w-10 h-0.5 bg-yellow-400 mb-3 sm:mb-4"></div>
            <p className="mb-2 text-xs sm:text-sm">
              <span className="text-white font-semibold">Địa chỉ:</span> 70 Lu
              Gia, Ward 15, District 11, Ho Chi Minh City
            </p>
            <p className="mb-2 text-xs sm:text-sm">
              <span className="text-white font-semibold">Điện thoại:</span> 1900
              6750
            </p>
            <p className="mb-2 text-xs sm:text-sm">
              <span className="text-white font-semibold">Email:</span>{" "}
              support@sapo.vn
            </p>
            <p className="mb-2 text-xs sm:text-sm">
              <span className="text-white font-semibold">Website:</span>{" "}
              <a
                href="https://ant-construction.mysapo.net"
                className="hover:text-yellow-400 break-words block sm:inline"
              >
                https://ant-construction.mysapo.net
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-white font-bold mb-2 text-sm sm:text-base">
              VỀ CHÚNG TÔI
            </h4>
            <div className="w-8 sm:w-10 h-0.5 bg-yellow-400 mb-3 sm:mb-4"></div>
            <p className="leading-relaxed text-xs sm:text-sm">
              Hiểu và đồng cảm trước những vấn đề mà bạn đang gặp phải, Ant
              Construction ra đời mang nhiệm vụ và sứ mệnh đơn giản đó là: Hiện
              thực hóa ước mơ sở hữu ngôi nhà hoàn hảo của khách hàng, thổi hồn
              vào từng công trình bằng kinh nghiệm, sự chuyên nghiệp của chúng
              tôi.
            </p>
          </div>

          {/* Column 3 */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-white font-bold mb-2 text-sm sm:text-base">
              CHÍNH SÁCH
            </h4>
            <div className="w-8 sm:w-10 h-0.5 bg-yellow-400 mb-3 sm:mb-4"></div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                "Trang chủ",
                "Giới thiệu",
                "Sản phẩm",
                "Tin tức",
                "Liên hệ",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 border-b border-dashed border-gray-600 pb-1 inline-block w-fit transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-2 text-sm sm:text-base">
              HƯỚNG DẪN
            </h4>
            <div className="w-8 sm:w-10 h-0.5 bg-yellow-400 mb-3 sm:mb-4"></div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                "Trang chủ",
                "Giới thiệu",
                "Sản phẩm",
                "Tin tức",
                "Liên hệ",
                "Đăng nhập",
                "Đăng ký",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 border-b border-dashed border-gray-600 pb-1 inline-block w-fit transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
