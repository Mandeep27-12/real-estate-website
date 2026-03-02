import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-brand-bg py-24 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-5xl font-black italic mb-6 tracking-tighter uppercase">LUXEVIBE<span className="text-brand-secondary">.</span></h2>
          <p className="max-w-sm opacity-50 leading-loose font-light">
            Crafting world-class residential and commercial spaces since 2004. We don't just build homes, we curate lifestyles.
          </p>
          <div className="flex gap-6 mt-10">
            <Instagram className="hover:text-brand-secondary cursor-pointer transition-colors" />
            <Facebook className="hover:text-brand-secondary cursor-pointer" />
            <Twitter className="hover:text-brand-secondary cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h4 className="text-brand-secondary font-black uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-3 text-sm opacity-60">
            <li className="hover:text-brand-secondary cursor-pointer">The Collection</li>
            <li className="hover:text-brand-secondary cursor-pointer">Investment Guide</li>
            <li className="hover:text-brand-secondary cursor-pointer">Luxury Concierge</li>
            <li className="hover:text-brand-secondary cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-brand-secondary font-black uppercase tracking-widest text-xs">Reach Us</h4>
          <div className="flex items-center gap-3 text-sm opacity-60"><Mail size={16}/> info@luxevibe.com</div>
          <div className="flex items-center gap-3 text-sm opacity-60"><Phone size={16}/> +91 98200 12345</div>
          <div className="flex items-center gap-3 text-sm opacity-60 leading-relaxed"><MapPin size={16}/> Nariman Point, Mumbai,<br/> Maharashtra 400021</div>
        </div>
      </div>

      <div className="text-center mt-24 pt-10 border-t border-white/5 text-[10px] uppercase tracking-[0.5em] opacity-30">
        © 2026 LUXE VIBE INTERNATIONAL REAL ESTATE. MADE WITH PASSION.
      </div>
    </footer>
  );
};

export default Footer;