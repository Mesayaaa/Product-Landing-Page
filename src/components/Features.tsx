import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that enhance user experience.",
      gradient: "from-pink-600 to-red-600",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      gradient: "from-green-600 to-blue-600",
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Robust security measures to protect your digital assets.",
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Data-driven insights to optimize your digital presence.",
      gradient: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business
            thrive in the modern world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 text-2xl`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
            View All Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
