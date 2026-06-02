import { motion } from 'motion/react';
import { AUDIENCES } from '../data';
import { Check, Presentation, Heart, ShieldAlert } from 'lucide-react';

const icons = [
  <Presentation className="w-8 h-8 text-[#ebdcfc]" />,
  <ShieldAlert className="w-8 h-8 text-[#19B7C9]" />,
  <Heart className="w-8 h-8 text-[#F05D9B]" />
];

const gradientBorders = [
  "border-[#5B3DB5]/30 bg-white/[0.02] hover:border-[#5B3DB5]/60 hover:bg-white/[0.06]",
  "border-[#19B7C9]/30 bg-white/[0.02] hover:border-[#19B7C9]/60 hover:bg-white/[0.06]",
  "border-[#F05D9B]/30 bg-white/[0.02] hover:border-[#F05D9B]/60 hover:bg-white/[0.06]"
];

const checkIconsBg = [
  "bg-[#5B3DB5]/20 text-white border border-[#5B3DB5]/40",
  "bg-[#19B7C9]/20 text-white border border-[#19B7C9]/40",
  "bg-[#F05D9B]/20 text-white border border-[#F05D9B]/40"
];

export default function WhoIsThisFor() {
  return (
    <section id="audiences" className="py-20 md:py-28 px-4 md:px-8 bg-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FFD86A] font-heading font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
            Target Audiences
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white">
            Who Is This Resource For?
          </h2>
          <div className="w-16 h-1 bg-[#19B7C9] rounded-full mx-auto mt-4" />
          <p className="font-sans text-base md:text-lg text-slate-300 mt-4 leading-relaxed">
            The storybook and board game are versatile tools designed to thrive in any learning or treatment environment.
          </p>
        </div>

        {/* 3-Card Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUDIENCES.map((aud, idx) => (
            <motion.div
              key={aud.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`p-8 rounded-[2.5rem] border backdrop-blur-md shadow-xl transition-all relative overflow-hidden group ${gradientBorders[idx]}`}
            >
              
              {/* Header: Title and Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {icons[idx]}
                </div>
                <h3 className="font-heading font-black text-2xl text-white">
                  {aud.title}
                </h3>
              </div>

              {/* Sub-Bullets Details list */}
              <div className="flex flex-col gap-6">
                {aud.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex gap-3 items-start">
                    <div className={`w-6 h-6 rounded-lg ${checkIconsBg[idx]} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm md:text-base text-white">
                        {pt.title}
                      </h4>
                      <p className="font-sans text-xs md:text-sm text-slate-300 mt-0.5 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
