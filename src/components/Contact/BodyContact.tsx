import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function BodyContact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb với nền giống giới thiệu */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <Link to="/" className="hover:underline text-black">
            Trang chủ
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-semibold text-amber-500">Liên hệ</span>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cột trái: thông tin liên hệ + bản đồ */}
          <div>
            <div className="mb-8 text-left max-w-2xl">
              <p className="text-lg text-gray-600 mb-2">
                Chào mừng bạn đến với Ant Construction
              </p>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Thông tin liên hệ
              </h1>
              <p className="text-base text-gray-700">
                Chúng tôi sẽ lập kế hoạch, thiết kế, xây dựng và duy trì dự án
                của bạn.
              </p>
            </div>

            <div className="space-y-4 text-gray-700 text-base">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>70 Lữ Gia, Phường 15, Quận 11, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>1900 6750</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>support@sapo.vn</span>
              </div>
            </div>

            <div className="mt-8 w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6578000000004!2d106.656789!3d10.761989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed222222222%3A0x2222222222222222!2zNzAgTMOgIEdpYSwgUGjGsOG7nW5nIDE1LCBRdeG6rW4gMTEsIFRow6BuaCBwaOG7kSBI4buTIEPDrSBNaW5o!5e0!3m2!1svi!2svn!4v1678901234567!5m2!1svi!2svn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map showing 70 Lu Gia"
              ></iframe>
            </div>
          </div>

          {/* Cột phải: Form gửi thông tin */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative pb-2">
              Gửi thông tin
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-amber-500"></span>
            </h2>

            <p className="text-gray-700 mb-4">
              Hoạt động của tập đoàn là tập trung vào ba khu vực kinh doanh
              chiến lược: hàng hoá tiêu dùng, kỹ thuật xây dựng, kỹ thuật công
              nghiệp và tự động.
            </p>
            <p className="text-gray-700 mb-8">
              Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng
              tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ tên<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Điện thoại<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
              >
                GỬI TIN NHẮN
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
