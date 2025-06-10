import { useState, forwardRef, Ref } from 'react';
import { Link } from 'react-router-dom';

const Header = forwardRef((props, ref: Ref<HTMLElement>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 shadow-md" ref={ref}>
      {/* Top Bar */}
      <div className="bg-[#254669] text-white py-2 px-4"> {/* Changed from #0E0E55 to Sub Main Color */}
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="font-medium">Connect with us:</span>
            <div className="flex space-x-3 items-center">
              <a href="https://wa.me/919494947970" className="hover:scale-110 transition-transform">
                <img src="/assets/header/whatsapp.svg" alt="WhatsApp" className="h-[22px] w-[auto]" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <img src="/assets/header/youtube.svg" alt="YouTube" className="h-[22px] w-[auto]" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <img src="/assets/header/instagram.svg" alt="Instagram" className="h-[22px] w-[auto]" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <img src="/assets/header/facebook.svg" alt="Facebook" className="h-[22px] w-[auto]" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="font-medium">Buy our products at:</span>
            <div className="flex space-x-3 items-center">
              <a href="https://www.indiamart.com" target="_blank" rel="noopener noreferrer" className="px-2 py-1">
                <img src="/assets/header/indiamart.svg" alt="Indiamart" className="h-[22px] w-[auto]" />
              </a>
              <a href="https://www.justdial.com" target="_blank" rel="noopener noreferrer" className="">
                <img src="/assets/header/justdail.svg" alt="Justdial" className="h-[22px] w-[auto]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#004578] py-4 px-4"> {/* Changed from #1A1A77 to Main Color */}
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div>
                <img src="/assets/header/ARS_TECH_w.png" alt="Facebook" className="h-[65px] w-[auto]" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-[#ff2c2c] transition-colors font-medium"> {/* Changed hover to Text Color */}
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-[#ff2c2c] transition-colors font-medium"> {/* Changed hover to Text Color */}
              Products
            </Link>
            <Link to="/projects" className="text-white hover:text-[#ff2c2c] transition-colors font-medium"> {/* Changed hover to Text Color */}
              Projects
            </Link>
            <Link to="/about" className="text-white hover:text-[#ff2c2c] transition-colors font-medium"> {/* Changed hover to Text Color */}
              About Us
            </Link>
            <Link to="/support" className="text-white hover:text-[#ff2c2c] transition-colors font-medium"> {/* Changed hover to Text Color */}
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-[#ff2c2c] text-white px-6 py-2 rounded-lg hover:opacity-95 transition-colors font-bold shadow-lg" // Changed background to Text Color, hover to opacity
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current w-6 h-0.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`bg-current w-6 h-0.5 transition-all ${isMenuOpen ? 'opacity-0' : 'mt-1'}`}></span>
                <span className={`bg-current w-6 h-0.5 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'mt-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-[#C02435] transition-colors font-medium"> {/* Changed hover to Text Color */}
                Home
              </Link>
              <Link to="/products" className="text-white hover:text-[#C02435] transition-colors font-medium"> {/* Changed hover to Text Color */}
                Products
              </Link>
              <Link to="/projects" className="text-white hover:text-[#C02435] transition-colors font-medium"> {/* Changed hover to Text Color */}
                Projects
              </Link>
              <Link to="/about" className="text-white hover:text-[#C02435] transition-colors font-medium"> {/* Changed hover to Text Color */}
                About Us
              </Link>
              <Link to="/support" className="text-white hover:text-[#C02435] transition-colors font-medium"> {/* Changed hover to Text Color */}
                Support
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
});

export default Header;