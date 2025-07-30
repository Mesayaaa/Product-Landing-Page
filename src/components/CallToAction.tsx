import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Ready to Start Your Project?
          </h2>

          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            Let's work together to bring your digital vision to life with our
            expert team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Project
            </button>

            <button className="px-12 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              Get a Quote
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fast Delivery
              </h3>
              <p className="text-white/60">
                Quick turnaround times for all projects
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Quality Guarantee
              </h3>
              <p className="text-white/60">100% satisfaction guaranteed</p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ongoing Support
              </h3>
              <p className="text-white/60">
                Continuous support and maintenance
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-white/50 mb-6">
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/30">
              <span className="text-lg font-semibold">React</span>
              <span className="text-lg font-semibold">Vue.js</span>
              <span className="text-lg font-semibold">Node.js</span>
              <span className="text-lg font-semibold">AWS</span>
              <span className="text-lg font-semibold">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
