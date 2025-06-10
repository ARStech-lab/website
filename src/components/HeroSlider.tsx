import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const isMobile = () => window.innerWidth < 768;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [useMobileImage, setUseMobileImage] = useState(isMobile());

  const slides = [ 
    {
      id: 1,
      image: "/assets/hero/1.webp",
      link: "/products"
    },
    {
      id: 2,
      image: "/assets/hero/2.webp",
      link: "/products#water-management"
    },
    {
      id: 3,
      image: "/assets/hero/3.webp",
      link: "/products#power-management"
    },
    {
      id: 4,
      image: "/assets/hero/4.webp",
      link: "/products#timer-controllers"
    },
    {
      id: 5,
      image: "/assets/hero/5.webp",
      link: "/products#network-based"
    },
    {
      id: 6,
      image: "/assets/hero/6.webp",
      link: "/products#custom"
    },
    {
      id: 7,
      image: "/assets/hero/7.webp",
      link: "/products#industrial"
    },
    {
      id: 8,
      image: "/assets/hero/8.webp",
      link: "/products#smart-home"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[20vh] sm:h-[70vh] md:h-[80vh] lg:h-[75vh] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div 
              className="slider-image h-full w-full cursor-pointer"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={() => window.location.href = slide.link}
            >
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
      >
        <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
      >
        <ArrowRight size={20} className="sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};

export default HeroSlider;