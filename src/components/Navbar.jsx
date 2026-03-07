import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronRight, FiCheckCircle } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dropdown, setDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickScrolling = useRef(false);

  // --- Menu items updated with Overview (num: 05) ---
  const menuItems = [
    { name: "Home", id: "home", num: "01" },
    { name: "About", id: "about", num: "02" },
    { name: "Gallery", id: "gallery", num: "03" },
    { name: "The Archive", id: "gallery3d", num: "04" },
    { name: "Overview", id: "overview", num: "05" }, // Linked to OverviewGallery
    {
      name: "Projects",
      id: "projects",
      num: "06",
      dropdown: [
        { name: "Residential", id: "residential" },
        { name: "Commercial", id: "commercial" },
        { name: "Township", id: "township" },
      ],
    },
    { name: "Contact Us", id: "contact", num: "07" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Fast Intersection Observer Logic ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 100 && !isClickScrolling.current) setActive("home");
    };

    // rootMargin and threshold optimized for big sections
    const observerOptions = { 
      root: null, 
      rootMargin: "-20% 0px -60% 0px", // Isse section center mein aate hi link active hoga
      threshold: 0.1 
    };

    const observerCallback = (entries) => {
      if (isClickScrolling.current) return;
      entries.forEach((entry) => { 
        if (entry.isIntersecting) setActive(entry.target.id); 
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setActive(id);
    isClickScrolling.current = true;
    setIsOpen(false);
    setDropdown(null);

    const targetElement = id === "home" ? window : document.getElementById(id);
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    // Scroll khatam hone ke baad observer wapas enable karega
    setTimeout(() => { isClickScrolling.current = false; }, 1000);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@200;300;400;500;600;900&display=swap');
        .font-luxury { font-family: 'Montserrat', sans-serif; }
        .font-logo { font-family: 'Cinzel', serif; }
        .glass-effect {
          backdrop-filter: blur(25px) saturate(200%);
          -webkit-backdrop-filter: blur(25px) saturate(200%);
          background: rgba(255, 255, 255, 0.9) !important;
          border-bottom: 1px solid rgba(184, 134, 11, 0.15);
        }
        .text-spacing { letter-spacing: 0.3em; }
        .glow-line { box-shadow: 0px 0px 10px rgba(184, 134, 11, 0.8); }
        .glow-button {
          box-shadow: 0px 0px 15px rgba(184, 134, 11, 0.2);
          transition: all 0.4s ease;
        }
        .glow-button:hover {
          box-shadow: 0px 0px 25px rgba(184, 134, 11, 0.6);
          background-color: #966d08;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0, height: isScrolled ? "75px" : "95px" }}
        className={`fixed top-0 w-full z-[301] transition-all duration-500 flex items-center ${isScrolled || isOpen ? "glass-effect shadow-md" : "bg-transparent"}`}
      >
        <nav className="max-w-[1500px] mx-auto w-full flex items-center px-10">
          
          <div className="flex-shrink-0">
            <div onClick={() => scrollToSection('home')} className="text-xl md:text-2xl font-bold font-logo cursor-pointer tracking-[5px] text-gray-900">
              ESTATE<span className="text-[#B8860B]">.</span>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-center gap-8 font-luxury items-center">
            {menuItems.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[9px] font-black uppercase text-spacing transition-all duration-300 flex items-center gap-1 pb-1 ${
                    active === item.id ? "text-[#B8860B]" : "text-gray-400 hover:text-[#B8860B]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <FiChevronDown className="group-hover:rotate-180 transition-transform duration-300" />}
                </button>

                <AnimatePresence mode="wait">
                  {active === item.id && (
                    <motion.div layoutId="navUnderline" className="absolute -bottom-1 w-full h-[2px] bg-[#B8860B] glow-line" />
                  )}
                </AnimatePresence>

                {item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 bg-white p-5 shadow-2xl min-w-[180px] rounded-sm">
                    {item.dropdown.map((sub, i) => (
                      <button key={i} onClick={() => scrollToSection(sub.id)} className="block w-full text-left text-[9px] font-semibold uppercase text-spacing text-gray-400 hover:text-[#B8860B] py-3 transition-all hover:translate-x-2 border-b border-gray-50 last:border-0">
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#B8860B] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full glow-button flex items-center gap-2"
            >
              Inquire Now <FiCheckCircle size={14}/>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="relative w-10 h-10 flex items-center justify-center focus:outline-none z-[400]">
              <div className="flex flex-col items-center justify-center relative w-6 h-6">
                <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -7 }} className="absolute w-6 h-[2px] bg-[#B8860B] block rounded-full" />
                <motion.span animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 20 : 0 }} className="absolute w-6 h-[2px] bg-[#B8860B] block rounded-full" />
                <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 7 }} className="absolute w-6 h-[2px] bg-[#B8860B] block rounded-full" />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#fafafa] z-[300] flex flex-col font-luxury lg:hidden pt-24"
          >
            <div className="flex-1 overflow-y-auto px-10 py-10 space-y-8 no-scrollbar">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <motion.div 
                    className="flex items-baseline gap-4 cursor-pointer"
                    onClick={() => item.dropdown ? setDropdown(dropdown === index ? null : index) : scrollToSection(item.id)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-[10px] font-bold text-[#B8860B]/40 italic">{item.num}</span>
                    <span className={`text-2xl uppercase font-black tracking-[0.1em] ${active === item.id ? "text-[#B8860B]" : "text-gray-400"}`}>
                      {item.name}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;