import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Cpu, Battery, Zap, Shield, Eye, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const features = [
    {
      icon: Cpu,
      title: "Neural Engine",
      subtitle: "M3 Pro Chip",
      description: "Revolutionary 12-core CPU with AI acceleration delivers unprecedented performance for creative workflows.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: Eye,
      title: "Liquid Retina XDR",
      subtitle: "ProMotion Display",
      description: "Stunning 16.2-inch display with 1000 nits sustained brightness and ProMotion technology.",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Unified Memory",
      subtitle: "Lightning Performance",
      description: "Up to 128GB of unified memory with 400GB/s memory bandwidth for seamless multitasking.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      icon: Battery,
      title: "All-Day Power",
      subtitle: "22-Hour Battery",
      description: "Incredible battery life that keeps up with your most demanding creative projects all day long.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-orange-500 to-red-500",
      delay: 0.6
    },
    {
      icon: Shield,
      title: "Secure Enclave",
      subtitle: "Advanced Security",
      description: "Hardware-level security with Secure Enclave and Touch ID for ultimate data protection.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.8
    },
    {
      icon: Layers,
      title: "Pro Workflows",
      subtitle: "Creative Power",
      description: "Optimized for professional applications with hardware-accelerated video encoding and rendering.",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
      gradient: "from-teal-500 to-blue-500",
      delay: 1.0
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className={`w-${Math.floor(Math.random() * 20) + 10} h-${Math.floor(Math.random() * 20) + 10} bg-gradient-to-r from-purple-500/20 to-pink-500/20 ${Math.random() > 0.5 ? 'rounded-full' : 'rounded-lg rotate-45'}`} />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <motion.span
              className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              REVOLUTIONARY
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              FEATURES
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Every component engineered to perfection. Every feature designed to push the boundaries of what's possible.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: feature.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5
                }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden">
                  {/* Animated Background Gradient */}
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
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0] 
                    }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 relative`}
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

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: feature.delay + 0.2 }}
                    >
                      <h4 className="text-sm font-semibold text-purple-300 mb-2 tracking-wide uppercase">
                        {feature.subtitle}
                      </h4>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                    </motion.div>

                    {/* Feature Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: feature.delay + 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-2xl mb-6"
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-32 object-cover"
                        loading="lazy"
                      />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                      />
                    </motion.div>

                    {/* Learn More Link */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text font-semibold hover:opacity-80 transition-opacity flex items-center group`}
                    >
                      Explore Feature
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2"
                      >
                        →
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Floating Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-40`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Performance Stats with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "22", suffix: "hrs", label: "Battery Life", color: "from-green-400 to-emerald-500" },
            { value: "3.7", suffix: "x", label: "Faster Performance", color: "from-blue-400 to-cyan-500" },
            { value: "400", suffix: "GB/s", label: "Memory Bandwidth", color: "from-purple-400 to-pink-500" },
            { value: "8K", suffix: "", label: "Video Editing", color: "from-orange-400 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.4 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 10
              }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 group cursor-pointer"
            >
              <motion.div
                className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {stat.value}
                <span className="text-3xl">{stat.suffix}</span>
              </motion.div>
              <div className="text-white/80 font-medium group-hover:text-white transition-colors">
                {stat.label}
              </div>
              
              {/* Animated Underline */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mt-3`}
                initial={{ width: 0 }}
                animate={isInView ? { width: '60%' } : {}}
                transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;