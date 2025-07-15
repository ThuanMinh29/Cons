"use client";

import { useState } from "react";

const Product = () => {
  const [activeFilter, setActiveFilter] = useState("Dụng cụ cầm tay");

  const filterTabs = [
    { id: "hand-tools", label: "Dụng cụ cầm tay" },
    { id: "electric-tools", label: "Nhóm sử dụng điện" },
    { id: "home-accessories", label: "Phụ kiện gia đình" },
  ];

  const products = [
    {
      id: 1,
      name: "Bộ dụng cụ vặn vít đa năng 10 c...",
      price: "129.000",
      image: "/placeholder.svg?height=200&width=200",
      category: "hand-tools",
    },
    {
      id: 2,
      name: "Máy khoan động lực Bosch GSB ...",
      price: "1.672.000",
      image: "/placeholder.svg?height=200&width=200",
      category: "electric-tools",
    },
    {
      id: 3,
      name: "Máy phun xịt rửa áp lực cao Bos...",
      price: "2.099.000",
      image: "/placeholder.svg?height=200&width=200",
      category: "electric-tools",
    },
    {
      id: 4,
      name: "Máy cắt sắt Bosch GCO 200 200...",
      price: "2.649.000",
      image: "/placeholder.svg?height=200&width=200",
      category: "electric-tools",
    },
    {
      id: 5,
      name: "Máy khoan Professional Bosch G...",
      price: "645.000",
      image: "/placeholder.svg?height=200&width=200",
      category: "electric-tools",
    },
  ];

  const filteredProducts = products.filter((product) =>
    activeFilter === "Dụng cụ cầm tay"
      ? product.category === "hand-tools"
      : activeFilter === "Nhóm sử dụng điện"
      ? product.category === "electric-tools"
      : product.category === "home-accessories"
  );

  const displayProducts =
    activeFilter === "Dụng cụ cầm tay" ? products : filteredProducts;

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SẢN PHẨM MỚI NHẤT
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400 mx-2 transform rotate-45"></div>
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 px-4">
            Chúng tôi lựa chọn những vật liệu bền bỉ với giá thành tốt nhất,
            khách hàng sẽ nhận được sự tư vấn tốt nhất để có thể lựa chọn giải
            pháp phù hợp với mình.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1 sm:p-2 max-w-full overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.label)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
                  activeFilter === tab.label
                    ? "bg-yellow-400 text-black shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {/* Product 1 - Screwdriver Set */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-3 sm:p-4">
              <div className="aspect-square bg-gray-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/thumb/1024x1024/100/321/299/products/15706186383390.jpg?v=1531752184130"
                  alt="Bosch Screwdriver Set"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                Bộ dụng cụ vặn vít đa năng 10 c...
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-yellow-500">
                129.000đ
              </p>
            </div>
          </div>

          {/* Product 2 - Impact Drill */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-3 sm:p-4">
              <div className="aspect-square bg-gray-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/321/299/products/13130688987166.jpg?v=1531752182283"
                  alt="Bosch GSB Impact Drill"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                Máy khoan động lực Bosch GSB ...
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-yellow-500">
                1.672.000đ
              </p>
            </div>
          </div>

          {/* Product 3 - Pressure Washer */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-3 sm:p-4">
              <div className="aspect-square bg-gray-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/321/299/products/15446514008094.jpg?v=1531752179577"
                  alt="Bosch Pressure Washer"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                Máy phun xịt rửa áp lực cao Bos...
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-yellow-500">
                2.099.000đ
              </p>
            </div>
          </div>

          {/* Product 4 - Cut-off Saw */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-3 sm:p-4">
              <div className="aspect-square bg-gray-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9519375745054.jpg?v=1531752178083"
                  alt="Bosch GCO 200 Cut-off Saw"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                Máy cắt sắt Bosch GCO 200 200...
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-yellow-500">
                2.649.000đ
              </p>
            </div>
          </div>

          {/* Product 5 - Professional Drill */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-3 sm:p-4">
              <div className="aspect-square bg-gray-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/321/299/products/maykhoan.jpg?v=1531752175557"
                  alt="Bosch Professional Drill"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                Máy khoan Professional Bosch G...
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-yellow-500">
                645.000đ
              </p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
            Xem tất cả sản phẩm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
