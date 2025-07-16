"use client";

import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BodyNew() {
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const [isNewsOpen, setIsNewsOpen] = useState(true);

  const mainNewsArticles = [
    {
      image:
        "https://bizweb.dktcdn.net/thumb/grande/100/321/299/articles/nha-quan-9-4-1528165140-680x0.jpg?v=1530866651860",
      date: "06/07/2018",
      title: "Nhà Sài Gòn kín cổng cao tường nhưng ngập nắng, cây xanh",
      description:
        "Chủ khu đất rộng 200 m2 ở quận 9 (TP HCM) là một cặp vợ chồng thành đạt tới từ miền Trung. Họ lớn lên ở vùng nông thôn bình dị với nếp nhà ba gian, sân vườn rộng rãi...",
    },
  ];

  const centerNews = {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/da-dang-07-1530254935-680x0.jpg?v=1530866593800",
    title: "Căn hộ Hà Nội đẹp như khách sạn của chủ nhà khắt khe",
    related: [
      "Không gian kỳ lạ trong ngôi nhà có vẻ ngoài mộc mạc",
      "Gia đình Đà Lạt sống trong nhà gỗ giữa vườn hồng 1.000 m2",
      "Nhà 33 m2 thoáng rộng nhờ gác xép đơn giản",
    ],
  };

  const featuredNewsArticles = [
    {
      image:
        "https://bizweb.dktcdn.net/100/321/299/articles/nha-quan-9-4-1528165140-680x0.jpg?v=1530866651860",
      title: "Nhà Sài Gòn kín cổng cao tường nhưng ngập nắng, cây xanh",
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
      title: "Gia đình Đà Lạt sống trong nhà gỗ giữa vườn hồng 1.000 m2",
      date: "06/07/2018",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/" className="text-black hover:underline">
            Trang chủ
          </Link>
          <span className="mx-2 text-black">{">"}</span>
          <span className="text-amber-500 font-medium">Tin tức</span>
        </div>
      </div>

      {/* 3-column layout */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-8 gap-8">
        {/* LEFT - Large news (chiếm 4/8) */}
        <div className="lg:col-span-4">
          <div className="relative w-full h-128 rounded-md overflow-hidden shadow">
            <img
              src={mainNewsArticles[0].image}
              alt={mainNewsArticles[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-amber-500 text-white text-sm px-3 py-1 flex items-center rounded-tr-md">
              <Calendar className="w-4 h-4 mr-1" />
              {mainNewsArticles[0].date}
            </div>
          </div>
          <h2 className="text-lg font-semibold mt-3 text-black">
            {mainNewsArticles[0].title}
          </h2>
          <p className="text-sm text-black mt-1">
            {mainNewsArticles[0].description}
          </p>
        </div>

        {/* CENTER - Small image + related news (2/8) */}
        <div className="lg:col-span-2 space-y-3">
          {/* Image on top */}
          <div className="w-full h-40 sm:h-48 overflow-hidden rounded-md">
            <img
              src={centerNews.image}
              alt={centerNews.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main title */}
          <h3 className="text-base font-semibold text-black leading-snug">
            {centerNews.title}
          </h3>

          {/* Related list */}
          <ul className="space-y-2 text-sm text-black">
            {centerNews.related.map((title, idx) => (
              <li
                key={idx}
                className="border-t pt-2 hover:underline cursor-pointer"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - Sidebar (2/8) */}
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
              {featuredNewsArticles.map((item, index) => (
                <div key={index} className="flex gap-3">
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
      </div>
    </div>
  );
}
