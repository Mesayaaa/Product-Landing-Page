import React, { useState, useEffect } from "react";

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#features-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      gradient: "from-blue-600 to-purple-600",
      delay: 0,
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      gradient: "from-purple-600 to-pink-600",
      delay: 100,
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that enhance user experience.",
      gradient: "from-pink-600 to-red-600",
      delay: 200,
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      gradient: "from-green-600 to-blue-600",
      delay: 300,
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Robust security measures to protect your digital assets.",
      gradient: "from-orange-600 to-red-600",
      delay: 400,
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Data-driven insights to optimize your digital presence.",
      gradient: "from-indigo-600 to-purple-600",
      delay: 500,
    },
  ];

  return (
    <section
      id="features-section"
      className="py-20 bg-white/5 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
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
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business
            thrive in the modern world.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${
                  feature.gradient
                } rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-all duration-300 ${
                  hoveredCard === index ? "animate-bounce" : ""
                }`}
              >
                {feature.icon}
              </div>

              {/* Enhanced Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Enhanced Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
              <div
                className="absolute bottom-4 left-4 w-6 h-6 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center">
              View All Services →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
