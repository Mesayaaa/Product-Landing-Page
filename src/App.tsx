import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGallery from "./components/ProductGallery";
import TechnicalSpecs from "./components/TechnicalSpecs";
import CallToAction from "./components/CallToAction";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    // Performance optimization: preload critical images
    const criticalImages = [
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Handle scroll for navigation background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Vooban
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/70 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <button className="md:hidden text-white hover:text-blue-400 transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Product Gallery */}
      <ProductGallery />

      {/* Technical Specifications */}
      <TechnicalSpecs />

      {/* Call to Action */}
      <CallToAction />

      {/* Enhanced Footer */}
      <footer className="bg-black/60 text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Vooban</h3>
              <p className="text-white/60 leading-relaxed">
                Creating exceptional digital experiences that drive business
                growth and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-white/60">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Web Development
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Mobile Apps
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  UI/UX Design
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Cloud Solutions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Our Team
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Careers
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-white/60 hover:text-white transition-colors duration-300">
                      📱
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">
              &copy; 2025 Vooban. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
