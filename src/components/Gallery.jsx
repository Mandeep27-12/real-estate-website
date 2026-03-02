import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  
  { id: "01", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000", title: "Skyline Nexus", type: "Corporate", desc: "This project defines the future of urban workspace with sustainable glass structures and a focus on natural lighting." },
  { id: "02", src: "https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?q=80&w=1000", title: "Glass Pavilion", type: "Modernist", desc: "A masterpiece of minimalist design, this pavilion seamlessly blends indoor and outdoor living while maintaining integrity." },
  { id: "03", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000", title: "Golden Suite", type: "Penthouse", desc: "Luxury redefined in the heart of the city. Every corner is crafted with premium materials, offering panoramic views." },
  { id: "04", src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000", title: "Modern Heritage", type: "Cultural", desc: "Preserving the past while embracing the future. This cultural center uses traditional motifs integrated into a sleek framework." },
  { id: "05", src: "https://images.unsplash.com/photo-1600607687940-4e5a994239b3?q=80&w=1000", title: "Azure Residence", type: "Villa", desc: "A private getaway designed for ultimate relaxation. The Azure Residence features infinity pools and open-air corridors." },
  { id: "06", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000", title: "Quartz Center", type: "Design", desc: "An experimental design hub where geometric shapes meet functional aesthetics. The Quartz Center is a playground for innovators." },
];

const Gallery = () => {
  const [index, setIndex] = useState(images.length * 10); 
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (hoveredIndex === null) {
        setIndex((prev) => prev + (isMobile ? 1 : 3));
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [hoveredIndex, isMobile]);

  const cardWidth = isMobile ? 80 : 18; 
  const gap = isMobile ? 5 : 3; 
  const totalStep = cardWidth + gap;
  const offsetAdjustment = isMobile ? (cardWidth / 2) : (totalStep * 1.5 - gap / 2);

  const infiniteImages = Array(30).fill(images).flat();

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) setIndex(prev => prev + (isMobile ? 1 : 3));
    else if (info.offset.x > swipeThreshold) setIndex(prev => prev - (isMobile ? 1 : 3));
  };

  return (
   <section
  id="gallery"
  className="relative min-h-screen bg-[#fafafa] py-12 overflow-hidden flex flex-col justify-center select-none"
  style={{ perspective: "2000px" }}
>
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto w-full px-6 text-center mb-10 md:mb-14">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[#B8860B] text-[10px] tracking-[10px] uppercase font-bold block mb-2">Architecture</motion.span>
        <h2 className="text-neutral-900 text-5xl md:text-7xl font-serif italic tracking-tighter">The Archive</h2>
      </div>

      <div className="relative w-full flex items-center overflow-visible cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `calc(50vw - ${offsetAdjustment}vw - ${index * totalStep}vw)` }} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center"
          style={{ gap: `${gap}vw` }}
        >
          {infiniteImages.map((item, i) => {
            const isActive = isMobile ? i === index : (i >= index && i <= index + 2);
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
  key={i}
  onMouseEnter={() => setHoveredIndex(i)}
  onMouseLeave={() => setHoveredIndex(null)}
  animate={{
    opacity: isActive ? 1 : 0.15,
    scale: isActive ? (isHovered ? 1.05 : 1) : 0.85,
    y: isHovered && isActive ? -20 : 0,
    rotateY: isActive
      ? (i - index) * -8
      : (i < index ? 25 : -25),
    rotateX: isHovered ? 4 : 0,
    z: isActive ? 0 : -200,
  }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  className="relative flex-shrink-0 pointer-events-none md:pointer-events-auto"
  style={{
    width: `${cardWidth}vw`,
    transformStyle: "preserve-3d",
  }}
>
                <div className={`relative w-full h-[110vw] md:h-[30vw] flex flex-col overflow-hidden bg-white rounded-sm border transition-all duration-500 ${isHovered ? 'border-neutral-300 shadow-2xl' : 'border-neutral-100 shadow-xl'}`}>
                  
                  {/* IMAGE SECTION */}
                  <div className="w-full h-[55%] overflow-hidden bg-neutral-200">
                    <motion.img
                      src={item.src}
                      animate={{ scale: isHovered ? 1.1 : 1.15, filter: isHovered ? "grayscale(0%)" : "grayscale(20%)" }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT SECTION */}
                  <div className="w-full h-[45%] p-4 md:p-5 flex flex-col justify-start gap-2 md:gap-3 bg-white relative z-10">
                    <div>
                      <motion.span animate={{ color: isHovered ? "#B8860B" : "#A3A3A3" }} className="text-[8px] md:text-[9px] tracking-[3px] uppercase font-bold transition-colors">{item.type}</motion.span>
                      <h3 className="text-neutral-900 text-base md:text-lg font-serif leading-tight mt-1">{item.title}</h3>
                    </div>
                    <p className="text-neutral-500 text-[10px] md:text-[11px] leading-relaxed line-clamp-3 italic opacity-80">
                      {item.desc}
                    </p>

                    {/* PREMIUM BUTTON */}
                    <motion.button 
                      className="relative mt-auto w-full py-2 md:py-2.5 border border-neutral-900 text-neutral-900 text-[8px] md:text-[9px] tracking-[3px] uppercase font-bold overflow-hidden group/btn pointer-events-auto"
                      whileHover="hover"
                    >
                      <motion.span 
                        className="absolute inset-0 bg-neutral-900 z-0"
                        initial={{ y: "100%" }}
                        variants={{ hover: { y: 0 } }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                      <motion.span 
                        className="relative z-10 transition-colors duration-300 group-hover/btn:text-white"
                      >
                        Explore Project
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                {/* BOTTOM LABEL */}
                <motion.div animate={{ opacity: isActive ? 1 : 0, y: isHovered ? 5 : 0 }} className="mt-4 flex justify-between items-center px-1">
                  <span className="text-[10px] font-mono text-neutral-400">0{item.id}</span>
                  <motion.span animate={{ letterSpacing: isHovered ? "2px" : "1px" }} className="text-[9px] font-bold uppercase tracking-widest text-neutral-800 transition-all">{item.title}</motion.span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* REFINED CONTROLS */}
      <div className="max-w-[1200px] mx-auto w-full px-10 mt-12 flex flex-col items-center gap-8">
        <div className="flex gap-3">
          {images.map((_, i) => {
            const currentRealIndex = index % images.length;
            const dotActive = isMobile ? currentRealIndex === i : Math.floor(currentRealIndex / 3) === Math.floor(i / 3);
            return (
              <div key={i} className={`h-[2px] transition-all duration-700 ${dotActive ? "w-12 bg-[#B8860B]" : "w-4 bg-neutral-200"}`} />
            );
          })}
        </div>
        <div className="flex gap-16 items-center">
          <button onClick={() => setIndex(prev => prev - (isMobile ? 1 : 3))} className="group flex items-center gap-2 text-[9px] tracking-[4px] font-black uppercase hover:text-[#B8860B] transition-colors">
            <span className="transition-transform group-hover:-translate-x-1">←</span> PREV
          </button>
          <button onClick={() => setIndex(prev => prev + (isMobile ? 1 : 3))} className="group flex items-center gap-2 text-[9px] tracking-[4px] font-black uppercase hover:text-[#B8860B] transition-colors">
            NEXT <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;