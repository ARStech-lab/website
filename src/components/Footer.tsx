import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#004578] text-white"> {/* Changed from bg-gray-900 to Sub Main Color */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/assets/header/ARS_TECH_w.png"
              alt="ARSTECH Logo" 
              className="h-16"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Innovative Embedded Solutions for a Smarter Future
            </p>
            <p className="text-gray-400 text-xs">
              Engineering Excellence Since 2012
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-300 hover:text-[#ff2c2c] transition-colors text-sm"> {/* Changed hover to Text Hover Color */}
                Products
              </Link>
              <Link to="/projects" className="block text-gray-300 hover:text-[#ff2c2c] transition-colors text-sm"> {/* Changed hover to Text Hover Color */}
                Projects
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#ff2c2c] transition-colors text-sm"> {/* Changed hover to Text Hover Color */}
                About Us
              </Link>
              <Link to="/support" className="block text-gray-300 hover:text-[#ff2c2c] transition-colors text-sm"> {/* Changed hover to Text Hover Color */}
                Support
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Location</h4>
            <div className="flex items-start space-x-2">
              <MapPin size={16} className="text-[#C02435] mt-1 flex-shrink-0" /> {/* Changed to Text Hover Color */}
              <p className="text-gray-300 text-sm leading-relaxed">
                11-15-230/4, Street No. 4b,<br />
                Doctors Colony, Saroornagar,<br />
                Hyderabad 500035, India
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/919494947970" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#C02435] transition-colors text-sm" // Changed hover to Text Hover Color
              >
                <MessageCircle size={16} />
                <span>WhatsApp Chat</span>
              </a>
              <a 
                href="tel:+919494947970" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#C02435] transition-colors text-sm" // Changed hover to Text Hover Color
              >
                <Phone size={16} />
                <span>+91 9494947970</span>
              </a>
              <a 
                href="mailto:srini.surepally@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#C02435] transition-colors text-sm" // Changed hover to Text Hover Color
              >
                <Mail size={16} />
                <span>srini.surepally@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ARSTECH. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">YOU IMAGINE WE CREATE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;