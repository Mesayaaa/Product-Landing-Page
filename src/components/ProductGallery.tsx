import React, { useState } from "react";

const ProductGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Web Development",
      title: "Modern Web Solutions",
    },
    {
      src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Mobile Development",
      title: "Mobile App Development",
    },
    {
      src: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cloud Solutions",
      title: "Cloud Infrastructure",
    },
    {
      src: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "UI/UX Design",
      title: "Beautiful Interfaces",
    },
  ];

  return (
    <section className="py-20 bg-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Our Work
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Explore our portfolio of successful digital projects and solutions.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl" />
            </div>

            {/* Image Title */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">
                {images[activeImage].title}
              </h3>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">
              Featured Projects
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                    activeImage === index
                      ? "ring-2 ring-blue-500 scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      activeImage === index
                        ? "bg-blue-500/20"
                        : "bg-black/20 hover:bg-black/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Project Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">
                Project Highlights
              </h4>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Modern web technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Responsive design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Performance optimized
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  SEO friendly
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
            View Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
