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
  FiPhone
} from "react-icons/fi";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-24 pb-12 font-['Montserrat'] border-t border-gray-200">

      <div className="max-w-[1400px] mx-auto px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand */}
          <div className="space-y-8">
            <div className="text-3xl font-bold font-['Cinzel'] tracking-[5px] text-black">
              ESTATE<span className="text-[#B8860B]">.</span>
            </div>

            <p className="text-gray-500 text-xs leading-[2] tracking-wider text-justify">
              Crafting architectural legacies that transcend time. We design
              spaces where innovation meets elegance, redefining the skyline
              of tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-xl">

              <motion.a
                whileHover={{ y: -4 }}
                href="#"
                className="text-[#E4405F]"
              >
                <FiInstagram />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="#"
                className="text-[#0A66C2]"
              >
                <FiLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="#"
                className="text-[#1DA1F2]"
              >
                <FiTwitter />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                href="#"
                className="text-[#1877F2]"
              >
                <FiFacebook />
              </motion.a>

            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-black text-[11px] font-bold uppercase tracking-[4px]">
              Navigation
            </h4>

            <ul className="space-y-4">
              {["Home", "About", "Gallery", "Archive", "Overview"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 text-[12px] uppercase tracking-[2px] hover:text-black transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="space-y-8">
            <h4 className="text-black text-[11px] font-bold uppercase tracking-[4px]">
              Portfolio
            </h4>

            <ul className="space-y-4">
              {[
                "Residential",
                "Commercial",
                "Township",
                "Interior Design"
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 text-[12px] uppercase tracking-[2px] hover:text-black transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-black text-[11px] font-bold uppercase tracking-[4px]">
              Contact
            </h4>

            <div className="space-y-6">

              <div className="flex items-start gap-4 text-gray-500">
                <FiMapPin className="text-[#B8860B] mt-1" />
                <p className="text-[12px] leading-relaxed tracking-wider">
                  12th Floor, Skyline Tower <br />
                  BKC, Mumbai - 400051
                </p>
              </div>

              <div className="flex items-center gap-4 text-gray-500">
                <FiPhone className="text-[#B8860B]" />
                <p className="text-[12px] tracking-wider">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex items-center gap-4 text-gray-500">
                <FiMail className="text-[#B8860B]" />
                <p className="text-[12px] tracking-wider">
                  contact@estate.com
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-[10px] text-gray-400 tracking-[3px] uppercase">
            © {currentYear} Estate Architects
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 text-gray-500 hover:text-black transition"
          >
            Back to top
            <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center">
              <FiArrowUp />
            </div>
          </motion.button>

          <div className="flex gap-8 text-[10px] text-gray-400 uppercase tracking-[2px]">
            <a href="#" className="hover:text-black transition">
              Privacy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;