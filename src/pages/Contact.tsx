import { useState, useEffect, useRef } from 'react'; // Keep these imports
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [headerHeight, setHeaderHeight] = useState(0); // State to store header height
  const headerRef = useRef<HTMLElement>(null); // Ref to attach to the Header component

  // Effect to measure header height after it renders
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight); // Get the actual height
    }
  }, []); // Run once on component mount

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919494947970', '_blank');
  };

  const handlePhoneClick = () => {
    if (window.navigator.userAgent.includes('Mobile')) {
      window.location.href = 'tel:+919494947970';
    } else {
      window.open('https://wa.me/919494947970', '_blank');
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:srini.surepally@gmail.com';
  };

  return (
    <div className="min-h-screen">
      <Header ref={headerRef} /> {/* Pass the ref here */}
      <FloatingWhatsApp />

      {/* Apply dynamic padding-top based on headerHeight */}
      <div className="pb-16" style={{ paddingTop: `${headerHeight}px` }}> {/* Use dynamic height here */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-[#0E0E55] via-[#1A1A77] to-[#2626AA] p-8 rounded-2xl shadow-xl mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ORDER IN BULK OR INNOVATE WITH US?
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300">
                CONTACT US
              </h2>
            </div>
          </div>

          {/* Main Contact Section */}
          <section className="mb-16">
            {/* MODIFIED: Use flex flex-col for mobile, and then lg:grid for desktop.
                Order classes will control the mobile layout. */}
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2"> {/* <--- MODIFIED HERE */}

              {/* Contact Information & Address - NEW WRAPPER AND ORDERING */}
              <div className="flex flex-col justify-start space-y-8 order-first lg:order-none"> {/* <--- MODIFIED HERE */}
                <div
                  onClick={handleEmailClick}
                  className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0E0E55]"
                >
                  <div className="bg-[#0E0E55]/10 p-4 rounded-full">
                    <Mail className="text-[#0E0E55]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <p className="text-[#0E0E55] font-medium">srini.surepally@gmail.com</p>
                    <p className="text-gray-600 text-sm">Click to send email</p>
                  </div>
                </div>

                <div
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500"
                >
                  <div className="bg-green-100 p-4 rounded-full">
                    <MessageCircle className="text-green-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
                    <p className="text-green-600 font-medium">+91 9494947970</p>
                    <p className="text-gray-600 text-sm">Click to start chat</p>
                  </div>
                </div>

                <div
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#1A1A77]"
                >
                  <div className="bg-[#1A1A77]/10 p-4 rounded-full">
                    <Phone className="text-[#1A1A77]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className="text-[#1A1A77] font-medium">+91 9494947970</p>
                    <p className="text-gray-600 text-sm">Click to call</p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="bg-gradient-to-r from-[#0E0E55]/5 to-[#1A1A77]/5 p-6 rounded-lg border border-[#0E0E55]/20">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    11-15-230/4, Street No. 4b,<br />
                    Doctors Colony, Saroornagar,<br />
                    Hyderabad 500035, India
                  </p>
                </div>
              </div>

              {/* Map Section - ORDERING FOR MOBILE AND DESKTOP */}
              <div className="h-[400px] lg:h-auto order-last lg:order-none"> {/* <--- MODIFIED HERE */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9421522818967!2d78.50293121487667!3d17.41160358806297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba333f21b7643%3A0xb697b0d2d3e1d1c!2sDoctors%20Colony%2C%20Saroornagar%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin" // <--- REPLACE THIS ENTIRE SRC WITH YOUR COPIED SRC
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                  title="ARSTECH Location"
                ></iframe>
              </div>

            </div>

            {/* Business Hours - No change here */}
            <div className="mt-12 bg-gradient-to-r from-[#0E0E55]/10 to-[#1A1A77]/10 p-8 rounded-lg border border-[#0E0E55]/20">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Clock className="text-[#0E0E55]" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">Business Hours</h2>
              </div>
              <div className="text-center text-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div>
                    <h3 className="font-semibold text-gray-800">Monday - Friday</h3>
                    <p>9:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Saturday</h3>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-gray-800">Sunday</h3>
                    <p>Closed (Emergency support available via WhatsApp)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;