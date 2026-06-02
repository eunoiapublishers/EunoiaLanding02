import { motion } from 'motion/react';
import { HOW_IT_HELPS_PILLARS } from '../data';
import { BookOpen, MapPin, Eye } from 'lucide-react';

const icons = [
  <BookOpen className="w-5 h-5 text-stone-900" />,
  <Eye className="w-5 h-5 text-stone-900" />,
  <MapPin className="w-5 h-5 text-stone-900" />
];

const accentColors = [
  "bg-[#5B3DB5]", // Purple
  "bg-[#19B7C9]", // Turquoise
  "bg-[#F05D9B]"  // Pink
];

const borderHoverColors = [
  "hover:border-[#5B3DB5]/60 hover:bg-white/[0.06] border-stone-200",
  "hover:border-[#19B7C9]/60 hover:bg-white/[0.06] border-stone-200",
  "hover:border-[#F05D9B]/60 hover:bg-white/[0.06] border-stone-200"
];

export default function HowItHelps() {
  return (
    <section id="benefits" className="py-20 md:py-28 px-4 md:px-8 bg-transparent border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 bg-white/40 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-stone-200 shadow-2xl">
          <span className="font-heading font-bold text-[#F05D9B] text-xs md:text-sm uppercase tracking-wider block mb-2">
            Why Our Approach Works
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-stone-900">
            How the Resource Helps
          </h2>
          <div className="w-16 h-1 bg-[#19B7C9] rounded-full mx-auto mt-4" />
          <p className="font-sans text-base md:text-lg text-stone-600 mt-4 leading-relaxed">
            By combining cognitive narrative training with visual predictability and gamified physical reinforcement, children learn to navigate delays with positive outcomes.
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_HELPS_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`flex flex-col bg-white/40 backdrop-blur-lg rounded-3xl border p-6 shadow-xl skew-card transition-all ${borderHoverColors[idx]}`}
            >
              
              {/* Pillar Image / Mockup Screenshot */}
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative group border border-stone-200">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={pillar.imageUrl} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title Header with Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-xl ${accentColors[idx]} flex items-center justify-center shadow-lg`}>
                  {icons[idx]}
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-stone-900">
                  {pillar.title}
                </h3>
              </div>

              {/* Descriptions & Benefits */}
              <p className="font-sans text-stone-600 text-sm md:text-base leading-relaxed flex-grow">
                {pillar.description}
              </p>

              {/* Key Benefit Highlight */}
              <div className="mt-6 pt-4 border-t border-dashed border-stone-200 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#19B7C9] animate-pulse" />
                <span className="font-sans font-black text-[#FFD86A] text-xs uppercase tracking-wider">
                  Benefit: {pillar.benefit}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
