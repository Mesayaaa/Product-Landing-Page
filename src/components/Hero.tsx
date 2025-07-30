import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8">
          <span className="mr-2">🚀</span>
          <span className="mr-2">Innovative Solutions</span>
          <span>→</span>
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
            <span className="block text-white">DIGITAL</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EXCELLENCE
            </span>
          </h1>

          {/* Underline */}
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto w-48" />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          We create exceptional digital experiences that drive business growth.
          <br />
          <span className="text-blue-300">Where innovation meets results.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button className="relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300">
            <span className="flex items-center justify-center">
              Get Started →
            </span>
          </button>

          <button className="px-12 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative transform-gpu">
            <img
              src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Digital Excellence"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border border-white/20 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
