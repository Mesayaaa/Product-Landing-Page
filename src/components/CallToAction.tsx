import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingBag, Heart, Sparkles, Zap, Star } from 'lucide-react';

const CallToAction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 120 - 10}%`,
              top: `${Math.random() * 120 - 10}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Radial Gradient */}
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-pink-600/20 to-transparent"
        />

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 text-white/90 text-lg font-medium group cursor-pointer"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="mr-4"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <span className="mr-3">Limited Time Offer</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
            style={{ y }}
          >
            <motion.span
              className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              READY TO
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              TRANSFORM?
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the ultimate in portable performance. MacBook Pro with M3 Pro 
            delivers revolutionary power for your most demanding creative workflows.
          </motion.p>

          {/* Animated Pricing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              className="text-7xl font-black text-white mb-4"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              From $2,499
            </motion.div>
            <div className="text-white/60 text-xl">
              Or $208.25/mo. for 12 mo.* 
              <motion.span
                className="inline-block ml-2 text-green-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                0% APR Available
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons with Advanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-16 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-full overflow-hidden group shadow-2xl"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            
            <span className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Zap className="h-6 w-6" />
              </motion.div>
              Buy Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-3"
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-16 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-full backdrop-blur-xl hover:border-white/50 transition-all duration-300 group overflow-hidden"
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <span className="relative flex items-center justify-center">
              <Heart className="mr-3 h-6 w-6" />
              Add to Wishlist
            </span>
          </motion.button>
        </motion.div>

        {/* Features Summary with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
        >
          {[
            { 
              icon: Zap, 
              title: "M3 Pro Performance", 
              subtitle: "Up to 3.7x faster CPU",
              gradient: "from-blue-400 to-cyan-500"
            },
            { 
              icon: ShoppingBag, 
              title: "22-Hour Battery", 
              subtitle: "All-day creative power",
              gradient: "from-green-400 to-emerald-500"
            },
            { 
              icon: Star, 
              title: "Free Shipping", 
              subtitle: "Fast & secure delivery",
              gradient: "from-purple-400 to-pink-500"
            }
          ].map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.5 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 10
                }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 group cursor-pointer relative overflow-hidden"
              >
                {/* Background Animation */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon with Floating Animation */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 relative`}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <FeatureIcon className="h-8 w-8 text-white" />
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-30`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <div className="relative z-10">
                  <div className="text-white font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    {feature.title}
                  </div>
                  <div className="text-white/60 group-hover:text-white/80 transition-colors">
                    {feature.subtitle}
                  </div>
                </div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-40`}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${15 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legal Text with Fade Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-sm max-w-3xl mx-auto leading-relaxed"
        >
          *Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) 
          as your payment type at checkout at Apple, and is subject to credit approval and credit limit. 
          Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card's variable APR.
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;