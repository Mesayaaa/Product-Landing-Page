import React, { useState, useEffect } from "react";

const TechnicalSpecs: React.FC = () => {
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

    const element = document.querySelector("#specs-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const specs = [
    {
      category: "Web Development",
      items: [
        { label: "Frontend", value: "React, Vue, Angular" },
        { label: "Backend", value: "Node.js, Python, PHP" },
        { label: "Database", value: "MySQL, MongoDB, PostgreSQL" },
        { label: "Deployment", value: "AWS, Vercel, Netlify" },
      ],
      delay: 0,
    },
    {
      category: "Mobile Development",
      items: [
        { label: "iOS", value: "Swift, SwiftUI" },
        { label: "Android", value: "Kotlin, Java" },
        { label: "Cross-platform", value: "React Native, Flutter" },
        { label: "Testing", value: "Jest, Detox" },
      ],
      delay: 100,
    },
    {
      category: "Design & UX",
      items: [
        { label: "UI Design", value: "Figma, Sketch" },
        { label: "Prototyping", value: "InVision, Framer" },
        { label: "User Research", value: "Interviews, Surveys" },
        { label: "Accessibility", value: "WCAG 2.1" },
      ],
      delay: 200,
    },
    {
      category: "Cloud & DevOps",
      items: [
        { label: "Cloud Platforms", value: "AWS, Azure, GCP" },
        { label: "CI/CD", value: "GitHub Actions, Jenkins" },
        { label: "Monitoring", value: "New Relic, DataDog" },
        { label: "Security", value: "SSL, OAuth, 2FA" },
      ],
      delay: 300,
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Completed", color: "blue", delay: 400 },
    { value: "50+", label: "Happy Clients", color: "purple", delay: 500 },
    { value: "5+", label: "Years Experience", color: "green", delay: 600 },
  ];

  return (
    <section
      id="specs-section"
      className="py-20 bg-white/5 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
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
            Our Expertise
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Comprehensive technical capabilities across all modern development
            platforms.
          </p>
        </div>

        {/* Enhanced Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((category, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${category.delay}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center group/item"
                  >
                    <span className="text-white/60 group-hover/item:text-white/80 transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="text-white font-semibold group-hover/item:text-blue-300 transition-colors duration-300">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

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

        {/* Enhanced Performance Highlights */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-gradient-to-br from-${stat.color}-500/10 to-purple-500/10 rounded-2xl border border-${stat.color}-500/20 hover:border-${stat.color}-500/40 transition-all duration-300 hover:scale-105 group cursor-pointer`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div
                className={`text-4xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <div className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {stat.label}
              </div>

              {/* Floating Elements */}
              <div
                className={`absolute top-4 right-4 w-6 h-6 bg-${stat.color}-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}
              />
              <div
                className={`absolute bottom-4 left-4 w-4 h-4 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center">
              View Our Process →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
