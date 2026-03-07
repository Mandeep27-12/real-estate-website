import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  { id: "01", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=60&w=500", title: "Skyline Nexus", type: "Corporate", desc: "Future workspace with sustainable glass structures." },
  { id: "02", src: "https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?q=60&w=500", title: "Glass Pavilion", type: "Modernist", desc: "Minimalist pavilion blending indoor and outdoor living." },
  { id: "03", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=60&w=500", title: "Golden Suite", type: "Penthouse", desc: "Luxury penthouse with panoramic skyline views." },
  { id: "04", src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=60&w=500", title: "Modern Heritage", type: "Cultural", desc: "Traditional motifs fused with modern architecture." },
  { id: "05", src: "https://images.unsplash.com/photo-1600607687940-4e5a994239b3?q=60&w=500", title: "Azure Residence", type: "Villa", desc: "Private villa with open-air corridors and pools." },
  { id: "06", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=60&w=500", title: "Quartz Center", type: "Design", desc: "Geometric experimental architecture hub." },
];

const Gallery = () => {

  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    setIndex(images.length * 2);

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);

  }, []);

  useEffect(() => {

    const timer = setInterval(() => {

      if (hoveredIndex === null) {
        setIndex((prev) => prev + 1);
      }

    }, 4000);

    return () => clearInterval(timer);

  }, [hoveredIndex]);

  const cardWidth = isMobile ? 70 : 16;
  const gap = isMobile ? 4 : 1.8;

  const totalStep = cardWidth + gap;

  const offsetAdjustment = isMobile
    ? cardWidth / 2
    : totalStep * 1.5 - gap / 2;

  const infiniteImages = Array(10).fill(images).flat();

  const handleDragEnd = (event, info) => {

    const threshold = 50;

    if (info.offset.x < -threshold) setIndex((prev) => prev + 1);
    if (info.offset.x > threshold) setIndex((prev) => prev - 1);

  };

  return (

    <section
      className="relative py-12 overflow-hidden flex flex-col justify-center select-none"
      style={{
        perspective: "2000px",
        background:
          "radial-gradient(circle at 20% 20%, rgba(184,134,11,0.08), transparent 40%), #fafafa",
      }}
    >

      {/* Title */}

      <div className="max-w-[1100px] mx-auto w-full px-6 text-center mb-8">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#B8860B] text-[9px] tracking-[7px] uppercase font-black block mb-2"
        >
          Selected Works
        </motion.span>

        <h2 className="text-neutral-900 text-3xl md:text-5xl font-serif italic tracking-tight">
          The Archive
        </h2>

      </div>

      {/* Slider */}

      <motion.div
        className="relative w-full flex items-center overflow-visible cursor-grab active:cursor-grabbing"
      >

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{
            x: `calc(50vw - ${offsetAdjustment}vw - ${index * totalStep}vw)`,
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center"
          style={{ gap: `${gap}vw` }}
        >

          {infiniteImages.map((item, i) => {

            const isActive = isMobile
              ? i === index
              : i >= index && i <= index + 2;

            const isHovered = hoveredIndex === i;

            return (

              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  opacity: isActive ? 1 : 0.35,
                  scale: isActive ? 1 : 0.9,
                  rotateY: isActive ? (i - index) * -6 : (i < index ? 16 : -16),
                }}
                className="relative flex-shrink-0"
                style={{
                  width: `${cardWidth}vw`,
                  transformStyle: "preserve-3d",
                }}
              >

                {/* Card */}

                <div
                  className={`group relative w-full md:h-[19vw] flex flex-col p-2.5 backdrop-blur-xl bg-white/70 border border-neutral-200 rounded-lg shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-500 ${isHovered ? "shadow-[0_18px_50px_rgba(0,0,0,0.18)] -translate-y-2" : ""}`}
                >

                  {/* Image */}

                  <div className="relative w-full h-[44vw] md:h-[10vw] overflow-hidden rounded-md">

                    <motion.img
                      src={item.src}
                      loading="lazy"
                      animate={{ scale: isHovered ? 1.07 : 1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  </div>

                  {/* Content */}

                  <div className="flex-grow pt-2 flex flex-col justify-between">

                    <div>

                      <span className="text-[7px] tracking-[3px] uppercase font-bold text-[#B8860B]">
                        {item.type}
                      </span>

                      <h3 className="text-neutral-900 text-sm md:text-base font-semibold mt-1 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-neutral-500 text-[10px] md:text-[11px] leading-snug mt-1 line-clamp-2">
                        {item.desc}
                      </p>

                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 w-full py-1.5 bg-neutral-900 text-white text-[8px] tracking-[2px] uppercase font-bold rounded-md"
                    >
                      Explore
                    </motion.button>

                  </div>

                </div>

              </motion.div>

            );
          })}

        </motion.div>

      </motion.div>

      {/* Navigation */}

      <div className="max-w-[1100px] mx-auto w-full px-10 mt-10 flex flex-col items-center gap-6">

        <div className="flex gap-2">

          {images.map((_, i) => (

            <div
              key={i}
              className={`h-[3px] transition-all duration-500 rounded-full ${
                index % images.length === i
                  ? "w-8 bg-[#B8860B]"
                  : "w-3 bg-neutral-200"
              }`}
            />

          ))}

        </div>

        <div className="flex gap-14">

          <button
            onClick={() => setIndex((prev) => prev - 1)}
            className="group flex items-center gap-2 text-[9px] tracking-[4px] font-black hover:text-[#B8860B]"
          >
            <span className="group-hover:-translate-x-2 transition-transform">
              ←
            </span>
            PREV
          </button>

          <button
            onClick={() => setIndex((prev) => prev + 1)}
            className="group flex items-center gap-2 text-[9px] tracking-[4px] font-black hover:text-[#B8860B]"
          >
            NEXT
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </button>

        </div>

      </div>

    </section>

  );

};

export default Gallery;