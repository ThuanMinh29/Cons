import { CalendarDays, MessageSquare } from "lucide-react";

const Story = () => {
  const featuredStory = {
    title: "Nhà Sài Gòn kín cổng cao tường nhưng ngập nắng, cây xanh",
    date: "06/07/2018",
    comments: 0,
    image:
      "https://bizweb.dktcdn.net/100/321/299/files/nha-quan-9-1-1528165139-680x0.jpg?v=1531920736423",
    excerpt:
      "Chủ khu đất rộng 200 m2 ở quận 9 (TP HCM) là một cặp vợ chồng thành đạt tới từ miền Trung. Họ lớn lên ở vùng nông thôn bình dị...",
  };

  const smallStories = [
    {
      title: "Căn hộ Hà Nội đẹp như khách sạn của chủ nhà khắt khe",
      date: "06/07/2018",
      comments: 0,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/da-dang-07-1530254935-680x0.jpg?v=1530866593800",
      excerpt:
        "Căn hộ 130 m2 ở quận Bắc Từ Liêm (Hà Nội) là nơi đi về của chủ nhà làm trong lĩnh vực bất động sản. Chị yêu...",
    },
    {
      title: "Không gian kỳ lạ trong ngôi nhà có vẻ ngoài mộc mạc",
      date: "06/07/2018",
      comments: 0,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/nha-la-3-1530243872-680x0.jpg?v=1530866547180",
      excerpt:
        "Nhìn từ trên cao, khu nhà rộng hơn 800 m2 ở bang Oregon (Mỹ) như hòa lẫn vào khung cảnh rừng núi xung quanh...",
    },
    {
      title: "Gia đình Đà Lạt sống trong nhà gỗ giữa vườn hồng 1.000 m2",
      date: "06/07/2018",
      comments: 2,
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/321/299/articles/da-lat-12-1530608880-680x0.jpg?v=1530866471727",
      excerpt:
        "Quê gốc ở Nghệ An, anh Đặng Ngọc Tạo vào Đà Lạt để học và làm việc. Tới năm 2012, anh quyết định làm hai k...",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            TIN NỔI BẬT
          </h2>
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400 mx-2 rotate-45"></div>
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 px-4">
            Chúng tôi mang đến sự táo bạo, tinh tế, hiện đại trong từng thiết
            kế. Những ý tưởng của bạn sẽ được Ant Construction hiện thực bằng sự
            tinh tế, hiện đại và tự nhiên nhất
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Featured Story */}
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-64 sm:h-80 lg:h-[320px] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/30 to-transparent text-white p-3 sm:p-4 lg:p-5">
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {featuredStory.title}
              </h3>
              <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center">
                  <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {featuredStory.date}
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {featuredStory.comments} Bình luận
                </div>
              </div>
              <p className="text-xs sm:text-sm mt-2 text-gray-200 line-clamp-2">
                {featuredStory.excerpt}
              </p>
            </div>
          </div>

          {/* Small Stories */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {smallStories.map((story, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 group rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Image + Date Badge */}
                <div className="relative w-24 h-20 sm:w-32 sm:h-24 lg:w-36 lg:h-28 flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-yellow-400 text-black font-semibold text-xs px-1 sm:px-2 py-1 text-center rounded-br-md">
                    <div>
                      {story.date.split("/")[0]}/{story.date.split("/")[1]}
                    </div>
                    <div>{story.date.split("/")[2]}</div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 pr-2 py-1">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-1">
                    {story.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    {story.comments} Bình luận
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {story.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-8 sm:mt-10">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors shadow-md text-sm sm:text-base">
            XEM THÊM TIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
