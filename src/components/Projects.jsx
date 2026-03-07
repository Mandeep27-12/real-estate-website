import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

const projectsData = [
  {
    id: "01",
    title: "Sky Atrium",
    city: "Mumbai",
    type: "Residential Elite",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
  },
  {
    id: "02",
    title: "Neo Tech",
    city: "Bengaluru",
    type: "Corporate HQ",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  },
  {
    id: "03",
    title: "Onyx Villa",
    city: "Goa",
    type: "Private Estate",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
  }
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const project = projectsData[index];

  return (
    <section id="projects" className="py-20 bg-white font-['Montserrat'] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Title - Magazine Style */}
        <div className="flex items-baseline gap-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1A1A1A]">01.</h2>
          <div className="h-[2px] w-20 bg-[#B8860B]"></div>
          <p className="text-[10px] font-black tracking-[5px] uppercase text-gray-400">Selected Works</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
          
          {/* IMAGE BLOCK: Stylized border and scale */}
          <div className="w-full md:w-3/5 relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-700 shadow-2xl md:shadow-[-20px_20px_0px_0px_#f3f3f3]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={project.image}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
            {/* Project Index Overlay */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <span className="text-9xl font-black text-gray-50 select-none">
                0{index + 1}
              </span>
            </div>
          </div>

          {/* TEXT BLOCK: Floating & Minimal */}
          <div className="w-full md:w-2/5 md:-ml-20 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 rounded-lg"
              >
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[#B8860B] text-[9px] font-black tracking-[4px] uppercase">{project.type}</span>
                    <h3 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tighter uppercase italic">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <FiMapPin size={14} className="text-[#B8860B]" />
                    <span className="text-[10px] font-bold tracking-[2px] uppercase">{project.city}</span>
                  </div>

                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed uppercase tracking-wider">
                    "Innovative design meets unparalleled luxury. A modern monument crafted for the visionary few."
                  </p>

                  <div className="pt-4 flex items-center justify-between">
                    <button className="group flex items-center gap-4 text-[10px] font-black tracking-[4px] uppercase text-[#1A1A1A] hover:text-[#B8860B] transition-all">
                      View Project
                      <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#B8860B] group-hover:text-white transition-all">
                        <FiArrowRight />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal Progress Line */}
        <div className="mt-20 flex items-center gap-6 justify-center">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group flex flex-col items-center gap-2"
            >
              <div 
                className={`h-[4px] transition-all duration-500 rounded-full ${index === i ? "w-12 bg-[#B8860B]" : "w-4 bg-gray-100"}`}
              />
              <span className={`text-[8px] font-black transition-opacity ${index === i ? "opacity-100" : "opacity-0"}`}>0{i + 1}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;