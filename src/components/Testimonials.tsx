import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

const avatarColors = [
  "bg-[#5B3DB5]/30 text-stone-900 border-[#5B3DB5]/40",
  "bg-[#19B7C9]/30 text-stone-900 border-[#19B7C9]/40",
  "bg-[#F05D9B]/30 text-stone-900 border-[#F05D9B]/40"
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-transparent border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#FFD86A] font-heading font-bold text-xs md:text-sm px-4 py-1.5 border border-stone-200 rounded-full mb-3 backdrop-blur-md">
            <MessageSquareQuote className="w-4 h-4 text-[#FFD86A] fill-[#FFD86A]/20" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-stone-900">
            Loved By Educators & Families
          </h2>
          <div className="w-16 h-1 bg-[#19B7C9] rounded-full mx-auto mt-4" />
          <p className="font-sans text-base md:text-lg text-stone-600 mt-4 leading-relaxed">
            Here is what parents, clinicians, and classroom teachers are saying about using Beth's self-regulation materials:
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white/[0.02]/30 backdrop-blur-md border border-stone-200 p-8 rounded-[2rem] shadow-xl flex flex-col justify-between relative group skew-card transition-all"
            >
              
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-6 text-stone-900/5 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Bottom part: Stars and Quote */}
              <div className="flex flex-col gap-4 relative z-10">
                
                {/* 5-Star Rating */}
                <div className="flex gap-1 bg-white px-2.5 py-1 rounded-full w-fit border border-white/5">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 text-[#FFD86A] fill-[#FFD86A]" />
                  ))}
                </div>

                {/* Testimonial Core Opinion Quote */}
                <p className="font-sans text-stone-700 text-sm md:text-base leading-relaxed italic">
                  "{test.quote}"
                </p>

              </div>

              {/* Bottom part: Critic Author Persona */}
              <div className="flex items-center gap-4 mt-8 border-t border-dashed border-stone-200 pt-4 relative z-10">
                
                {/* Avatar */}
                <div className={`w-11 h-11 rounded-full border flex items-center justify-center font-heading font-black text-sm shadow-md ${avatarColors[idx]}`}>
                  {test.avatarText}
                </div>

                {/* Title Details */}
                <div>
                  <h4 className="font-heading font-black text-sm md:text-base text-stone-900">
                    {test.name}
                  </h4>
                  <span className="font-sans text-[11px] md:text-xs text-stone-500 font-semibold block">
                    {test.title} • {test.role}
                  </span>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
