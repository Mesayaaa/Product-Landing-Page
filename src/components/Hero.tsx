import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Enhanced Badge */}
        <div
          className={`inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mr-2 animate-bounce">🚀</span>
          <span className="mr-2">Innovative Solutions</span>
          <span className="animate-pulse">→</span>
        </div>

        {/* Enhanced Main Headline */}
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
            <span className="block text-white hover:text-blue-400 transition-colors duration-500 cursor-pointer">
              DIGITAL
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-blue-400 transition-all duration-500 cursor-pointer">
              EXCELLENCE
            </span>
          </h1>

          {/* Animated Underline */}
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto w-48 animate-pulse" />
        </div>

        {/* Enhanced Subtitle */}
        <p
          className={`text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We create exceptional digital experiences that drive business growth.
          <br />
          <span className="text-blue-300 hover:text-purple-300 transition-colors duration-300">
            Where innovation meets results.
          </span>
        </p>

        {/* Enhanced CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <span className="flex items-center justify-center">
              Get Started →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-12 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Enhanced Hero Image */}
        <div
          className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative transform-gpu group">
            <img
              src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Digital Excellence"
              className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />

            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm animate-bounce" />
            <div
              className="absolute bottom-4 left-4 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-8 h-12 border border-white/20 rounded-full flex justify-center relative group cursor-pointer">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce" />
            <div className="absolute inset-0 border border-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
