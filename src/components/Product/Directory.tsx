"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Directory() {
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const [isNewsOpen, setIsNewsOpen] = useState(true);

  const products = [
    {
      name: "Máy cắt sắt Bosch GCO 200 2000W + 3 ...",
      currentPrice: "2.649.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9519375745054.jpg?v=1531752178083",
    },
    {
      name: "Máy khoan Professional Bosch GBM 320...",
      currentPrice: "645.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/13130688987166.jpg?v=1531752182283",
    },
    {
      name: "Máy khoan búa Bosch GBH 2-24 RE 790W",
      currentPrice: "3.085.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/15446514008094.jpg?v=1531752179577",
    },
    {
      name: "Máy khoan vặn vít dùng pin Bosch GSB ...",
      currentPrice: "3.045.000đ",
      originalPrice: "5.000.000đ",
      discount: "39%",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9536359890974.jpg?v=1531752174247",
    },
    {
      name: "Máy khoan vặn vít dùng pin Bosch",
      currentPrice: "3.045.000đ",
      originalPrice: "5.000.000đ",
      discount: "39%",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9536359890974a14095feba8d40d1b.jpg?v=1531752173503",
    },
    {
      name: "Máy khoan búa D25032 DeWALT",
      currentPrice: "2.990.000đ",
      originalPrice: "3.500.000đ",
      discount: "15%",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9609814474782.jpg?v=1531752174950",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-1 md:py-2 lg:py-3 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Directory */}
        <aside className="lg:col-span-1">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-1 h-6 bg-amber-500 mr-2"></span>
              DANH MỤC
            </h2>
            <nav className="space-y-1 text-gray-700">
              <a
                href="#"
                className="block py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                Trang chủ
              </a>
              <a
                href="#"
                className="block py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                Giới thiệu
              </a>

              {/* Sản phẩm (Products) section */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full py-2 px-3 hover:bg-gray-50 rounded-md text-amber-500 font-semibold"
                >
                  Sản phẩm
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Dụng cụ cầm tay
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Nhóm sử dụng điện
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Phụ kiện gia đình
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Vận chuyển, nâng đỡ
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Dụng cụ làm vườn
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Sơn, dầu mỡ, hoá chất
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Vật dụng khác
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Kim khí, bảo hộ lao động
                    </a>
                  </div>
                )}
              </div>

              {/* Tin tức (News) section */}
              <div>
                <button
                  onClick={() => setIsNewsOpen(!isNewsOpen)}
                  className="flex items-center justify-between w-full py-2 px-3 hover:bg-gray-50 rounded-md"
                >
                  Tin tức
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isNewsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isNewsOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Tin tức 1
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-50 rounded-md"
                    >
                      Tin tức 2
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="block py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                Liên hệ
              </a>
            </nav>
          </div>
        </aside>

        {/* Right Column: Product Listing */}
        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-bold text-amber-500">
                      {product.currentPrice}
                    </p>
                    {product.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
