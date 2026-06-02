import { BRAND_CONFIG } from '../data';
import { Mail, Globe, Store, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-50/80 backdrop-blur-md text-stone-900 py-12 px-4 md:px-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">
        
        {/* Left column: Short brand bio */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={`${import.meta.env.BASE_URL}logo_eunoia.png`} 
              alt="Eunoia Learning Logo" 
              className="w-10 h-10 object-contain bg-white border border-stone-200 rounded-full p-0.5 animate-pulse" 
              referrerPolicy="no-referrer"
            />
            <span className="font-heading font-black text-xl text-stone-900 tracking-wide">
              Eunoia Learning
            </span>
          </div>
          <p className="font-sans text-stone-600 text-xs md:text-sm leading-relaxed max-w-sm">
            Eunoia Learning LLC provides premium visual materials, social narratives, and interactive resources designed to encourage happy minds and meaningful growth for children of all minds.
          </p>
          <span className="font-sans text-[11px] text-stone-500 block mt-2">
            © {new Date().getFullYear()} Eunoia Learning LLC. All rights reserved.
          </span>
        </div>

        {/* Center column: Contact and Support info */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-heading font-bold text-sm md:text-base text-[#FFD86A] uppercase tracking-wider">
            Connect & Support
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-xs md:text-sm text-stone-600">
            <li>
              <a 
                href={`mailto:${BRAND_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#FFD86A] transition-colors"
                id="footer-email-link"
              >
                <Mail className="w-4.5 h-4.5 text-[#19B7C9]" />
                <span>{BRAND_CONFIG.email}</span>
              </a>
            </li>
            <li>
              <a 
                href={BRAND_CONFIG.websiteUrl} 
                target="_blank" 
                rel="no-referrer"
                className="flex items-center gap-2 hover:text-[#FFD86A] transition-colors"
                id="footer-web-link"
              >
                <Globe className="w-4.5 h-4.5 text-[#19B7C9]" />
                <span>eunoiapublishers.com</span>
              </a>
            </li>
            <li>
              <a 
                href={BRAND_CONFIG.storeUrl} 
                target="_blank" 
                rel="no-referrer"
                className="flex items-center gap-2 hover:text-[#FFD86A] transition-colors"
                id="footer-store-link"
              >
                <Store className="w-4.5 h-4.5 text-[#1a9caa]" />
                <span>TPT Store: Eunoia Learning</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right column: Extra links and quick top scrolling */}
        <div className="md:col-span-3 flex flex-col gap-4 md:items-end justify-between">
          <div className="flex flex-col md:items-end gap-1 font-sans text-[11px] text-stone-500">
            <span>Specializing in Neurodiverse Materials</span>
            <span>Created by SEL Practitioners</span>
          </div>

          <button
            onClick={scrollUp}
            className="flex items-center gap-2 bg-white hover:bg-stone-100 border border-stone-200 text-stone-900 text-xs font-heading font-bold py-2.5 px-4 rounded-xl cursor-pointer transition-colors w-fit md:mt-4"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
