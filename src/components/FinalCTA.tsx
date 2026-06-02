import { motion } from 'motion/react';
import { BRAND_CONFIG } from '../data';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-4 md:px-8 text-white text-center border-t border-white/10">
      
      {/* Heavy glass card overlay inside the full layout section */}
      <div className="max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-xl rounded-[3.5rem] border border-white/15 p-8 md:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Decorative vectors floating in the backing layers */}
        <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#5B3DB5]/10 rounded-full blur-2xl bubble-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-[#FFD86A]/10 rounded-full blur-2xl bubble-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-[#F05D9B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
          
          {/* Playful Floating Icon badges */}
          <div className="flex gap-2.5 items-center justify-center bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 text-[#FFD86A] font-heading font-bold text-xs md:text-sm">
            <Star className="w-4 h-4 fill-[#FFD86A] stroke-none" />
            <span>Transform Patience into Playtime Today!</span>
            <Star className="w-4 h-4 fill-[#FFD86A] stroke-none animate-ping" />
          </div>

          {/* Big Headline */}
          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight max-w-3xl">
            Help Children Learn Patience, Confidence, and Self-Regulation
          </h2>

          {/* Sub-headline */}
          <p className="font-sans text-slate-350 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Unlock the complete illustrated social storybook, interactive companion game board, and 11 visual countdown guidance cards. Print, play, and watch them shine!
          </p>

          {/* Direct TPT Buy CTA button */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={BRAND_CONFIG.storeUrl}
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-3 bg-[#F05D9B] hover:bg-[#d94481] text-white font-heading font-black text-lg md:text-xl px-10 py-5 rounded-full shadow-2xl shadow-[#F05D9B]/25 border border-white/20 transition-all scale-102"
              id="final-cta-purchase-btn"
            >
              <ShoppingCart className="w-6 h-6 stroke-[2.5]" />
              <span>Get My Turn to Shine</span>
            </a>
          </motion.div>

          {/* Short reminder tagline */}
          <div className="flex items-center gap-1.5 text-xs font-sans text-slate-400">
            <Sparkles className="w-4 h-4 text-[#FFD86A] fill-[#FFD86A]" />
            <span>Instant PDF Download available right on Teachers Pay Teachers</span>
          </div>

        </div>

      </div>

    </section>
  );
}
