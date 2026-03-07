import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1613498382159-0972b7b4c9f1?q=80&w=2160",
    badge: "Exclusive Residential Collection",
    title: "Invest in Legacies",
    sub: "Discover architectural marvels crafted for those who require perfection."
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2160",
    badge: "Modern Architectural Wonders",
    title: "Refined Elegance",
    sub: "Experience the pinnacle of modern living in the heart of the city."
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2160",
    badge: "Coastal Paradise Awaits",
    title: "Serene Horizons",
    sub: "Bespoke beachfront estates designed to harmonize with nature."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#02030A] font-['Montserrat']">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="relative h-full w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* --- Background --- */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.15, filter: "blur(4px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              src={slides[current].image} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#02030A]" />
          </div>

          {/* --- Content --- */}
          <div className="relative z-10 text-center px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } }
              }}
            >
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] uppercase tracking-[8px] text-[#D4AF37] font-medium mb-6"
              >
                {slides[current].badge}
              </motion.p>

              <motion.h1 
                className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-[1.1] mb-8 flex flex-wrap justify-center gap-x-4"
                style={{ perspective: "1000px" }}
              >
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden py-2">
                    {word.split("").map((char, j) => (
                      <motion.span key={j} variants={letterAnimation} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-gray-400 text-sm md:text-base max-w-lg mx-auto font-light tracking-wide leading-relaxed mb-12"
              >
                {slides[current].sub}
              </motion.p>

              {/* --- SLEEK BUTTONS --- */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                {/* Refined Primary Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden border border-[#D4AF37] px-10 py-3.5 min-w-[200px]"
                >
                  <motion.div 
                    className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-400 ease-out"
                  />
                  <span className="relative z-10 text-[10px] uppercase tracking-[3px] font-bold text-[#D4AF37] group-hover:text-black transition-colors duration-400">
                    View Details
                  </span>
                </motion.button>

                {/* Refined Secondary Button */}
                <motion.button 
                  className="group flex items-center gap-3 text-white text-[10px] uppercase tracking-[3px] font-semibold px-4 py-2"
                >
                  <span className="relative overflow-hidden">
                    Schedule Tour
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-400" />
                  </span>
                  <span className="text-lg group-hover:translate-x-1.5 transition-transform duration-400 text-[#D4AF37]">→</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* --- PROGRESS INDICATORS --- */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <div className="flex gap-2.5">
          {slides.map((_, i) => (
            <div key={i} className="relative w-10 h-[2px] bg-white/10 overflow-hidden">
              {i === current && (
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "0%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute inset-0 bg-[#D4AF37]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;