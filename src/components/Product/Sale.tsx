import { useState } from "react";

type Product = {
  name: string;
  currentPrice: string;
  originalPrice: string | null;
  discount: string | null;
  image: string;
};

export default function Sale() {
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
    <div className="bg-white -mt-5">
      <div className="container mx-auto px-4 py-0 pb-8 md:pb-12 lg:pb-16">
        {/* Heading and Brand Logo */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
            <span className="w-1 h-4 md:h-6 bg-amber-500 mr-2"></span>
            KHUYẾN MÃI HOT
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
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

        {/* Pagination */}
        <div className="flex justify-center items-center gap-1 md:gap-2">
          <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 text-sm md:text-base">
            {"«"}
          </button>
          <button className="px-3 md:px-4 py-2 border border-amber-500 bg-amber-500 text-white rounded-md font-semibold text-sm md:text-base">
            1
          </button>
          <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 text-sm md:text-base">
            2
          </button>
          <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 text-sm md:text-base">
            {"»"}
          </button>
        </div>
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
                    // navigate("/checkout") - bạn có thể thêm navigation sau
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
