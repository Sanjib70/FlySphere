import { ChevronDown, Menu, Plane, Search, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar({user}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  
  // Custom colors to match the original image
  const bgColor = 'rgb(21, 27, 34)'; // Dark navy color from the original image
  const hoverColor = 'rgb(59, 130, 246)'; // Blue color for hover effects

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Flights',
      link: '#',
      dropdown: [
        { label: 'Check Flight Status', link: '/SearchFlight' },
        { label: 'Book Ticket', link: '/FlightBooking' },
        { label: 'Manage Booking', link: '/bookingDetails' },
      ]
    },
    {
      label: 'Destinations',
      link: '/Destinations',
    },
    {
      label: 'Deals',
      link: '/Services',
    },
    {
      label: 'Services',
      link: '#',
      dropdown: [
        { label: 'Flight Insurance', link: '/insurance' },
        { label: 'Airport Transfer', link: '/transfer' },
        { label: 'Special Assistance', link: '/assistance' },
      ]
    },
    {
      label: 'About',
      link: '/about',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-300" 
      style={{ 
        backgroundColor: isScrolled ? bgColor : bgColor,
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button (moved to left) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-blue-400 p-2 rounded-full hover:bg-gray-800 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Plane className="h-9 w-9 text-blue-400 rotate-45" />
            <span className="font-bold text-2xl text-white ml-2">FlySphere</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center px-3 py-2 text-lg font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded transition-all duration-200"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {dropdownOpen === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            className="block px-4 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="px-3 py-2 text-lg font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded transition-all duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop and Mobile User Section (right-aligned) */}
          <div className="flex items-center space-x-4">
            {/* Search for Desktop */}
            <div className="hidden md:block relative">
              {isSearchOpen ? (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search flights..."
                    className="w-64 px-4 py-2 text-base bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={toggleSearch}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={toggleSearch}
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Search for Mobile */}
            <div className="md:hidden">
              <button 
                onClick={toggleSearch}
                className="text-gray-300 hover:text-white p-2"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
            
            {/* Login Button (always on right) */}
            {user ? (
              <div className="inline-flex items-center px-5 py-2 text-base font-medium rounded-full text-white bg-green-600">
                <User className="h-4 w-4 mr-2" />
            {user}
            </div>
            ) : (
            <a
              href='/login'
              className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 hover:shadow-md transition-all duration-200"
            >
            <User className="h-4 w-4 mr-1" />
              Login
            </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden border-t border-gray-700 p-4 bg-gray-800">
          <div className="relative">
            <input
              type="text"
              placeholder="Search flights..."
              className="w-full px-4 py-2 text-base bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <Search className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-700 bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-all duration-200"
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 h-4 w-4 transform ${dropdownOpen === index ? 'rotate-180' : ''} transition-transform duration-200`} />
                    </button>
                    {dropdownOpen === index && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-all duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              {user ? (
  <div className="inline-flex items-center px-5 py-2 text-base font-medium rounded-full text-white bg-green-600">
    <User className="h-4 w-4 mr-2" />
    {user}
  </div>
) : (
  <a
    href='/login'
    className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 hover:shadow-md transition-all duration-200"
  >
    <User className="h-4 w-4 mr-1" />
    Login
  </a>
)}

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}