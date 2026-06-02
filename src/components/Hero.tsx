import { motion } from 'motion/react';
import { BRAND_CONFIG } from '../data';
import { ArrowRight, Sparkles, Check, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-magnet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-transparent py-14 md:py-24 px-4 md:px-8 border-b border-stone-200">
      {/* Decorative Pastel Bubbles with more neon glow */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FFD86A]/10 rounded-full blur-2xl bubble-animation" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#19B7C9]/10 rounded-full blur-2xl bubble-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-3/4 w-28 h-28 bg-[#F05D9B]/10 rounded-full blur-2xl bubble-animation" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left text column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Tagline / Indicator */}
          <div className="inline-flex items-center gap-2 bg-white text-purple-700 font-heading font-bold text-xs md:text-sm px-4 py-2 rounded-full w-fit border border-stone-200 backdrop-blur-md">
            <Sparkles className="w-4 h-4 fill-[#FFD86A] text-[#FFD86A]" />
            <span>Introducing Beth's Concert Star Bundle</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            <span className="text-stone-900">Help Children Learn to Wait Their Turn—</span>
            <br />
            <span className="text-glow-gradient">Without Tears, Frustration, or Power Struggles</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed max-w-2xl">
            A pediatric-approved social story and interactive board game designed to teach children patience, self-regulation, and turn-taking in a supportive, play-based way.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={BRAND_CONFIG.storeUrl}
              target="_blank"
              rel="no-referrer"
              className="flex items-center justify-center gap-2 bg-[#F05D9B] hover:bg-[#d94481] text-white font-heading font-bold text-base py-3.5 px-8 rounded-2xl shadow-xl shadow-[#F05D9B]/20 transform hover:-translate-y-1 transition-all group"
              id="hero-primary-cta"
            >
              <span>Get the Resource</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={scrollToForm}
              className="flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-900 border border-stone-200 hover:border-stone-300 font-heading font-bold text-base py-3.5 px-8 rounded-2xl shadow-md transition-all transform hover:-translate-y-1 backdrop-blur-md"
              id="hero-secondary-cta"
            >
              <span>Download Free Preview</span>
              <ArrowDown className="w-4 h-4 text-[#FFD86A]" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#19B7C9]/20 flex items-center justify-center border border-[#19B7C9]/40">
                <Check className="w-3.5 h-3.5 text-[#1aebff] stroke-[3.5]" />
              </div>
              <span className="font-sans font-semibold text-sm text-stone-600">Printable Resource</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#19B7C9]/20 flex items-center justify-center border border-[#19B7C9]/40">
                <Check className="w-3.5 h-3.5 text-[#1aebff] stroke-[3.5]" />
              </div>
              <span className="font-sans font-semibold text-sm text-stone-600">Neurodiversity Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#19B7C9]/20 flex items-center justify-center border border-[#19B7C9]/40">
                <Check className="w-3.5 h-3.5 text-[#1aebff] stroke-[3.5]" />
              </div>
              <span className="font-sans font-semibold text-sm text-stone-600">Home & Classroom Use</span>
            </div>
          </div>
        </motion.div>

        {/* Right mockup column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group max-w-full sm:max-w-md lg:max-w-none">
            {/* Playful background frame styling */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5B3DB5] to-[#F05D9B] rounded-[2.5rem] transform rotate-3 scale-102 opacity-20 shadow-xl group-hover:rotate-1 transition-transform duration-300" />
            
            <img 
              src={`${import.meta.env.BASE_URL}mockup.png`} 
              alt="Beth's Concert Star Storybook, Board Game and Card Deck Product Mockup" 
              className="w-full h-auto rounded-[2rem] shadow-2xl border border-stone-200 bg-white/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-101 relative z-10"
              referrerPolicy="no-referrer"
              id="hero-mockup-img"
            />

            {/* Float badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#FFD86A] text-[#1a0f3d] font-heading font-black text-xs md:text-sm px-4 py-2.5 rounded-2xl shadow-lg border border-[#FFD86A]/40 transform -rotate-6 z-20">
              ⚡ PDF Ebook + Game
            </div>

            {/* Float badge 2 */}
            <div className="absolute -top-4 -right-4 bg-[#19B7C9] text-stone-900 font-heading font-bold text-xs md:text-sm px-4 py-2.5 rounded-2xl shadow-lg border border-[#19B7C9]/40 transform rotate-6 z-20">
              🎉 11 Guidance Cards!
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
