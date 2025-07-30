import React from "react";

const TechnicalSpecs: React.FC = () => {
  const specs = [
    {
      category: "Web Development",
      items: [
        { label: "Frontend", value: "React, Vue, Angular" },
        { label: "Backend", value: "Node.js, Python, PHP" },
        { label: "Database", value: "MySQL, MongoDB, PostgreSQL" },
        { label: "Deployment", value: "AWS, Vercel, Netlify" },
      ],
    },
    {
      category: "Mobile Development",
      items: [
        { label: "iOS", value: "Swift, SwiftUI" },
        { label: "Android", value: "Kotlin, Java" },
        { label: "Cross-platform", value: "React Native, Flutter" },
        { label: "Testing", value: "Jest, Detox" },
      ],
    },
    {
      category: "Design & UX",
      items: [
        { label: "UI Design", value: "Figma, Sketch" },
        { label: "Prototyping", value: "InVision, Framer" },
        { label: "User Research", value: "Interviews, Surveys" },
        { label: "Accessibility", value: "WCAG 2.1" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { label: "Cloud Platforms", value: "AWS, Azure, GCP" },
        { label: "CI/CD", value: "GitHub Actions, Jenkins" },
        { label: "Monitoring", value: "New Relic, DataDog" },
        { label: "Security", value: "SSL, OAuth, 2FA" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Our Expertise
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Comprehensive technical capabilities across all modern development
            platforms.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/60">{item.label}</span>
                    <span className="text-white font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
            <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
            <div className="text-white/60">Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-white/60">Happy Clients</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20">
            <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-white/60">Years Experience</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
            View Our Process →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
