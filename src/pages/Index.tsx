import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import HeroSlider from '../components/HeroSlider';

const Index = () => {
  const observerRef = useRef<IntersectionObserver>();
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    const productScrollInterval = setInterval(() => {
      handleNextProduct();
    }, 7000);

    return () => {
      observerRef.current?.disconnect();
      if (videoRef.current) {
        videoObserver.unobserve(videoRef.current);
      }
      window.removeEventListener('resize', handleResize);
      clearInterval(productScrollInterval);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.play().catch(error => console.error("Video play failed:", error));
      } else {
        videoElement.pause();
      }
    }
  }, [isPlaying]);

  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Product ${String.fromCharCode(65 + i)}`,
    image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=320&fit=crop&q=80&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format`,
    useCases: ["Home Use", "Commercial Use", "Industrial Use"]
  }));

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => {
      const newIndex = prevIndex + 3;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? products.length - (products.length % 3 || 3) : newIndex;
    });
  };

  const handleViewMore = (productId: number) => {
    window.location.href = `/products#product-${productId}`;
  };

  const handleTalkToEngineer = () => {
    window.location.href = '/contact';
  };

  const toggleVideoPlayback = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play().catch(error => console.error("Video play failed:", error));
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ paddingTop: `${headerHeight}px` }}>
      <Header ref={headerRef} />
      <FloatingWhatsApp />
      <HeroSlider />

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gradient-navy mb-4">
              OUR TOP SELLING PRODUCTS
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular embedded solutions for every need
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentProductIndex * (100 / 3)}%)`,
                  transition: currentProductIndex === 0 ? 'none' : 'transform 500ms ease-in-out'
                }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#0E0E55]/20">
                      <div className="relative">
                        <div className="absolute top-0 left-0 right-0 p-3 flex flex-wrap gap-2 z-10">
                          {product.useCases.map((useCase) => (
                            <span
                              key={useCase}
                              className="px-3 py-1 bg-[#ff2c2c]/95 text-white text-xs rounded-full"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover zoom-hover transition-transform duration-300"
                          style={{ position: 'relative' }}
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {product.name}
                        </h3>
                        <button
                          onClick={() => handleViewMore(product.id)}
                          className="w-full bg-gradient-to-r from-[#004578] to-[#ff2c2c] text-white py-2 px-4 rounded-lg hover:from-[#1A1A77] hover:to-[#2626AA] transition-all duration-300 font-medium shadow-md"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handlePrevProduct}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextProduct}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section for Engineering Excellence */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <video
                ref={videoRef} // Assign the ref to the video element
                src="/assets/index/index.mp4" // Path to your video file
                poster="https://placehold.co/800x450/E0E0E0/333333?text=Engineering+Video+Poster" // Placeholder poster image
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                controls // Show video controls (play, pause, volume, etc.)
                loop // Loop the video
                muted // Mute by default (good practice for auto-playing videos)
                preload="auto" // Preload the video for faster playback
                aria-label="Video showcasing engineering excellence"
                // No 'autoplay' attribute here, we control it with JS
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Engineering Excellence. Unmatched Reliability.</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Arstech, we don't just build products; we craft solutions. With over 15 years of expertise
                in embedded systems, our commitment to quality, innovation, and robust engineering ensures
                every product leaving our facility is built to perform and last.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are your dedicated partners in automation and control, transforming complex challenges
                into elegant, reliable solutions that drive your success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#004578] mb-2">10000+</div>
                  <div className="text-gray-600">Products Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ff2c2c] mb-2">99.8%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section for Contact Us - Separate Block with Shades of White */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white"> {/* Gradient from very light gray to white */}
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold text-[#0E0E55] mb-6 animate-on-scroll">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed animate-on-scroll">
            Let's discuss your embedded systems needs. Our expert engineers are ready to provide tailored solutions.
          </p>
          <button
            onClick={handleTalkToEngineer}
            className="bg-gradient-to-r from-[#004578] to-[#ff2c2c] text-white py-4 px-12 rounded-lg hover:from-[#1A1A77] hover:to-[#2626AA] transition-all duration-300 font-bold shadow-xl text-xl uppercase tracking-wide transform hover:scale-105 animate-on-scroll"
          >
            Talk to an Engineer
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;