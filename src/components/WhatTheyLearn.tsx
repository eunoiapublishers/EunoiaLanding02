import { motion } from 'motion/react';
import { SKILLS_DEVELOPED } from '../data';
import { Clock, Wind, Brain, Hourglass, Ear, Hand, Users, Trophy } from 'lucide-react';

// Maps icons beautifully to each skill from SKILLS_DEVELOPED structure index
const icons = [
  <Clock className="w-5 h-5 text-[#ebdcfc]" />,
  <Wind className="w-5 h-5 text-[#19B7C9]" />,
  <Brain className="w-5 h-5 text-[#F05D9B]" />,
  <Hourglass className="w-5 h-5 text-[#FFD86A]" />,
  <Ear className="w-5 h-5 text-[#ebdcfc]" />,
  <Hand className="w-5 h-5 text-[#19B7C9]" />,
  <Users className="w-5 h-5 text-[#F05D9B]" />,
  <Trophy className="w-5 h-5 text-[#FFD86A]" />
];

const cardBgColors = [
  "border-[#5B3DB5]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#5B3DB5]/60",
  "border-[#19B7C9]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#19B7C9]/60",
  "border-[#F05D9B]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#F05D9B]/60",
  "border-[#FFD86A]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#FFD86A]/60",
  "border-[#5B3DB5]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#5B3DB5]/60",
  "border-[#19B7C9]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#19B7C9]/60",
  "border-[#F05D9B]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#F05D9B]/60",
  "border-[#FFD86A]/25 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#FFD86A]/60",
];

export default function WhatTheyLearn() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-transparent border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FFD86A] font-heading font-bold text-xs md:text-sm uppercase tracking-wider block mb-2">
            Social-Emotional Competence
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-stone-900">
            What Children Learn & Master
          </h2>
          <div className="w-20 h-1.5 bg-[#F05D9B] rounded-full mx-auto mt-4" />
          <p className="font-sans text-base md:text-lg text-stone-600 mt-4 leading-relaxed">
            By reading Beth's journey and playing the companion game, children develop clinical self-soothing behaviors and healthy interactive skills:
          </p>
        </div>

        {/* Skills Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DEVELOPED.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className={`p-6 bg-white/[0.02] backdrop-blur-md rounded-3xl border shadow-xl flex flex-col gap-4 transform transition-all hover:-translate-y-1 ${cardBgColors[idx]}`}
            >
              
              {/* Icon Holder */}
              <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-stone-200 shadow-lg flex-shrink-0">
                {icons[idx]}
              </div>

              {/* Skill Description */}
              <div>
                <h3 className="font-heading font-bold text-lg text-stone-900 mb-1">
                  {skill.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-stone-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
