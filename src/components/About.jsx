import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-[#fcfcfc] overflow-hidden font-['Montserrat']">
      
      {/* Background Subtle Text */}
      <div className="absolute top-10 right-0 pointer-events-none select-none">
        <h3 className="text-[15rem] font-bold text-gray-100/50 leading-none">EST.26</h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* --- LEFT: OVERLAPPING IMAGE COMPOSITION --- */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            {/* Main Small Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-20 w-[70%] aspect-[3/4] shadow-2xl border-[12px] border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Exterior" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Second Smaller Image (Floating behind) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -right-4 -bottom-10 z-30 w-[50%] aspect-square shadow-xl border-[8px] border-white hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80" 
                alt="Interior Art" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Golden Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#B8860B] z-10 opacity-40" />
          </div>

          {/* --- RIGHT: THE CONTENT --- */}
          <div className="w-full lg:w-1/2 lg:-ml-20 z-40">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md p-8 md:p-14 shadow-xl border border-gray-50"
            >
              <div className="mb-6 overflow-hidden">
                 <motion.span 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  className="text-[#B8860B] text-[10px] font-bold tracking-[8px] uppercase block"
                 >
                   The Architecture
                 </motion.span>
              </div>

              <h2 className="text-4xl md:text-6xl font-logo text-black leading-tight mb-8">
                Curating <span className="italic font-light text-gray-400">Timeless</span> <br /> 
                Environments.
              </h2>

              <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mb-10 max-w-lg">
                We believe that architecture is not just about building walls, but about shaping light, air, and human emotion. Our designs bridge the gap between legacy and the future.
              </p>

              {/* Minimalist Counters */}
              <div className="flex gap-12 py-6 border-y border-gray-100 mb-10">
                <div className="flex flex-col">
                  <span className="text-2xl font-logo text-black">12k+</span>
                  <span className="text-[8px] tracking-[3px] text-gray-400 uppercase mt-1">SQ Feet</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-logo text-black">15+</span>
                  <span className="text-[8px] tracking-[3px] text-gray-400 uppercase mt-1">Awards</span>
                </div>
              </div>

              <button className="group relative flex items-center gap-6 overflow-hidden">
                <span className="text-black text-[10px] font-bold uppercase tracking-[4px]">Our Narrative</span>
                <div className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-500" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;