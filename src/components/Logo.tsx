const Logo = () => {
  const partnerLogos = [
    "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_4.jpg?1705892750011",
    "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_5.jpg?1705892750011",
    "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_1.jpg?1705892750011",
    "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_2.jpg?1705892750011",
    "https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/partner_3.jpg?1705892750011",
  ];

  return (
    <div className="bg-yellow-400 py-4 sm:py-6">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`partner-${index + 1}`}
            className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
