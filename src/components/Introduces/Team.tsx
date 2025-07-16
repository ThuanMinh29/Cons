export default function Team() {
  const teamMembers = [
    {
      name: "Rabie Elkheir",
      role: "Kỹ sư",
      description:
        "Chúng tôi sẽ lập kế hoạch, thiết kế, xây dựng và duy trì dự án của bạn.",
      image: "https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg",
    },
    {
      name: "Rabie Elkheir",
      role: "Thiết kế",
      description:
        "Chúng tôi sẽ lập kế hoạch, thiết kế, xây dựng và duy trì dự án của bạn.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "Rabie Elkheir",
      role: "Founder and CEO",
      description:
        "Chúng tôi sẽ lập kế hoạch, thiết kế, xây dựng và duy trì dự án của bạn.",
      image:
        "https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg",
    },
    {
      name: "Rabie Elkheir",
      role: "Kiến trúc sư",
      description:
        "Chúng tôi sẽ lập kế hoạch, thiết kế, xây dựng và duy trì dự án của bạn.",
      image:
        "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/our_team_image_4.png?1705892750011",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-12">
      {/* Tiêu đề responsive */}
      <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-16">
        <div className="max-w-4xl mb-8 sm:mb-12 text-left">
          <p className="text-base sm:text-lg text-gray-600">
            Chào mừng bạn đến với Ant Construction
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            Đội ngũ của chúng tôi
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mt-2">
            Chúng tôi sẽ lập kế hoạch, thiết kế, xây dựng và duy trì dự án của
            bạn.
          </p>
        </div>

        {/* Grid responsive - 1 cột mobile, 2 cột tablet, 4 cột desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="w-full h-48 sm:h-56 lg:h-72 overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2">
                {member.role}
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
