import { MapPin, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top banner - you can customize this */}
      <div className="w-full bg-purple-800 text-white text-xs sm:text-sm py-2">
        <div className="container mx-auto px-4">
          <p className="text-center">Chào mừng đến với ANT Construction</p>
        </div>
      </div>

      {/* Main header */}
      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img
                src="https://bizweb.dktcdn.net/100/321/299/themes/670850/assets/logo.png?1705892750011"
                alt="ANT Construction Logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </div>

            {/* Search Bar - Hidden on mobile, shown on medium+ */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
              <div className="relative flex w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="flex-1 h-10 lg:h-12 px-3 lg:px-4 border-2 border-gray-200 rounded-l-lg rounded-r-none focus:border-yellow-400 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-500 text-sm lg:text-base"
                />
                <button className="h-10 lg:h-12 px-4 lg:px-6 bg-yellow-400 hover:bg-yellow-500 text-black rounded-l-none rounded-r-lg border-2 border-yellow-400 transition-colors duration-200 flex items-center justify-center">
                  <Search className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Search button for mobile */}
              <button className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-yellow-600 rounded-md hover:bg-gray-50 transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>

              {/* Location button - Hidden on mobile */}
              <button className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-yellow-600 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
              </button>

              {/* Shopping cart */}
              <button className="flex items-center gap-1 sm:gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-2 sm:px-3 lg:px-4 py-2 h-10 sm:h-12 rounded-lg font-semibold transition-colors duration-200 text-xs sm:text-sm">
                <div className="relative">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-medium">
                    0
                  </span>
                </div>
                <span className="hidden sm:inline">GIỎ HÀNG</span>
              </button>
            </div>
          </div>

          {/* Mobile search bar - shown below main header on small screens */}
          <div className="md:hidden mt-3 pt-3 border-t border-gray-100">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="flex-1 h-10 px-3 border-2 border-gray-200 rounded-l-lg rounded-r-none focus:border-yellow-400 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-500 text-sm"
              />
              <button className="h-10 px-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-l-none rounded-r-lg border-2 border-yellow-400 transition-colors duration-200 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
