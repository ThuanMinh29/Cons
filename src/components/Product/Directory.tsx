"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Product = {
  name: string;
  currentPrice: string;
  originalPrice: string | null;
  discount: string | null;
  image: string;
};

export default function Directory() {
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const [isNewsOpen, setIsNewsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setShowModal(true);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const formatPrice = (price: string) => {
    return price.replace(/\./g, "").replace("đ", "");
  };

  const calculateTotal = () => {
    if (!selectedProduct) return "0đ";
    const price = parseInt(formatPrice(selectedProduct.currentPrice));
    return (price * quantity).toLocaleString("vi-VN") + "đ";
  };

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
    <div className="bg-white -mt-5">
      <div className="container mx-auto px-4 py-1 md:py-2 lg:py-3 grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {/* Left Column: Directory */}
        <aside className="xl:col-span-1">
          {/* Mobile toggle button */}
          <div className="xl:hidden mb-4">
            <button className="w-full bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-semibold">
              Danh mục sản phẩm
            </button>
          </div>

          <div className="hidden xl:block">
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                <span className="w-1 h-4 md:h-6 bg-amber-500 mr-2"></span>
                DANH MỤC
              </h2>
              <nav className="space-y-1 text-gray-700 text-sm md:text-base">
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
                    <div className="pl-4 md:pl-6 space-y-1 mt-1">
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
                    <div className="pl-4 md:pl-6 space-y-1 mt-1">
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
          </div>
        </aside>

        {/* Right Column: Product Listing */}
        <main className="xl:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative w-full h-40 sm:h-44 md:h-48 bg-gray-100 flex items-center justify-center">
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
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 md:mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="relative">
                    {/* Giá tiền - hiển thị khi không hover */}
                    <div className="flex items-baseline gap-2 justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <p className="text-base md:text-lg font-bold text-amber-500">
                        {product.currentPrice}
                      </p>
                      {product.originalPrice && (
                        <p className="text-xs md:text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </p>
                      )}
                    </div>
                    {/* Nút mua ngay - hiển thị khi hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-amber-600 transition-colors"
                      >
                        MUA NGAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal giỏ hàng */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl mx-4 rounded-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold z-10 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Bạn đã thêm{" "}
                  <span className="text-red-500 font-medium">
                    {selectedProduct.name}
                  </span>{" "}
                  vào giỏ hàng
                </span>
              </div>

              {/* Cart Header */}
              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="text-gray-700 font-medium">
                  Giỏ hàng của bạn (1 sản phẩm)
                </span>
              </div>

              {/* Table */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SẢN PHẨM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ĐƠN GIÁ
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SỐ LƯỢNG
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        THÀNH TIỀN
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={selectedProduct.image || "/placeholder.svg"}
                            alt={selectedProduct.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium text-gray-900">
                              {selectedProduct.name}
                            </p>
                            <div className="mt-1 space-y-1">
                              <p className="text-sm text-gray-500 cursor-pointer hover:text-red-500">
                                ✕ Bỏ sản phẩm
                              </p>
                              <p className="text-sm text-green-600">
                                ✓ Sản phẩm vừa thêm!
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                        {selectedProduct.currentPrice}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(-1)}
                            className="w-8 h-8 border border-black rounded flex items-center justify-center hover:bg-black hover:text-white cursor-pointer text-black"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-black font-medium">
                            {quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(1)}
                            className="w-8 h-8 border border-black rounded flex items-center justify-center hover:bg-black hover:text-white cursor-pointer text-black"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {calculateTotal()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Giao hàng trên toàn quốc</p>
                <p className="text-lg font-medium">
                  Thành tiền:{" "}
                  <span className="text-yellow-600 font-bold">
                    {calculateTotal()}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-1 cursor-pointer"
                >
                  ◀ Chọn sản phẩm khác
                </button>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Tiến hành đặt hàng →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
