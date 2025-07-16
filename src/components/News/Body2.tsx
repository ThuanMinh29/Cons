"use client";

import { Calendar, MessageSquare, User } from "lucide-react";

export default function Body2() {
  const newsArticles = [
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/sinhthai-2-1528860133-680x0.jpg?v=1530541924760",
      date: "02/07/2018",
      title: "Sửa căn hộ chật chội thành thoáng rộng với 245 triệu",
      description:
        "Chủ căn hộ 65 m2 ở Hưng Yên là một đôi vợ chồng trẻ muốn có không gian sinh hoạt thoáng đãng, hiện đại. Người chồng đặt văn phòng ngay tại nhà nên cần chỗ làm việc, khu tiếp khách riêng để không ảnh hưởng tới sinh hoạt của gia đình. Nhà có hai mặt thoáng nhưng có nh...",
      author: "Nguyễn Chánh Bảo Trung",
      comments: 0,
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/v4-1529012836-680x0.jpg?v=1530541852753",
      date: "02/07/2018",
      title: "Những khu vườn đẹp như tranh trên xe tải của người Nhật",
      description:
        "Làm vườn trở nên xa xỉ khi người ta chuyển dần lên sống ở chung cư. Để khắc phục điều đó, người Nhật đã tạo ra những khu vườn trên xe tải. Khu vườn có một chiếc ghế dài để uống cà phê. Vườn có bồn nước bằng tre  Khu vườn có thác nước.  Không g...",
      author: "Nguyễn Chánh Bảo Trung",
      comments: 0,
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/nuoc-4-1529663638-680x0.jpg?v=1530541763860",
      date: "02/07/2018",
      title: "Ngôi nhà có một tầng nằm dưới mặt nước",
      description:
        "Ngôi nhà 2 tầng ở hồ Union (thành phố Seattle, Mỹ) được rao bán 3,6 triệu USD. Vẻ ngoài giản dị của công trình khiến nhiều người thắc mắc tại sao chủ đầu tư lại đưa ra mức giá cao tới vậy. Có nhiều nhà nổi trong khu vực này chỉ có giá 300.000 - 500.000 USD. Lý...",
      author: "Nguyễn Chánh Bảo Trung",
      comments: 0,
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/20-m2-1-1529652671-680x0.jpg?v=1530541693923",
      date: "02/07/2018",
      title: "Căn hộ 20 m2 nhìn không thấy nhỏ nhưng có đủ mọi thứ",
      description:
        "Lựa chọn sống ở trung tâm để thuận tiện cho cuộc sống nên nhiều người chấp nhận nơi có diện tích hẹp. Chủ căn hộ 20 m2 ở New York (Mỹ) quyết định sử dụng nội thất thông minh để nhà có đủ tiện nghi nhưng vẫn thoáng. Khi mới bước vào, khách sẽ thấy nhà có vẻ thi...",
      author: "Nguyễn Chánh Bảo Trung",
      comments: 0,
    },
    {
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/ban-cong-3-1530080506-680x0.jpg?v=1530541603187",
      date: "02/07/2018",
      title:
        "Trồng rau trong nhà và ban công, gia đình Việt ở Czech đủ ăn quanh năm",
      description:
        "Chị Nguyễn Lê Thúy đã sinh sống ở Cộng hòa Czech từ năm 1994. Cách đây 3 năm, chị mua được căn hộ 98 m2 trên tầng 7 khu chung cư ở thủ đô Praha. Chị quyết định dành khoảnh không gian gần cửa sổ phòng khách và ban công để trồng rau ăn hàng ngày. Phòng khách rộng 20 m...",
      author: "Nguyễn Chánh Bảo Trung",
      comments: 0,
    },
  ];

  return (
    <div className="bg-white -mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Left content - 6/8 columns */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {newsArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm p-4"
                >
                  <div className="relative w-full sm:w-48 h-32 sm:h-auto flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-amber-500 text-white px-2 py-1 flex items-center gap-1 text-xs font-semibold rounded-tr-md">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-xs gap-3 mb-3">
                      {article.author && (
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </span>
                      )}
                      {article.comments !== null && (
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {article.comments} bình luận
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12 mb-8">
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

          {/* Right empty space - 2/8 columns */}
          <div className="lg:col-span-2">
            {/* This space is intentionally left empty */}
          </div>
        </div>
      </div>
    </div>
  );
}
