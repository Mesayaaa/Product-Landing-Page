import React, { useState, useEffect } from "react";

const CallToAction: React.FC = () => {
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

    const element = document.querySelector("#cta-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround times for all projects",
      color: "blue",
      delay: 0,
    },
    {
      icon: "🛡️",
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed",
      color: "purple",
      delay: 100,
    },
    {
      icon: "💬",
      title: "Ongoing Support",
      description: "Continuous support and maintenance",
      color: "gradient",
      delay: 200,
    },
  ];

  const technologies = [
    { name: "React", delay: 0 },
    { name: "Vue.js", delay: 100 },
    { name: "Node.js", delay: 200 },
    { name: "AWS", delay: 300 },
    { name: "Docker", delay: 400 },
  ];

  return (
    <section
      id="cta-section"
      className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Main Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white hover:text-blue-400 transition-colors duration-500 cursor-pointer">
              Ready to Start Your Project?
            </h2>

            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
              Let's work together to bring your digital vision to life with our
              expert team.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <span className="relative z-10 flex items-center">
                Start Your Project →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="group px-12 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Enhanced Features Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer"
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div
                  className={`w-16 h-16 ${
                    feature.color === "gradient"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600"
                      : `bg-${feature.color}-600`
                  } rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}
                >
                  <span className="text-2xl group-hover:animate-bounce">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                <div
                  className="absolute bottom-4 left-4 w-4 h-4 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            ))}
          </div>

          {/* Enhanced Trust Indicators */}
          <div
            className={`border-t border-white/10 pt-12 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-white/50 mb-6 hover:text-white/70 transition-colors duration-300">
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="text-lg font-semibold text-white/30 hover:text-white/60 transition-all duration-300 cursor-pointer hover:scale-110"
                  style={{ transitionDelay: `${tech.delay}ms` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
