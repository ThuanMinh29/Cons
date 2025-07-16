import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb - sát với header */}
      <div className="bg-gray-100 pb-3 pt-4 text-sm">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/" className="text-black hover:underline">
            Trang chủ
          </Link>
          <span className="mx-2 text-black">{">"}</span>
          <span className="text-amber-500 font-medium">Đại lý</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Filter Dropdowns */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label
              htmlFor="province"
              className="block text-sm font-medium text-black mb-1"
            >
              Chọn tỉnh thành
            </label>
            <select
              id="province"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            >
              <option className="text-gray-800">Tất Cả</option>
              <option className="text-gray-800">Hồ Chí Minh</option>
              <option className="text-gray-800">Hà Nội</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="district"
              className="block text-sm font-medium text-black mb-1"
            >
              Chọn quận / huyện
            </label>
            <select
              id="district"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            >
              <option className="text-gray-800">Tất Cả</option>
              <option className="text-gray-800">Quận 1</option>
              <option className="text-gray-800">Quận Tân Bình</option>
            </select>
          </div>
        </div>

        {/* Map and Store List Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Column */}
          <div className="lg:col-span-2 relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2660770000004!2d106.660789!3d10.790000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed222222222%3A0x2222222222222222!2zMTc1IMSQLiBMw70gVGjGsOG7nW5nIEtp4buHdCwgUGjGsOG7nW5nIDYsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIEPDrSBNaW5o!5e0!3m2!1svi!2svn!4v1678901234567!5m2!1svi!2svn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing 175 D. Ly Thuong Kiet"
            ></iframe>

            {/* Info Window Overlay */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-semibold text-gray-900 mb-1">
                175 Đ. Lý Thường Kiệt
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                175 Đ. Lý Thường Kiệt, Phường 6, Tân Bình, Hồ Chí Minh
              </p>
              <div className="flex items-center justify-between text-sm">
                <a
                  href="#"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <MapPin className="w-4 h-4" />
                  Chỉ đường
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Xem bản đồ lớn hơn
                </a>
              </div>
            </div>
          </div>

          {/* Store List Column */}
          <div className="lg:col-span-1 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="bg-amber-500 text-white font-semibold text-lg p-4">
              Danh sách cửa hàng
            </div>
            <div className="p-4 h-[436px] overflow-y-auto">
              {/* Placeholder for store list items */}
              <p className="text-gray-600 text-sm">
                Không có cửa hàng nào được tìm thấy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
