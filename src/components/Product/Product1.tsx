import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Product1() {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleBuyNow = () => {
    setCartQuantity(quantity);
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Cart indicator */}
      {cartQuantity > 0 && (
        <div className="fixed top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Giỏ hàng: {cartQuantity} sản phẩm
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center overflow-x-auto">
          <a href="/" className="text-black hover:underline whitespace-nowrap">
            Trang chủ
          </a>
          <span className="mx-2 text-black">{">"}</span>
          <a href="#" className="text-black hover:underline whitespace-nowrap">
            Dụng cụ cầm tay
          </a>
          <span className="mx-2 text-black">{">"}</span>
          <span className="text-amber-500 font-medium">
            Bộ dụng cụ vặn vít đa năng 10 chi tiết Bosch 2607019510 (Xanh rêu)
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_1fr] gap-6 md:gap-8">
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col items-center">
            <img
              src="https://bizweb.dktcdn.net/thumb/medium/100/321/299/products/15706186383390.jpg?v=1531752184130"
              alt="Bộ dụng cụ vặn vít đa năng 10 chi tiết Bosch"
              className="w-full h-auto object-contain border rounded-lg bg-white"
            />
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 w-auto justify-center md:justify-start">
              <img
                src="https://bizweb.dktcdn.net/thumb/medium/100/321/299/products/15706186383390.jpg?v=1531752184130"
                alt="Thumbnail 1"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain border rounded-md cursor-pointer hover:border-orange-500 transition-colors bg-white flex-shrink-0"
              />
              <img
                src="https://bizweb.dktcdn.net/thumb/medium/100/321/299/products/9624565088286.jpg?v=1531752184130"
                alt="Thumbnail 2"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain border rounded-md cursor-pointer hover:border-orange-500 transition-colors bg-white flex-shrink-0"
              />
              <img
                src="https://bizweb.dktcdn.net/thumb/medium/100/321/299/products/9624600674334.jpg?v=1531752184130"
                alt="Thumbnail 3"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain border rounded-md cursor-pointer hover:border-orange-500 transition-colors bg-white flex-shrink-0"
              />
              <img
                src="https://bizweb.dktcdn.net/thumb/medium/100/321/299/products/10208503595038.jpg?v=1531752184130"
                alt="Thumbnail 4"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain border rounded-md cursor-pointer hover:border-orange-500 transition-colors bg-white flex-shrink-0"
              />
            </div>
          </div>

          {/* Center Column: Product Details */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold mb-2 leading-tight">
              Bộ dụng cụ vặn vít đa năng 10 chi tiết Bosch 2607019510 (Xanh rêu)
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
              129.000đ
            </p>
            <p className="text-sm mb-4">
              Thương hiệu: <span className="font-medium">Bosch</span> | Tình
              trạng:{" "}
              <span className="text-green-600 font-medium">Còn hàng</span>
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1 text-sm md:text-base">
              <li>Chế tạo từ chất liệu thép không gỉ chắc khỏe</li>
              <li>Thiết kế độc đáo và mang tính tiện dụng cao</li>
              <li>Tính năng khóa đảo chiều</li>
            </ul>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 text-sm md:text-base">Số lượng</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={handleDecrease}
                  className="h-8 w-8 hover:bg-gray-100 flex items-center justify-center"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-x border-gray-300 h-8 text-sm md:text-base"
                />
                <button
                  onClick={handleIncrease}
                  className="h-8 w-8 hover:bg-gray-100 flex items-center justify-center"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md text-base md:text-lg"
            >
              MUA NGAY
            </button>
          </div>

          {/* Right Column: Services & Suggestions */}
          <div className="space-y-4 md:space-y-6">
            {/* Service Info */}
            <div className="border rounded-lg p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/policy_image_1.png?1705892750011"
                  alt="Giao hàng"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <div>
                  <h3 className="font-medium text-xs md:text-sm">
                    Giao hàng trong 24h
                  </h3>
                  <p className="text-xs text-gray-600">
                    Với đơn hàng trên 500.000 đ
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/policy_image_2.png?1705892750011"
                  alt="Bảo đảm chất lượng"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <div>
                  <h3 className="font-medium text-xs md:text-sm">
                    Bảo đảm chất lượng
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sản phẩm bảo đảm chất lượng.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/policy_image_3.png?1705892750011"
                  alt="Hỗ trợ 24/7"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <div>
                  <h3 className="font-medium text-xs md:text-sm">
                    Hỗ trợ 24/7
                  </h3>
                  <p className="text-xs text-gray-600">Hotline: 0123 456 789</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/policy_image_4.png?1705892750011"
                  alt="Sản phẩm chính hãng"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <div>
                  <h3 className="font-medium text-xs md:text-sm">
                    Sản phẩm chính hãng
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sản phẩm nhập khẩu chính hãng
                  </p>
                </div>
              </div>
            </div>

            {/* Suggested Products */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
                Sản phẩm gợi ý
              </h2>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/15706186383390.jpg?v=1531752184130"
                    alt="Bộ dụng cụ vặn vít đa năn..."
                    className="w-12 h-12 md:w-16 md:h-16 object-contain border rounded-md flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs md:text-sm">
                      Bộ dụng cụ vặn vít đa năn...
                    </p>
                    <p className="text-sm md:text-base font-semibold text-orange-600">
                      129.000đ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/14048053854238.jpg?v=1531752182283"
                    alt="Máy khoan động lực Bosch..."
                    className="w-16 h-16 object-contain border rounded-md"
                  />
                  <div>
                    <p className="text-sm">Máy khoan động lực Bosch...</p>
                    <p className="text-base font-semibold text-orange-600">
                      1.672.000đ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/15446513582110.jpg?v=1531752179577"
                    alt="Máy phun xịt rửa áp lực ca..."
                    className="w-16 h-16 object-contain border rounded-md"
                  />
                  <div>
                    <p className="text-sm">Máy phun xịt rửa áp lực ca...</p>
                    <p className="text-base font-semibold text-orange-600">
                      2.099.000đ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/9604899471390.jpg?v=1531752178083"
                    alt="Máy cắt sắt Bosch GCO 20..."
                    className="w-16 h-16 object-contain border rounded-md"
                  />
                  <div>
                    <p className="text-sm">Máy cắt sắt Bosch GCO 20...</p>
                    <p className="text-base font-semibold text-orange-600">
                      2.649.000đ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/maykhoan.jpg?v=1531752175557"
                    alt="Máy khoan Professional Bo..."
                    className="w-16 h-16 object-contain border rounded-md"
                  />
                  <div>
                    <p className="text-sm">Máy khoan Professional Bo...</p>
                    <p className="text-base font-semibold text-orange-600">
                      845.000đ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/9609814474782.jpg?v=1531752174950"
                    alt="Máy khoan búa Bosch GBH..."
                    className="w-16 h-16 object-contain border rounded-md"
                  />
                  <div>
                    <p className="text-sm">Máy khoan búa Bosch GBH...</p>
                    <p className="text-base font-semibold text-orange-600">
                      3.085.000đ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/9533861134366.jpg?v=1531752174247"
                    alt="Máy khoan vặn vít dùng pi..."
                    className="w-16 h-16 object-contain border rounded-md"
                  />
                  <div>
                    <p className="text-sm">Máy khoan vặn vít dùng pi...</p>
                    <p className="text-base font-semibold text-orange-600">
                      3.045.000đ
                    </p>
                    <p className="text-xs text-gray-500 line-through">
                      5.000.000đ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://bizweb.dktcdn.net/thumb/small/100/321/299/products/95338611343664ae837653dca4be0b.jpg?v=1531752173503"
                    alt="Máy khoan vặn vít dùng pi..."
                    className="w-16 h-16 object-contain border rounded-md"
                  />
                  <div>
                    <p className="text-sm">Máy khoan vặn vít dùng pi...</p>
                    <p className="text-base font-semibold text-orange-600">
                      3.045.000đ
                    </p>
                    <p className="text-xs text-gray-500 line-through">
                      5.000.000đ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section - Full width below, only with right column */}
        <div className="mt-[30px] grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-8">
          {/* Description takes left + center space */}
          <div>
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4">
              <nav className="flex space-x-8 justify-center">
                <button className="py-2 px-1 border-b-2 border-orange-500 text-orange-600 font-medium">
                  MÔ TẢ
                </button>
                <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                  TAB TÙY CHỈNH
                </button>
                <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                  ĐÁNH GIÁ
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div>
              <h3 className="font-semibold mb-3">
                Chế tạo từ chất liệu thép không gỉ chắc khỏe
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Bộ mũi vặn vít cầm tay 10 món Bosch được chế tạo từ chất liệu
                thép không gỉ với độ cứng cao, chắc khỏe, không bị biến dạng,
                gãy hay cong khi bị tác động lực mạnh hoặc chịu nhiệt cao, cho
                giá trị sử dụng lâu dài.
              </p>

              <h3 className="font-semibold mb-3">
                Thiết kế 9 mũi vặn vít có kích thước khác nhau
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Với 9 mũi vặn vít có kích thước khác nhau, bạn có thể dễ dàng
                thay đổi phần đầu vặn theo từng nhu cầu và tình chất công việc.
                Bộ sản phẩm được dùng để tháo, lắp vít, bu lông hay chính sửa
                các môi nối, bạn hãy cửa trong gia đình một cách đơn giản.
              </p>

              <h3 className="font-semibold mb-3">
                Thiết kế độc đáo và mang tính tiện dụng cao
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Được thiết kế độc đáo và mang tính tiện dụng cao với phần khung
                dùng các đầu vít cũng tự cân cằm chắc chắn, sản phẩm giúp bạn có
                thể thuận tiện sử dụng ngay lập tức mà không mất nhiều thời
                gian.
              </p>

              <h3 className="font-semibold mb-3">
                Tính năng khóa đối chiều tiện tiện
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                Bộ mũi vặn vít cầm tay 10 món Bosch 2607019510 là bộ sản phẩm
                không thể thiếu trong các xưởng cơ khí, sửa chữa máy móc chuyên
                nghiệp, giúp bạn hoàn thành công việc một cách nhanh chóng.
              </p>

              <div className="text-center mt-6">
                <button className="text-orange-500 hover:text-orange-600 font-medium">
                  Thu gọn ▲
                </button>
              </div>
            </div>
          </div>

          {/* Empty space to align with right column */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
