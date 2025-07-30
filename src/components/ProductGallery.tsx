import React, { useState, useEffect } from "react";

const ProductGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#gallery-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Web Development",
      title: "Modern Web Solutions",
      description:
        "Custom web applications built with cutting-edge technologies",
    },
    {
      src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Mobile Development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      src: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cloud Solutions",
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
    },
    {
      src: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "UI/UX Design",
      title: "Beautiful Interfaces",
      description: "Intuitive and engaging user experiences",
    },
  ];

  return (
    <section
      id="gallery-section"
      className="py-20 bg-white/5 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white hover:text-blue-400 transition-colors duration-500 cursor-pointer">
            Our Work
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Explore our portfolio of successful digital projects and solutions.
          </p>
        </div>

        {/* Enhanced Main Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Main Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
            </div>

            {/* Enhanced Image Title */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {images[activeImage].title}
                </h3>
                <p className="text-white/70 text-sm">
                  {images[activeImage].description}
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm animate-bounce" />
            <div
              className="absolute bottom-20 left-4 w-8 h-8 bg-purple-500/20 rounded-full backdrop-blur-sm animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Enhanced Thumbnail Navigation */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-8 hover:text-blue-300 transition-colors duration-300">
              Featured Projects
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-500 group ${
                    activeImage === index
                      ? "ring-2 ring-blue-500 scale-105 shadow-lg"
                      : "hover:scale-105 hover:shadow-lg"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      activeImage === index
                        ? "bg-blue-500/30 backdrop-blur-sm"
                        : "bg-black/20 group-hover:bg-black/40"
                    }`}
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-white text-xs font-medium truncate">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Enhanced Project Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                Project Highlights
              </h4>
              <ul className="space-y-3 text-white/60">
                {[
                  { color: "bg-blue-500", text: "Modern web technologies" },
                  { color: "bg-purple-500", text: "Responsive design" },
                  { color: "bg-green-500", text: "Performance optimized" },
                  { color: "bg-orange-500", text: "SEO friendly" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center group/item">
                    <span
                      className={`w-2 h-2 ${item.color} rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300`}
                    ></span>
                    <span className="group-hover/item:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center">
              View Portfolio →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
