import React from "react";
import { motion } from "framer-motion";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiArrowUp,
  FiMail,
  FiMapPin,
  FiArrowRight
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (target) => {
    // Agar "hero" target hai toh seedha top pe bhej do
    if (target === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Baaki targets ke liye element search karo
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: <FiInstagram />, color: "#E4405F", name: "Instagram" },
    { icon: <FiLinkedin />, color: "#0A66C2", name: "LinkedIn" },
    { icon: <FiTwitter />, color: "#1DA1F2", name: "Twitter" },
    { icon: <FiFacebook />, color: "#1877F2", name: "Facebook" },
  ];

  const navLinks = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
    { name: "Gallery", target: "gallery" },
    { name: "3D View", target: "gallery3d" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" }
  ];

  return (
    <footer className="relative bg-white pt-20 pb-10 font-['Montserrat'] border-t border-gray-100 overflow-hidden text-black">
      
      {/* Background Decorative Text - Ultra Clean */}
      <div className="absolute top-0 left-0 w-full text-center text-[12vw] font-black text-gray-50 select-none pointer-events-none tracking-tighter uppercase opacity-50">
        ARCHITECTS
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Column 1: Brand */}
          <div className="md:col-span-4 space-y-6">
            <div className="text-4xl font-bold font-['Cinzel'] tracking-[6px] text-black italic">
              ESTATE<span className="text-[#D4AF37] not-italic">.</span>
            </div>
            <p className="text-gray-600 text-[11px] leading-relaxed tracking-[1px] font-semibold uppercase max-w-xs">
              Crafting architectural legacies with precision and luxury design.
            </p>
            
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all bg-white"
                  style={{ color: social.color }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (No Blur, High Contrast) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-y-4 gap-x-8">
            <div className="col-span-2">
              <h4 className="text-black text-[10px] font-black uppercase tracking-[4px] mb-4 border-l-4 border-[#D4AF37] pl-3">Navigation</h4>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.target)}
                className="text-left text-gray-800 text-[11px] font-bold uppercase tracking-[2px] hover:text-[#D4AF37] transition-all flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-3 h-[2px] bg-[#D4AF37] transition-all"></span>
                {link.name}
              </button>
            ))}
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-black text-[10px] font-black uppercase tracking-[4px]">Direct Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-800">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#D4AF37]">
                  <FiMapPin />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">BKC, Mumbai, MH 400051</span>
              </div>
              <div className="flex items-center gap-4 text-gray-800">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#D4AF37]">
                  <FiMail />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">contact@estate.com</span>
              </div>
            </div>

            <button className="flex items-center justify-between w-full max-w-[220px] bg-black text-white px-6 py-4 rounded-sm group hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
              <span className="text-[10px] font-black uppercase tracking-[2px]">Enquire Now</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] text-gray-500 tracking-[3px] uppercase font-bold">
            © {currentYear} Estate Architects | Designed for Excellence
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <FiArrowUp />
            </div>
            <span className="text-[8px] font-black uppercase tracking-[2px]">Top</span>
          </motion.button>

          <div className="flex gap-8 text-[9px] text-gray-400 uppercase tracking-[2px] font-bold">
            <a href="#" className="hover:text-black transition-colors underline decoration-[#D4AF37]/30 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors underline decoration-[#D4AF37]/30 underline-offset-4">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;