import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  // Parallax effect for the background text
  const textX = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="about" className="relative py-20 md:py-40 bg-[#ffffff] overflow-hidden font-['Montserrat']">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-20 -right-20 pointer-events-none select-none hidden md:block">
        <motion.h3 
          style={{ x: textX }}
          className="text-[18rem] font-black text-black/[0.02] leading-none uppercase tracking-tighter"
        >
          Architecture
        </motion.h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
          
          {/* --- LEFT: IMAGE COMPOSITION (Mobile Optimized) --- */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start pt-10">
            {/* Background Accent Square */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-orange-50/50 rounded-full blur-3xl -z-10" />

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 w-[85%] md:w-[70%] aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border-[8px] border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Exterior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Second Smaller Image - Floating & Overlapping */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute -right-2 -bottom-12 md:-right-10 md:bottom-10 z-30 w-[55%] md:w-[50%] aspect-square shadow-2xl rounded-2xl overflow-hidden border-[6px] md:border-[10px] border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" 
                alt="Interior Art" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Corner Bracket Detail */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-600/30 z-10 hidden md:block" />
          </div>

          {/* --- RIGHT: CONTENT BOX --- */}
          <div className="w-full lg:w-1/2 lg:-ml-16 z-40">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white/90 backdrop-blur-xl p-8 md:p-16 rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1.5px] bg-orange-600" />
                <span className="text-orange-600 text-[10px] font-bold tracking-[6px] uppercase">
                  The Architecture
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] leading-[1.1] mb-8 tracking-tighter">
                Curating <span className="text-gray-300 italic font-light">Timeless</span> <br /> 
                Environments.
              </h2>

              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-12 max-w-lg opacity-80">
                We believe that architecture is not just about building walls, but about shaping light, air, and human emotion. Our designs bridge the gap between legacy and the future.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100 mb-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-black">12k<span className="text-orange-600">+</span></span>
                  <span className="text-[9px] font-bold tracking-[3px] text-gray-400 uppercase mt-2">Projects Delivered</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-black">15<span className="text-orange-600">+</span></span>
                  <span className="text-[9px] font-bold tracking-[3px] text-gray-400 uppercase mt-2">Design Awards</span>
                </div>
              </div>

              {/* Modern Action Button */}
              <motion.button 
                whileHover={{ gap: "2rem" }}
                className="flex items-center gap-4 group transition-all duration-300"
              >
                <span className="text-black text-[11px] font-black uppercase tracking-[4px]">
                  Our Narrative
                </span>
                <div className="relative flex items-center justify-center">
                   <div className="w-12 h-[2px] bg-black group-hover:bg-orange-600 transition-colors" />
                   <div className="absolute right-0 w-2 h-2 border-t-2 border-r-2 border-black rotate-45 group-hover:border-orange-600 transition-colors" />
                </div>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;