"use client";

import { ChevronDown, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewsDetailPage() {
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const [isNewsOpen, setIsNewsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "Họ tên",
    email: "Email",
    content: "Nội dung",
  });

  const handleFocus = (field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/" className="text-black hover:underline">
            Trang chủ
          </Link>
          <span className="mx-2 text-black">{">"}</span>
          <span className="text-black hover:underline">Tin tức</span>
          <span className="mx-2 text-black">{">"}</span>
          <span className="text-amber-500 font-medium">
            Nhà Sài Gòn kín cổng cao tường nhưng ngập nắng, cây xanh
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-8 gap-8">
        {/* Sidebar (DANH MỤC + NỔI BẬT) */}
        <aside className="lg:col-span-2 space-y-8">
          {/* DANH MỤC */}
          <div>
            <h3 className="text-lg font-bold mb-2 flex items-center text-black">
              <span className="w-1 h-5 bg-amber-500 mr-2"></span>DANH MỤC
            </h3>
            <nav className="space-y-1 text-sm text-black">
              <a href="#" className="block hover:underline text-black">
                Trang chủ
              </a>
              <a href="#" className="block hover:underline text-black">
                Giới thiệu
              </a>
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex justify-between w-full hover:underline text-black"
                >
                  Sản phẩm
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <a href="#" className="block hover:underline text-black">
                      Dụng cụ cầm tay
                    </a>
                    <a href="#" className="block hover:underline text-black">
                      Nhóm sử dụng điện
                    </a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsNewsOpen(!isNewsOpen)}
                  className="flex justify-between w-full hover:underline text-black"
                >
                  Tin tức
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isNewsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isNewsOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <a href="#" className="block hover:underline text-black">
                      Nhà đẹp
                    </a>
                    <a href="#" className="block hover:underline text-black">
                      Không gian sống
                    </a>
                    <a href="#" className="block hover:underline text-black">
                      Tin tức
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="block hover:underline text-black">
                Liên hệ
              </a>
            </nav>
          </div>

          {/* NỔI BẬT */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center text-black">
              <span className="w-1 h-5 bg-amber-500 mr-2"></span>NỔI BẬT
            </h3>
            <div className="space-y-4">
              {[
                {
                  image:
                    "https://bizweb.dktcdn.net/100/321/299/articles/nha-quan-9-4-1528165140-680x0.jpg?v=1530866651860",
                  title:
                    "Nhà Sài Gòn kín cổng cao tường nhưng ngập nắng, cây xanh",
                  date: "06/07/2018",
                },
                {
                  image:
                    "https://bizweb.dktcdn.net/thumb/small/100/321/299/articles/da-dang-07-1530254935-680x0.jpg?v=1530866593800",
                  title: "Căn hộ Hà Nội đẹp như khách sạn của chủ nhà khắt khe",
                  date: "06/07/2018",
                },
                {
                  image:
                    "https://bizweb.dktcdn.net/thumb/small/100/321/299/articles/nha-la-3-1530243872-680x0.jpg?v=1530866547180",
                  title: "Không gian kỳ lạ trong ngôi nhà có vẻ ngoài mộc mạc",
                  date: "06/07/2018",
                },
                {
                  image:
                    "https://bizweb.dktcdn.net/thumb/small/100/321/299/articles/da-lat-12-1530608880-680x0.jpg?v=1530866471727",
                  title:
                    "Gia đình Đà Lạt sống trong nhà gỗ giữa vườn hồng 1.000 m2",
                  date: "06/07/2018",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="text-sm">
                    <p className="font-medium leading-snug text-black">
                      {item.title}
                    </p>
                    <p className="text-black text-xs mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-6">
          <h1 className="text-2xl font-bold text-black mb-4">
            Nhà Sài Gòn kín cổng cao tường nhưng ngập nắng, cây xanh
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Đăng bởi{" "}
            <span className="font-semibold text-black">
              NGUYỄN CHÁNH BẢO TRUNG
            </span>{" "}
            vào lúc 06/07/2018
          </p>
          <div className="w-full h-80 md:h-[400px] overflow-hidden rounded-md shadow">
            <img
              src="https://bizweb.dktcdn.net/100/321/299/articles/nha-quan-9-4-1528165140-680x0.jpg?v=1530866651860"
              alt="Main article"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black text-sm mt-6 leading-relaxed">
            Chủ căn hộ 65 m2 ở Hưng Yên là một đôi vợ chồng trẻ muốn có không
            gian sinh hoạt thoáng đãng, hiện đại. Người chồng đặt văn phòng ngay
            tại nhà nên cần chỗ làm việc, khu tiếp khách riêng để không ảnh
            hưởng tới sinh hoạt của gia đình. Nhà có hai mặt thoáng nhưng có
            nhiều tường ngăn khiến không gian bị chật hẹp, bí bức (trái). Bởi
            vậy, các KTS Trần Việt Phú và Phạm Hoàng Long (Handyman Decor) đưa
            ra phương án cải tạo thay tường bằng vách kính và hệ tủ (phải).
          </p>
          <div className="w-full h-80 md:h-[400px] overflow-hidden rounded-md shadow mt-6">
            <img
              src="https://bizweb.dktcdn.net/100/321/299/files/sinhthai-3-1528860133-680x0.jpg?v=1531920879980"
              alt="Main article"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black text-sm mt-6 leading-relaxed">
            Việc sử dụng vách kính khiến mọi góc trong phòng khách, bàn ăn, khu
            làm việc đều nhận được hai nguồn sáng tự nhiên. Bởi vậy, ngay cả
            trong những hôm trời âm u, gia chủ cũng không cần bật đèn vào ban
            ngày.
          </p>
          <div className="w-full h-80 md:h-[400px] overflow-hidden rounded-md shadow mt-6">
            <img
              src="https://bizweb.dktcdn.net/100/321/299/files/sinhthai-6-1528860150-680x0.jpg?v=1531920907651"
              alt="Main article"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black text-sm mt-6 leading-relaxed">
            Việc sử dụng vách kính khiến mọi góc trong phòng khách, bàn ăn, khu
            làm việc đều nhận được hai nguồn sáng tự nhiên. Bởi vậy, ngay cả
            trong những hôm trời âm u, gia chủ cũng không cần bật đèn vào ban
            ngày.
          </p>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4 relative pb-2 border-b border-dashed border-gray-300 text-gray-800">
              <span className="border-b-4 border-yellow-400 pb-1">
                BÀI VIẾT LIÊN QUAN
              </span>
            </h2>
            <ul className="space-y-2 text-sm text-gray-800">
              {[
                "Nhà Sài Gòn kín cổng cao tường nhưng ngập nắng, cây xanh",
                "Căn hộ Hà Nội đẹp như khách sạn của chủ nhà khắt khe",
                "Không gian kỳ lạ trong ngôi nhà có vẻ ngoài mộc mạc",
                "Gia đình Đà Lạt sống trong nhà gỗ giữa vườn hồng 1.000 m2",
                "Nhà 33 m2 thoáng rộng nhờ gác xép đơn giản",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1">›</span>
                  <span className="hover:text-yellow-600 transition duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comment Form */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4 relative pb-2 border-b border-dashed border-gray-300 text-gray-800">
              <span className="border-b-4 border-yellow-400 pb-1">
                VIẾT BÌNH LUẬN CỦA BẠN:
              </span>
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Họ tên"
                value={formData.name}
                onFocus={() => handleFocus("name")}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onFocus={() => handleFocus("email")}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              />
              <textarea
                placeholder="Nội dung"
                value={formData.content}
                onFocus={() => handleFocus("content")}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
                rows={6}
                className="w-full border border-gray-300 px-4 py-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded flex items-center gap-2"
              >
                <Send size={16} />
                GỬI BÌNH LUẬN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
