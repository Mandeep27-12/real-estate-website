import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Gallery3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  // 3D rotations for the whole scene
  const rotateX = useTransform(mouseY, [-300, 300], [7, -7]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // Parallax for text sticking out from behind the building
  const leftTextX = useTransform(mouseX, [-300, 300], [-30, 10]);
  const rightTextX = useTransform(mouseX, [-300, 300], [-10, 30]);
  const zDepth = useTransform(mouseX, [-300, 300], [-40, 40]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Section height fixed at 350px with White Background
      className="relative w-full h-[350px] flex items-center justify-center bg-white md:overflow-visible overflow-hidden my-32 perspective-[1500px]"
    >
      {/* Subtle Grid or Texture for White BG (Optional) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`}} />

      {/* 3D WRAPPER CONTAINER */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[1200px] h-full flex items-center justify-center"
      >
        
        {/* LEFT TEXT - Now in Dark Color for White BG */}
        <motion.div
          style={{ x: leftTextX, translateZ: zDepth, transformStyle: "preserve-3d" }}
          className="absolute left-[5%] md:left-[12%] z-10 text-right pointer-events-none"
        >
          <h2 className="text-black text-4xl md:text-7xl font-bold tracking-tighter leading-[0.8] opacity-90">
            THE <br /> NEW
          </h2>
          <div className="h-[3px] w-16 bg-orange-600 ml-auto mt-4" />
        </motion.div>

        {/* CENTER BUILDING - The Anchor (Overhanging) */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 pointer-events-none flex justify-center items-end h-full"
        >
          {/* Subtle Glow for White BG */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-orange-500/5 blur-[80px] rounded-full" />

          <img
            src="/image.png" 
            alt="Building"
            // Height 450px ensures it overflows the 350px section
            className="h-[450px] md:h-[480px] w-auto object-contain filter contrast(1.1) drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]"
          />
        </motion.div>

        {/* RIGHT TEXT - Orange Accents */}
        <motion.div
          style={{ x: rightTextX, translateZ: zDepth, transformStyle: "preserve-3d" }}
          className="absolute right-[5%] md:right-[12%] z-10 text-left pointer-events-auto"
        >
          <h2 className="text-orange-600 text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.8]">
            HORI <br /> ZON
          </h2>
          <p className="text-gray-500 text-[10px] uppercase tracking-[4px] mt-6 font-medium">
            Modern <br /> Architecture
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.1, translateZ: 40 }}
            className="mt-8 px-8 py-3 bg-black text-white text-[9px] font-bold uppercase tracking-[3px] shadow-xl hover:bg-orange-600 transition-colors"
          >
            Explore Now
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Soft Shadow on White Ground */}
      <div className="absolute bottom-0 w-[500px] h-[30px] bg-black/[0.03] blur-[40px] rounded-full" />
    </section>
  );
};

export default Gallery3D;