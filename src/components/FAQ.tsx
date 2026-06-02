import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_LIST } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open first item by default

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 md:px-8 bg-transparent border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 text-[#FFD86A] font-heading font-bold text-xs md:text-sm px-4 py-1.5 border border-white/10 rounded-full mb-3 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-[#FFD86A]" />
            <span>Got Questions? We Have Answers!</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#F05D9B] rounded-full mx-auto mt-4" />
        </div>

        {/* Dynamic Accordion list */}
        <div className="flex flex-col gap-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                  isOpen 
                    ? 'border-[#19B7C9]/40 bg-white/[0.04]' 
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                
                {/* Accordion Trigger/Header button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-heading font-bold text-base md:text-lg text-white cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#FFD86A] font-black">0{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <div>
                    {isOpen ? (
                      <div className="w-8 h-8 rounded-full bg-[#19B7C9]/25 text-[#19B7C9] border border-[#19B7C9]/35 flex items-center justify-center">
                        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 text-white border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Collapsible Content wrapper with standard CSS transitions or Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 text-sm md:text-base font-sans text-slate-300 bg-white/[0.01] border-t border-dashed border-white/10 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
