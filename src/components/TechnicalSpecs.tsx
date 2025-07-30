import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Monitor, Cpu, HardDrive, Wifi, Battery, Camera, Zap, Shield, Layers, Gauge } from 'lucide-react';

const TechnicalSpecs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const specs = [
    {
      category: "Display",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { label: "Size", value: "16.2-inch Liquid Retina XDR", highlight: true },
        { label: "Resolution", value: "3456 × 2234 pixels at 254 ppi", highlight: false },
        { label: "Technology", value: "Mini-LED backlight with 10,000+ zones", highlight: true },
        { label: "Brightness", value: "1000 nits sustained, 1600 nits peak HDR", highlight: false },
        { label: "Color Gamut", value: "P3 wide color, True Tone technology", highlight: false },
        { label: "Refresh Rate", value: "ProMotion up to 120Hz adaptive", highlight: true }
      ]
    },
    {
      category: "Performance",
      icon: Cpu,
      gradient: "from-purple-500 to-pink-500",
      items: [
        { label: "Chip", value: "Apple M3 Pro with Neural Engine", highlight: true },
        { label: "CPU", value: "12-core (6P + 6E) up to 4.05GHz", highlight: false },
        { label: "GPU", value: "18-core with hardware ray tracing", highlight: true },
        { label: "Neural Engine", value: "16-core for AI/ML acceleration", highlight: false },
        { label: "Memory", value: "Up to 128GB unified memory", highlight: true },
        { label: "Bandwidth", value: "400GB/s memory bandwidth", highlight: false }
      ]
    },
    {
      category: "Storage",
      icon: HardDrive,
      gradient: "from-green-500 to-emerald-500",
      items: [
        { label: "Capacity", value: "512GB to 8TB SSD options", highlight: true },
        { label: "Performance", value: "Up to 7.4GB/s sequential read", highlight: false },
        { label: "Technology", value: "PCIe 4.0 NVMe with encryption", highlight: true },
        { label: "Controller", value: "Custom Apple storage controller", highlight: false },
        { label: "Reliability", value: "Advanced wear leveling & ECC", highlight: false },
        { label: "Security", value: "Hardware-accelerated AES-256", highlight: true }
      ]
    },
    {
      category: "Connectivity",
      icon: Wifi,
      gradient: "from-orange-500 to-red-500",
      items: [
        { label: "Wi-Fi", value: "Wi-Fi 6E (802.11ax) up to 2.4Gbps", highlight: true },
        { label: "Bluetooth", value: "Bluetooth 5.3 with LE Audio", highlight: false },
        { label: "Thunderbolt", value: "3× Thunderbolt 4 (USB-C)", highlight: true },
        { label: "HDMI", value: "HDMI 2.1 with 8K@60Hz support", highlight: false },
        { label: "Card Reader", value: "SDXC UHS-II up to 312MB/s", highlight: false },
        { label: "Audio", value: "3.5mm headphone jack with impedance detection", highlight: true }
      ]
    },
    {
      category: "Power",
      icon: Battery,
      gradient: "from-indigo-500 to-purple-500",
      items: [
        { label: "Battery", value: "100Wh lithium-polymer", highlight: true },
        { label: "Video Playback", value: "Up to 22 hours wireless", highlight: false },
        { label: "Audio Playback", value: "Up to 30 hours", highlight: false },
        { label: "Charging", value: "140W USB-C Power Adapter", highlight: true },
        { label: "Fast Charge", value: "50% in 30 minutes", highlight: false },
        { label: "MagSafe", value: "MagSafe 3 magnetic charging", highlight: true }
      ]
    },
    {
      category: "Audio & Camera",
      icon: Camera,
      gradient: "from-teal-500 to-blue-500",
      items: [
        { label: "Camera", value: "1080p FaceTime HD with Center Stage", highlight: true },
        { label: "Microphones", value: "Studio-quality 3-mic array", highlight: false },
        { label: "Speakers", value: "6-speaker system with woofers", highlight: true },
        { label: "Spatial Audio", value: "Dolby Atmos playback support", highlight: false },
        { label: "Noise Cancellation", value: "Advanced beamforming", highlight: false },
        { label: "Audio Quality", value: "Wide stereo sound with deep bass", highlight: true }
      ]
    }
  ];

  const performanceMetrics = [
    { 
      metric: "CPU Performance", 
      value: "3.7x", 
      description: "Faster than Intel-based MacBook Pro",
      icon: Gauge,
      color: "from-blue-400 to-cyan-500"
    },
    { 
      metric: "GPU Performance", 
      value: "2.5x", 
      description: "Graphics rendering acceleration",
      icon: Zap,
      color: "from-purple-400 to-pink-500"
    },
    { 
      metric: "ML Performance", 
      value: "5.8x", 
      description: "Machine learning tasks",
      icon: Shield,
      color: "from-green-400 to-emerald-500"
    },
    { 
      metric: "Energy Efficiency", 
      value: "2x", 
      description: "Better performance per watt",
      icon: Layers,
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        {/* Tech Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '400px 400px, 400px 400px, 40px 40px, 40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px, 0px 0px, 0px 0px, 0px 0px', '400px 400px, -400px -400px, 40px 40px, 40px 40px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          style={{ rotateX }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mx-auto" />
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
              TECHNICAL
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              EXCELLENCE
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Every component meticulously engineered for maximum performance, efficiency, and innovation.
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {specs.map((spec, index) => {
            const SpecIcon = spec.icon;
            return (
              <motion.button
                key={spec.category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${spec.gradient} border-white/30 text-white shadow-lg`
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <SpecIcon className="h-5 w-5" />
                <span className="font-medium">{spec.category}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Specs Display */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24"
        >
          {/* Active Category Details */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`w-16 h-16 bg-gradient-to-r ${specs[activeCategory].gradient} rounded-2xl flex items-center justify-center`}
              >
                {React.createElement(specs[activeCategory].icon, { className: "h-8 w-8 text-white" })}
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-white">{specs[activeCategory].category}</h3>
                <p className="text-white/60">Advanced specifications</p>
              </div>
            </div>

            <div className="space-y-4">
              {specs[activeCategory].items.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                    item.highlight
                      ? `bg-gradient-to-r ${specs[activeCategory].gradient} bg-opacity-10 border-white/20`
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-white/80 font-medium text-sm">
                      {item.label}
                    </span>
                    <span className={`font-semibold text-sm text-right max-w-[60%] ${
                      item.highlight ? 'text-white' : 'text-white/90'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                  
                  {item.highlight && (
                    <motion.div
                      className={`h-0.5 bg-gradient-to-r ${specs[activeCategory].gradient} rounded-full mt-2`}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Representation */}
          <motion.div
            key={`visual-${activeCategory}`}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="relative h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              {/* Dynamic Background Pattern */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${specs[activeCategory].gradient} opacity-10`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Category Icon */}
              <motion.div
                className="absolute top-8 right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {React.createElement(specs[activeCategory].icon, { 
                  className: `h-16 w-16 text-white/20` 
                })}
              </motion.div>

              {/* Animated Elements */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <motion.div
                  className="text-center"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className={`text-6xl font-black bg-gradient-to-r ${specs[activeCategory].gradient} bg-clip-text text-transparent mb-4`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {specs[activeCategory].category.charAt(0)}
                  </motion.div>
                  <div className="text-white/60 font-medium">
                    {specs[activeCategory].category}
                  </div>
                </motion.div>
              </div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${specs[activeCategory].gradient} rounded-full`}
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${15 + (i % 4) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Performance Benchmarks
            </h3>
            <p className="text-lg text-white/70">
              Revolutionary performance that redefines what's possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 10
                  }}
                  className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 group cursor-pointer relative overflow-hidden"
                >
                  {/* Background Animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl mb-6 relative`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <MetricIcon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    className={`text-5xl font-black mb-3 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
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
                    {metric.value}
                  </motion.div>

                  {/* Label */}
                  <div className="text-white font-semibold mb-2 group-hover:text-white transition-colors">
                    {metric.metric}
                  </div>
                  <div className="text-white/60 text-sm">
                    {metric.description}
                  </div>
                  
                  {/* Animated Underline */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${metric.color} rounded-full mx-auto mt-4`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '80%' } : {}}
                    transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;