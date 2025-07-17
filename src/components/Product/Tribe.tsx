"use client";

import { LayoutGrid, List, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Tribe() {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const navigate = useNavigate();

  const handleProductClick = (index: number) => {
    if (index === 0) {
      // Sản phẩm "Bộ dụng cụ vặn vít đa năng 10 chi tiết B..."
      navigate("/products/bo-dung-cu-van-vit");
    }
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
                  viewMode === "list" ? "flex items-center gap-4 p-4" : ""
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
                  <p className="text-base md:text-lg font-bold text-amber-500">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
