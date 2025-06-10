import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
// import { useRouter } from 'next/router'; // REMOVED

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<string[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  // const router = useRouter(); // REMOVED

  const categories = ["Water Management", "Power Management", "Timer Controllers", "Network Based"];
  const applications = ["Home", "Apartments", "Commercial Space", "Industrial Use"];

  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Product ${String.fromCharCode(65 + i)}`,
    category: categories[i % categories.length],
    applications: [applications[i % applications.length]],
    // Set both the display image and the lightbox info image paths
    image: `/assets/product-img/${i + 1}.webp`,
    infoImage: `/assets/product-img/${i + 1}.webp`
  }));

  // This now reads the URL hash to scroll to the product.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const productElement = document.getElementById(id);

      if (productElement) {
        const headerOffset = 100; // Adjust this value to match your sticky header's height
        const elementPosition = productElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleApplicationChange = (application: string) => {
    setSelectedApplication(prev =>
      prev.includes(application)
        ? prev.filter(a => a !== application)
        : [...prev, application]
    );
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory.length === 0 || selectedCategory.includes(product.category);
    const applicationMatch = selectedApplication.length === 0 ||
      product.applications.some(app => selectedApplication.includes(app));
    return categoryMatch && applicationMatch;
  });

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleOrderClick = () => {
    // This functionality remains the same (opens WhatsApp)
    window.open('https://wa.me/919494947970', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />

      <div className="pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Support Center Heading (with gradient transition) */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              <span className="bg-gradient-to-r from-primary to-[#ff2c2c] bg-clip-text text-transparent">
                OUR PRODUCTS
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our range of innovative products designed to meet your needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-card p-6 rounded-lg shadow-lg sticky top-32">
                <h3 className="text-xl font-semibold mb-6">Filters</h3>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedCategory.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Application</h4>
                  <div className="space-y-2">
                    {applications.map(application => (
                      <label key={application} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedApplication.includes(application)}
                          onChange={() => handleApplicationChange(application)}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{application}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    id={`product-${product.id}`}
                    key={product.id}
                    className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-mt-28"
                  >
                    {/* Image on card opens infoImage in lightbox */}
                    <div
                      className="relative overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(product.infoImage)}
                    >
                      <img
                        src={product.image} // This is the image shown on the product card
                        alt={product.name}
                        className="w-full h-64 object-cover zoom-hover transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">
                        {product.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.applications.map(app => (
                          <span
                            key={app}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {/* Order for Price button (opens WhatsApp) */}
                        <button
                          onClick={handleOrderClick}
                          className="block w-full
                                     bg-gradient-to-r from-[#004578] to-[#ff2c2c]
                                     text-white py-2 px-4 rounded-lg
                                     hover:from-[#ff2c2c] hover:to-[#004578]
                                     transition-all duration-300 font-medium text-center shadow-md"
                        >
                          Order for Price
                        </button>
                        {/* More Details button (opens lightbox with infoImage) */}
                        <button
                          onClick={() => openLightbox(product.infoImage)}
                          className="block w-full
                                     bg-gradient-to-r from-[#ff2c2c] to-[#004578]
                                     text-white py-2 px-4 rounded-lg
                                     hover:from-[#1A1A77] hover:to-[#ff2c2c]
                                     transition-all duration-300 font-medium text-center shadow-md"
                        >
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt="Product Detail"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Products;