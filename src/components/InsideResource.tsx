import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_CONFIG } from '../data';
import { ArrowLeft, ArrowRight, BookImage, CheckCircle, ExternalLink } from 'lucide-react';

const SLIDES = [
  {
    image: "/mockup.png",
    title: "The Cover & Board Game Set",
    subtitle: "Complete printable workspace",
    desc: "Includes the original 'Beth: A Star on Stage' storybook cover and the complete colorful 11-step 'Beth's Concert Journey' path board."
  },
  {
    image: "/picture01.png",
    title: "Educational Resource Poster Guide",
    subtitle: "Classroom and home layout",
    desc: "A beautiful display outline indicating instructions, cards guidance, and instant digital downloads that are ready to play."
  },
  {
    image: "/picture02.png",
    title: "Self-Regulation Social Scenarios",
    subtitle: "Autism & neurodiversity friendly",
    desc: "Interactive visual cards teaching kids breathing loops, frustration management, and classroom/home transitions peacefully."
  },
  {
    image: "/board_example.png",
    title: "Charming Beth & Animal Cast",
    subtitle: "Play-focused illustrations",
    desc: "A warm visual illustration displaying Beth and creative animals on the play rug with the educational easel: Aprender, Crear, Cantar."
  }
];

export default function InsideResource() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section id="inside" className="py-20 md:py-28 px-4 md:px-8 bg-transparent border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#19B7C9] font-heading font-bold text-xs md:text-sm px-4 py-2 border border-stone-200 rounded-full mb-3 backdrop-blur-md">
            <BookImage className="w-4 h-4 text-[#19B7C9]" />
            <span className="text-[#1aebff]">High-Quality PDF Materials</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-stone-900">
            Take a Peek Inside the Resource
          </h2>
          <p className="font-sans text-base md:text-lg text-stone-600 mt-4 leading-relaxed">
            The design contains zero stock photos. Every page, card, and layout is beautifully crafted with cozy, colorful illustrations that children adore. View the carousel below to see what you get in your download!
          </p>
        </div>

        {/* Carousel Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-stone-200 shadow-2xl p-6 md:p-10">
          
          {/* Left Block: Image Viewport with interactive arrows */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-50/50 flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={SLIDES[current].image}
                  alt={SLIDES[current].title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-contain p-4 max-h-[450px]"
                  referrerPolicy="no-referrer"
                  id={`gallery-slide-img-${current}`}
                />
              </AnimatePresence>

              {/* Float navigation arrows over the image */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-50/80 hover:bg-stone-50 text-stone-900 flex items-center justify-center shadow-lg border border-stone-200 hover:scale-105 transition-all z-20 cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-50/80 hover:bg-stone-50 text-stone-900 flex items-center justify-center shadow-lg border border-stone-200 hover:scale-105 transition-all z-20 cursor-pointer"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Pagination Indicators / Dots */}
            <div className="flex gap-2.5 mt-5">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                    current === idx 
                      ? 'bg-[#F05D9B] scale-125 ring-4 ring-[#F05D9B]/30' 
                      : 'bg-stone-200 hover:bg-white/35'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Block: Descriptions and highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            <div>
              <span className="font-sans font-bold text-xs uppercase text-[#FFD86A] tracking-widest block mb-1">
                {SLIDES[current].subtitle}
              </span>
              <h3 className="font-heading font-black text-2xl md:text-3xl text-stone-900 leading-tight">
                {SLIDES[current].title}
              </h3>
              <div className="w-12 h-1 bg-[#19B7C9] rounded-full mt-3" />
            </div>

            <p className="font-sans text-stone-600 text-base md:text-md leading-relaxed bg-white/[0.04] p-4 rounded-2xl border border-dashed border-stone-200">
              {SLIDES[current].desc}
            </p>

            {/* Quick checklist of values in the printable kit */}
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2.5 text-sm font-sans text-stone-600">
                <CheckCircle className="w-4.5 h-4.5 text-[#19B7C9] fill-[#19B7C9]/10" />
                <span>High Resolution (300DPI) Print-Ready PDF</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm font-sans text-stone-600">
                <CheckCircle className="w-4.5 h-4.5 text-[#19B7C9] fill-[#19B7C9]/10" />
                <span>Cozy pastel palette tailored for sensory comfort</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm font-sans text-stone-600">
                <CheckCircle className="w-4.5 h-4.5 text-[#19B7C9] fill-[#19B7C9]/10" />
                <span>Includes social story, game, and 11 reference cards</span>
              </li>
            </ul>

            {/* Direct purchase CTA link for page focus */}
            <a
              href={BRAND_CONFIG.storeUrl}
              target="_blank"
              rel="no-referrer"
              className="mt-4 flex items-center justify-center gap-2.5 bg-[#F05D9B] hover:bg-[#d94481] text-white font-heading font-bold py-3.5 px-6 rounded-2xl shadow-xl shadow-[#F05D9B]/25 transition-transform hover:-translate-y-0.5 text-center"
              id="inside-carousel-buy-btn"
            >
              <span>Get the Whole Kit on TPT</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
