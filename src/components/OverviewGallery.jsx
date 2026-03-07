import React from "react";
import { motion } from "framer-motion";

const overviewData = [
  {
    id: "01",
    title: "Visionary Axis",
    tag: "AESTHETICS",
    text: "Architecture is not merely the art of building; it is the manifestation of human spirit in physical form. We design spaces that inspire creativity and redefine luxury living."
  },
  {
    id: "02",
    title: "Quantum Living",
    tag: "INNOVATION",
    text: "We engineer intelligent environments where materials react to climate, light adapts naturally and structures evolve like living organisms."
  },
  {
    id: "03",
    title: "Urban Equilibrium",
    tag: "ECOLOGY",
    text: "Our philosophy integrates nature with density. Vertical forests and biophilic design redefine modern urban living."
  }
];

const OverviewGallery = () => {

  const loopData = [...overviewData, ...overviewData, ...overviewData];

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Heading */}

      <div className="max-w-[1400px] mx-auto px-10 mb-20">

        <span className="text-[#B8860B] text-[11px] tracking-[10px] uppercase font-black block mb-4">
          Strategic Insights
        </span>

        <h2 className="text-black text-5xl md:text-7xl font-black uppercase italic tracking-tight">

          DEEP <span className="text-gray-300">PERSPECTIVE</span>

        </h2>

      </div>

      {/* Slider */}

      <div className="relative w-full">

        <motion.div
          className="flex gap-10 px-10 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >

          {loopData.map((item, idx) => (

            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group w-[360px] rounded-[28px] border border-gray-200 bg-white p-8 flex flex-col gap-5 shadow-sm hover:shadow-2xl hover:shadow-[#B8860B]/20 transition-all duration-500"
            >

              {/* Top */}

              <div className="flex justify-between items-center">

                <span className="text-[10px] font-mono text-gray-400 tracking-[3px]">
                  PHASE_{item.id}
                </span>

                <span className="text-[10px] text-[#B8860B] tracking-[3px] uppercase font-bold">
                  {item.tag}
                </span>

              </div>

              {/* Title */}

              <h3 className="text-black text-2xl font-black uppercase italic tracking-tight group-hover:text-[#B8860B] transition">

                {item.title}

              </h3>

              {/* Text */}

              <p className="text-gray-600 text-[14px] leading-[1.7]">

                {item.text}

              </p>

              {/* Button */}

              <button className="mt-2 w-full py-3 rounded-xl border border-gray-200 bg-gray-50 text-black text-[11px] font-black uppercase tracking-[3px] transition-all duration-300 hover:bg-[#B8860B] hover:text-white hover:border-[#B8860B]">

                View Dossier

              </button>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default OverviewGallery;