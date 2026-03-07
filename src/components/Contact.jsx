import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiArrowRight, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-[#F4F4F4] overflow-hidden font-['Montserrat']">
      
      {/* Luxury Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[250px] font-black font-['Cinzel'] tracking-tighter">ESTATE</h2>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Content (Form se alag aur clear) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[40%] space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[#B8860B] text-[10px] tracking-[8px] uppercase font-black block">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none tracking-tighter text-[#1A1A1A]">
                READY TO <br /> 
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #1A1A1A" }}>EVOLVE?</span>
              </h2>
            </div>
            
            <p className="text-gray-500 text-[11px] leading-relaxed uppercase tracking-[2px] font-medium border-l-2 border-[#B8860B] pl-4">
              Schedule a private session with our lead architects to discuss your landmark project.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#B8860B] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
                  <FiPhone size={16} />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A]">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#B8860B] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
                  <FiMail size={16} />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase">HELLO@ESTATE.COM</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Compact High-Visibility Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[55%] w-full"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
              
              {/* Form Content */}
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-400 mb-2 block group-focus-within:text-[#B8860B]">Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#B8860B]" />
                      <input 
                        type="text" 
                        placeholder="ENTER NAME"
                        className="w-full bg-transparent border-b-2 border-gray-100 py-2 pl-7 text-[13px] font-bold tracking-widest text-black focus:border-[#B8860B] outline-none transition-all placeholder:text-gray-200"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-400 mb-2 block group-focus-within:text-[#B8860B]">Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#B8860B]" />
                      <input 
                        type="email" 
                        placeholder="YOUR@MAIL.COM"
                        className="w-full bg-transparent border-b-2 border-gray-100 py-2 pl-7 text-[13px] font-bold tracking-widest text-black focus:border-[#B8860B] outline-none transition-all placeholder:text-gray-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[3px] text-gray-400 mb-2 block group-focus-within:text-[#B8860B]">Message</label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-0 top-3 text-gray-300 group-focus-within:text-[#B8860B]" />
                    <textarea 
                      rows="3"
                      placeholder="TELL US ABOUT THE PROJECT..."
                      className="w-full bg-transparent border-b-2 border-gray-100 py-2 pl-7 text-[13px] font-bold tracking-widest text-black focus:border-[#B8860B] outline-none transition-all placeholder:text-gray-200 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-14 bg-[#1A1A1A] text-white rounded-xl flex items-center justify-center gap-4 group/btn overflow-hidden relative shadow-lg"
                >
                  <div className="absolute inset-0 bg-[#B8860B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[4px]">Send Request</span>
                  <FiArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>

              {/* Decorative Glass Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;