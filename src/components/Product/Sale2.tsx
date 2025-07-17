export default function Sale2() {
  const products = [
    {
      name: "Máy khoan động lực Bosch GSB",
      currentPrice: "1.672.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/13130688987166.jpg?v=1531752182283", // Thay bằng link ảnh nếu có
    },
    {
      name: "Máy phun xịt rửa áp lực cao Bosch",
      currentPrice: "2.099.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/15446514008094.jpg?v=1531752179577", // Thay bằng link ảnh nếu có
    },
    {
      name: "Máy cắt sắt Bosch GCO 200",
      currentPrice: "2.649.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9519375745054.jpg?v=1531752178083", // Thay bằng link ảnh nếu có
    },
    {
      name: "Máy khoan Professional Bosch GBM",
      currentPrice: "645.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/maykhoan.jpg?v=1531752175557", // Thay bằng link ảnh nếu có
    },
    {
      name: "Máy khoan búa Bosch GBH 2-24",
      currentPrice: "3.085.000đ",
      originalPrice: null,
      discount: null,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/products/9609814474782.jpg?v=1531752174950", // Thay bằng link ảnh nếu có
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-0 pb-16">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-6 bg-amber-500 mr-2"></span>
            SẢN PHẨM LIÊN QUAN
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium text-gray-900 mb-1 text-center">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-amber-500 text-center">
                  {product.currentPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
