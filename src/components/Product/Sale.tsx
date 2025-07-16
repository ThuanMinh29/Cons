export default function Sale() {
  const products = [
    {
      name: "Bộ nén khí không dây FLEXVOLT® 60V ...",
      currentPrice: "1.500.000đ",
      originalPrice: "1.700.000đ",
      discount: "12%",
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/aside_banner.png?1705892750011",
    },
    {
      name: "Máy khoan động lực 650w dewalt dwd0...",
      currentPrice: "1.650.000đ",
      originalPrice: "2.000.000đ",
      discount: null, // No discount badge visible for this product in the image
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/imageresizere9f14700d7a04c20b6.jpg?v=1531752165567",
    },
    {
      name: "Máy thổi hơi nóng Dewalt d26414",
      currentPrice: "1.350.000đ",
      originalPrice: "1.500.000đ",
      discount: null, // No discount badge visible for this product in the image
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/imageresizerd33bc9de80034c1ba0.jpg?v=1531752164460",
    },
    {
      name: "Bộ dụng cụ Bosch đa năng", // Placeholder for the first large image
      currentPrice: "3.045.000đ",
      originalPrice: "5.000.000đ",
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/maylhoanff2e6943b61f49b69c2565.jpg?v=1531752161990",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-0 pb-16">
        {/* Heading and Brand Logo */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-6 bg-amber-500 mr-2"></span>
            KHUYẾN MÃI HOT
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            {"«"}
          </button>
          <button className="px-4 py-2 border border-amber-500 bg-amber-500 text-white rounded-md font-semibold">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
            {"»"}
          </button>
        </div>
      </div>
    </div>
  );
}
