import { BRAND_CONFIG } from '../data';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#060312]/75 backdrop-blur-lg border-b border-white/10 py-3.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a 
          href={BRAND_CONFIG.websiteUrl} 
          target="_blank" 
          rel="no-referrer"
          className="flex items-center gap-3 group"
        >
          <img 
            src="/input_file_1.png" 
            alt="Eunoia Learning Logo" 
            className="w-10 h-10 md:w-11 md:h-11 object-contain transition-transform group-hover:rotate-6 duration-300 bg-white/20 p-1 rounded-full border border-white/10"
            referrerPolicy="no-referrer"
            id="brand-logo"
          />
          <div className="flex flex-col">
            <span className="font-heading font-black text-base md:text-xl text-white tracking-tight leading-tight">
              Eunoia Learning
            </span>
            <span className="font-sans text-[10px] md:text-xs text-slate-400 hidden sm:inline">
              Happy Minds & Meaningful Growth
            </span>
          </div>
        </a>

        {/* Dynamic Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-sans font-bold text-xs md:text-sm text-slate-300">
          <button 
            onClick={() => handleScroll('problem')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            The Problem
          </button>
          <button 
            onClick={() => handleScroll('benefits')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            How It Helps
          </button>
          <button 
            aria-label="Inside the package"
            onClick={() => handleScroll('inside')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Inside the Resource
          </button>
          <button 
            onClick={() => handleScroll('audiences')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Who is it for?
          </button>
          <button 
            onClick={() => handleScroll('faq')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Get the Resource */}
        <div>
          <a
            href={BRAND_CONFIG.storeUrl}
            target="_blank"
            rel="no-referrer"
            className="flex items-center gap-2 bg-[#F05D9B] hover:bg-[#d94481] text-white font-heading font-bold text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-xl shadow-lg shadow-[#F05D9B]/30 transition-all transform hover:-translate-y-0.5"
            id="header-cta-btn"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Get Resource</span>
          </a>
        </div>
      </div>
    </header>
  );
}
