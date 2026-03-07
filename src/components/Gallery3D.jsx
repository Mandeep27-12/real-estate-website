import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ModernLivingHeader = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  const bgX = useTransform(mouseX, [-300, 300], [30, -30]);
  const bgY = useTransform(mouseY, [-300, 300], [20, -20]);
  
  const rotateX = useTransform(mouseY, [-300, 300], [7, -7]);
  const rotateY = useTransform(mouseX, [-300, 300], [-7, 7]);

  const imageX = useTransform(mouseX, [-300, 300], [25, -25]);
  const textX = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div className="w-full bg-[#f8f9fa] relative overflow-hidden py-10 md:py-0">
      
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="relative w-full min-h-[500px] md:min-h-[600px] lg:h-[450px] flex items-center perspective-[1500px] select-none border-none"
      >
        
        {/* --- BACKGROUND EFFECTS --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            style={{ x: bgX, y: bgY }}
            className="absolute top-1/4 right-[5%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-orange-200/40 blur-[80px] md:blur-[100px] rounded-full"
          />
          <div className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]" 
               style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
          />
        </div>

        {/* MADDY Watermark - Mobile size optimized */}
        <motion.h2
          style={{ x: useTransform(mouseX, [-300, 300], [30, -30]) }}
          className="absolute left-0 right-0 text-center top-1/2 -translate-y-1/2 text-[4rem] sm:text-[8rem] md:text-[16rem] font-black text-black/[0.02] pointer-events-none italic tracking-tighter z-0 uppercase"
        >
          MADDY
        </motion.h2>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-10 md:px-20 z-10 gap-8 md:gap-0"
        >
          
          {/* LEFT CONTENT - Font sizes fixed for Mobile */}
          <motion.div 
            style={{ translateZ: 100, x: textX }} 
            className="relative z-20 w-full md:w-1/2 text-center md:text-left"
          >
            <span className="text-orange-600 font-bold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[12px] uppercase mb-2 md:mb-4 block">
              Premium Real Estate
            </span>
            
            {/* Responsiveness: text-4xl on mobile, text-8xl on desktop */}
            <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-tight md:leading-none uppercase italic tracking-tighter whitespace-nowrap">
              Modern <span className="text-orange-600">Living</span>
            </h1>
            
            <p className="text-gray-500 mt-4 md:mt-6 max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto md:mx-0 font-medium leading-relaxed text-xs md:text-base">
              Experience luxury apartments designed with modern architecture and premium comfort.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-10 px-8 md:px-12 py-3 md:py-4 bg-transparent border-2 border-black text-black font-extrabold text-[10px] md:text-[12px] uppercase tracking-[0.2em] rounded-full shadow-md transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE - Mobile scale fixed */}
          <motion.div
            style={{ translateZ: 200, x: imageX }}
            className="relative md:absolute md:right-[-2%] lg:right-[-5%] z-50 flex items-center justify-center h-auto md:h-full pointer-events-none"
          >
            <div className="relative">
              <motion.img
                src="/image.png" 
                alt="Building"
                className="relative w-auto h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] max-w-none object-contain z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-8 md:h-12 bg-black/10 blur-[30px] md:blur-[40px] rounded-full -z-10" />
            </div>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
};

export default ModernLivingHeader;