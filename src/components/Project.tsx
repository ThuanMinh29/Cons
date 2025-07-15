"use client";

import { useState } from "react";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("BIỆT THỰ");

  const filterTabs = [
    { id: "BIỆT THỰ", label: "BIỆT THỰ" },
    { id: "NHÀ PHỐ", label: "NHÀ PHỐ" },
    { id: "NỘI THẤT", label: "NỘI THẤT" },
    { id: "CHUNG CƯ", label: "CHUNG CƯ" },
  ];

  const projectImages = [
    {
      id: 1,
      src: "https://bizweb.dktcdn.net/100/321/299/files/nha-quan-9-1-1528165139-680x0.jpg?v=1531920736423",
      alt: "Modern Villa with Garden",
      category: "BIỆT THỰ",
    },
    {
      id: 2,
      src: "https://bizweb.dktcdn.net/100/321/299/files/da-dang-02-1530254934-680x0.jpg?v=1531921000410",
      alt: "Luxury Bedroom Interior",
      category: "NỘI THẤT",
    },
    {
      id: 3,
      src: "https://bizweb.dktcdn.net/100/321/299/files/nha-la-1-1530243870-680x0.jpg?v=1531921115148",
      alt: "Traditional Wooden Entrance",
      category: "NHÀ PHỐ",
    },
    {
      id: 4,
      src: "https://bizweb.dktcdn.net/100/321/299/files/da-lat-1-1530608876-680x0.jpg?v=1531921343596",
      alt: "Terrace with Flowers",
      category: "BIỆT THỰ",
    },
    {
      id: 5,
      src: "https://bizweb.dktcdn.net/100/321/299/files/33-m2-2-1530498369-680x0.jpg?v=1531921234942",
      alt: "Modern Minimalist Interior",
      category: "CHUNG CƯ",
    },
    {
      id: 6,
      src: "https://bizweb.dktcdn.net/100/321/299/files/sinhthai-2-1528860133-680x0.jpg?v=1531920861785",
      alt: "Contemporary Living Space",
      category: "CHUNG CƯ",
    },
    {
      id: 7,
      src: "https://i-giadinh.vnecdn.net/2018/06/15/v1-1529012336_680x0.jpg",
      alt: "Garden Landscape",
      category: "BIỆT THỰ",
    },
    {
      id: 8,
      src: "https://bizweb.dktcdn.net/100/321/299/files/nuoc-1-1529663637-680x0.jpg?v=1531921472534",
      alt: "Modern Living Room",
      category: "NỘI THẤT",
    },
  ];

  const filteredProjects =
    activeFilter === "BIỆT THỰ"
      ? projectImages
      : projectImages.filter((project) => project.category === activeFilter);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            DỰ ÁN CỦA CHÚNG TÔI
          </h2>
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-yellow-400 mx-2 transform rotate-45"></div>
            <div className="w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
          </div>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 px-4">
            Ant Construction tự hào là đơn vị thi công các công trình nhà phố,
            biệt thự, căn hộ cao cấp, khách sạn - resort... Chúng tôi luôn nhận
            được sự hài lòng, tin tưởng hợp tác từ những khách hàng khó tính
            nhất.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-1 sm:gap-2 bg-white rounded-lg p-1 sm:p-2 shadow-sm max-w-full overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-md font-semibold transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
                  activeFilter === tab.id
                    ? "bg-yellow-400 text-black shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
            Xem thêm dự án
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
