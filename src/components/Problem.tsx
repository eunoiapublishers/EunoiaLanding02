import { motion } from 'motion/react';
import { PROBLEM_PINPOINTS } from '../data';
import { Frown, AlertCircle, MessageCircle, Calendar, HeartCrack } from 'lucide-react';

const icons = [
  <MessageCircle className="w-5 h-5 text-[#F05D9B]" />,
  <Frown className="w-5 h-5 text-[#ebdcfc]" />,
  <Calendar className="w-5 h-5 text-[#19B7C9]" />,
  <HeartCrack className="w-5 h-5 text-[#FFD86A]" />,
  <AlertCircle className="w-5 h-5 text-[#ebdcfc]" />
];

const cardColors = [
  "hover:bg-[#F05D9B]/10 hover:border-[#F05D9B]/50 border-white/10",
  "hover:bg-[#ebdcfc]/10 hover:border-[#ebdcfc]/50 border-white/10",
  "hover:bg-[#19B7C9]/10 hover:border-[#19B7C9]/50 border-white/10",
  "hover:bg-[#FFD86A]/10 hover:border-[#FFD86A]/50 border-white/10",
  "hover:bg-[#ebdcfc]/10 hover:border-[#ebdcfc]/50 border-white/10"
];

export default function Problem() {
  return (
    <section id="problem" className="py-16 md:py-24 px-4 md:px-8 bg-transparent border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white leading-tight">
            Waiting Is Hard for Many Children
          </h2>
          <div className="w-24 h-1.5 bg-[#FFD86A] rounded-full mx-auto mt-4" />
          <p className="font-sans text-base md:text-lg text-slate-300 mt-4 leading-relaxed">
            In busy classrooms and active households, sitting patiently or waiting for a turn can feel overwhelming. This is even more apparent for neurodivergent children who need concrete structures.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Illustrated Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2 flex items-center gap-2">
              <span className="text-[#FFD86A]">⚠️</span> Common Roadblocks Children Face:
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {PROBLEM_PINPOINTS.map((pin, idx) => (
                <motion.div
                  key={pin.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className={`flex gap-4 p-4 rounded-2xl border bg-white/[0.03] backdrop-blur-md skew-card transition-all ${cardColors[idx]}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg">
                    {icons[idx]}
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans font-bold text-slate-200 text-sm md:text-base">
                      {pin.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Graphic representation of Beth's feelings */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Backglow layer */}
              <div className="absolute inset-0 bg-white/5 rounded-[2rem] transform -rotate-2 scale-102 border border-white/10 backdrop-blur-xl" />
              
              <img 
                src="/input_file_3.png" 
                alt="Illustrations of Beth showing emotional frustrations and deep breathing self-regulation" 
                className="w-full h-auto rounded-[2rem] border border-white/15 bg-white/5 relative z-10 transition-transform duration-300 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
                id="problem-side-illustration"
              />
              
              <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-[#FFD86A] font-sans font-bold text-xs py-2 px-3 rounded-xl shadow-md border border-white/10 z-20">
                💭 Emotional Regulation & Guidance
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
