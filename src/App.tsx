import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGallery from "./components/ProductGallery";
import TechnicalSpecs from "./components/TechnicalSpecs";
import CallToAction from "./components/CallToAction";

function App() {
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

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-md border-b border-white/5 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Vooban</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
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

      {/* Footer */}
      <footer className="bg-black/60 text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60">&copy; 2025 Vooban. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
