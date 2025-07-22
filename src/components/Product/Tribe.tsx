"use client";

import { LayoutGrid, List, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Product = {
  name: string;
  price: string;
  image: string;
};

export default function Tribe() {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleProductClick = (index: number) => {
    if (index === 0) {
      // Sản phẩm "Bộ dụng cụ vặn vít đa năng 10 chi tiết B..."
      navigate("/products/bo-dung-cu-van-vit");
    }
  };

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
    const price = parseInt(formatPrice(selectedProduct.price));
    return (price * quantity).toLocaleString("vi-VN") + "đ";
  };

  const brands = ["Bosch", "DeWALT"];
  const priceRanges = [
    "200.000đ - 300.000đ",
    "300.000đ - 500.000đ",
    "500.000đ - 1.000.000đ",
    "Giá trên 1.000.000đ",
  ];
  const productTypes = [
    "Hộp dụng cụ",
    "Máy phun xịt",
    "Máy cắt",
    "Máy nén khí",
  ];

  const products = [
    {
      name: "Bộ dụng cụ vặn vít đa năng 10 chi tiết B...",
      price: "129.000đ",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9624565088286.jpg?v=1531752184130",
    },
    {
      name: "Máy khoan động lực Bosch GSB 13 RE S...",
      price: "1.672.000đ",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/13130688987166.jpg?v=1531752182283",
    },
    {
      name: "Máy phun xịt rửa áp lực cao Bosch Easy ...",
      price: "2.099.000đ",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/15446514008094.jpg?v=1531752179577",
    },
    {
      name: "Máy cắt sắt Bosch GCO 220",
      price: "2.500.000đ",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9519375745054.jpg?v=1531752178083",
    },
    {
      name: "Máy khoan búa Bosch GBH 2-26 DRE",
      price: "3.150.000đ",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/maykhoan.jpg?v=1531752175557",
    },
    {
      name: "Máy mài góc Bosch GWS 060",
      price: "850.000đ",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9609814474782.jpg?v=1531752174950",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <Link to="/" className="hover:underline text-black">
            Trang chủ
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-semibold text-amber-500">Tất cả sản phẩm</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-6 lg:py-8 grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {/* Left Column: Filters */}
        <aside className="xl:col-span-1">
          {/* Mobile filter toggle button */}
          <div className="xl:hidden mb-4">
            <button className="w-full bg-amber-500 text-white px-4 py-2 rounded-md">
              Bộ lọc
            </button>
          </div>

          <div className="hidden xl:block">
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                <span className="w-1 h-4 md:h-6 bg-amber-500 mr-2"></span>
                BỘ LỌC
              </h2>
            </div>

            {/* Brand Filter */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-base md:text-lg font-semibold text-amber-500 mb-3 md:mb-4">
                THƯƠNG HIỆU
              </h3>
              <div className="relative flex items-center mb-3 md:mb-4">
                <input
                  type="text"
                  placeholder="Tìm Thương hiệu"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                />
                <button className="absolute right-0 top-0 h-full px-3 bg-amber-500 text-white rounded-r-md flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {brands.map((brand, index) => (
                  <label
                    key={index}
                    className="flex items-center text-gray-700 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-base md:text-lg font-semibold text-amber-500 mb-3 md:mb-4">
                GIÁ SẢN PHẨM
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <label
                    key={index}
                    className="flex items-center text-gray-700 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2"
                    />
                    {range}
                  </label>
                ))}
              </div>
            </div>

            {/* Product Type Filter */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-base md:text-lg font-semibold text-amber-500 mb-3 md:mb-4">
                LOẠI SẢN PHẨM
              </h3>
              <div className="relative flex items-center mb-3 md:mb-4">
                <input
                  type="text"
                  placeholder="Tìm Loại"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                />
                <button className="absolute right-0 top-0 h-full px-3 bg-amber-500 text-white rounded-r-md flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {productTypes.map((type, index) => (
                  <label
                    key={index}
                    className="flex items-center text-gray-700 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Product Listing */}
        <main className="xl:col-span-3">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md ${
                  viewMode === "grid"
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md ${
                  viewMode === "list"
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="hidden sm:block">Sắp xếp:</span>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm">
                <option>Thứ tự</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
                <option>Mới nhất</option>
              </select>
            </div>
          </div>

          {/* Product Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
                : "grid grid-cols-1 gap-4 md:gap-6"
            }
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  viewMode === "list" ? "flex items-center gap-4 p-4" : "group"
                }`}
              >
                <div
                  className={`${
                    viewMode === "list"
                      ? "w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0"
                      : "w-full h-40 sm:h-48"
                  } relative bg-gray-100 flex items-center justify-center cursor-pointer`}
                  onClick={() => handleProductClick(index)}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div
                  className={`${
                    viewMode === "list" ? "flex-grow" : "p-3 md:p-4"
                  }`}
                >
                  <h3 className="text-sm md:text-base font-medium text-gray-900 mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  {viewMode === "grid" ? (
                    <div className="relative">
                      {/* Giá tiền - hiển thị khi không hover */}
                      <div className="text-center group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-base md:text-lg font-bold text-amber-500">
                          {product.price}
                        </p>
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
                  ) : (
                    <p className="text-base md:text-lg font-bold text-amber-500">
                      {product.price}
                    </p>
                  )}
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
                        {selectedProduct.price}
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
