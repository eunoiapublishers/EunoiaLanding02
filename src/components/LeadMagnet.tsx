import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Gift, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Inject MailerLite webforms support dynamically from CDN for client actions if needed
    const script = document.createElement('script');
    script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b";
    script.async = true;
    document.body.appendChild(script);

    // Warm-up or validate
    fetch("https://assets.mailerlite.com/jsonp/2388306/forms/188951930328843672/takel").catch(() => {});

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Form submission overlay trigger for premium UX feedback
  const handleOnSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="lead-magnet" className="py-20 md:py-28 px-4 md:px-8 bg-transparent border-t border-b border-stone-200">
      <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl rounded-[3rem] border border-stone-200 shadow-2xl p-6 md:p-12 relative overflow-hidden">
        
        {/* Soft background decor */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD86A]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#19B7C9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Block: Graphic details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white text-[#F05D9B] font-heading font-bold text-xs md:text-sm px-4.5 py-1.5 border border-stone-200 rounded-full w-fit">
              <Gift className="w-4 h-4 text-[#F05D9B]" />
              <span>Get Your Free Gift!</span>
            </div>

            <h2 className="font-heading font-black text-3xl md:text-5xl text-stone-900 leading-tight">
              Get the Waiting Skills Starter Kit — Free!
            </h2>

            <p className="font-sans text-stone-600 text-base md:text-lg leading-relaxed">
              Sign up today to receive a free introductory preview of the storybook, a printable mini-game board, and a set of patience countdown cards to test straight away at home or in your class!
            </p>

            {/* Bullet list */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5.5 h-5.5 text-[#19B7C9] shrink-0 mt-0.5" />
                <span className="font-sans text-stone-700 font-bold text-sm md:text-base">
                  Print-ready 4-page PDF download
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5.5 h-5.5 text-[#19B7C9] shrink-0 mt-0.5" />
                <span className="font-sans text-stone-700 font-bold text-sm md:text-base">
                  Intro story cards with Beth
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5.5 h-5.5 text-[#19B7C9] shrink-0 mt-0.5" />
                <span className="font-sans text-stone-700 font-bold text-sm md:text-base">
                  Ideal for teachers, parents & therapists
                </span>
              </div>
            </div>

            {/* Product illustration */}
            <div className="hidden lg:block w-3/4 max-w-sm rounded-[1.5rem] overflow-hidden border border-stone-200 p-2 bg-white">
              <img 
                src={`${import.meta.env.BASE_URL}board_example.png`} 
                alt="Beth singing with animal characters cartoon" 
                className="w-full h-auto rounded-[1rem] shadow-sm transform hover:scale-101 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Block: Mailerlite Embedded Form styled to meet playful standards */}
          <div className="lg:col-span-6">
            <div className="bg-white/85 backdrop-blur-lg rounded-[2.5rem] border border-stone-200 p-6 md:p-8 shadow-2xl">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F05D9B] flex items-center justify-center text-stone-900">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg text-stone-900">
                    Subscribe & Download Premades
                  </h3>
                  <span className="font-sans text-xs text-stone-500">
                    Your information is 100% secure. Unsubscribe anytime.
                  </span>
                </div>
              </div>

              {submitted ? (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="bg-emerald-50/90 backdrop-blur-md rounded-3xl border border-emerald-500/30 p-8 text-center flex flex-col gap-4 items-center shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-xl text-emerald-800">
                      Awesome, You're Registered!
                    </h4>
                    <p className="font-sans text-stone-600 text-sm mt-2">
                      Please check your inbox. If you aren't redirected, your printable 'Beth\'s Waiting Skills' preview starter guide is waiting for you!
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="font-heading font-bold text-xs text-[#FFD86A] hover:underline"
                  >
                    Resubmit form
                  </button>
                </motion.div>
              ) : (
                <form 
                  id="mlb2-41987438" 
                  className="ml-block-form flex flex-col gap-4 ml-subscribe-form ml-subscribe-form-41987438" 
                  action="https://assets.mailerlite.com/jsonp/2388306/forms/188951930328843672/subscribe" 
                  data-code="" 
                  method="post" 
                  target="_blank"
                  onSubmit={handleOnSubmit}
                >
                  
                  {/* First Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading font-bold text-stone-700 text-sm flex items-center gap-1.5">
                      <span>Introduce Yourself *</span>
                    </label>
                    <input 
                      aria-label="name" 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-stone-200 outline-none focus:border-[#F05D9B] bg-white font-sans text-stone-900 text-sm transition-all shadow-sm focus:ring-1 focus:ring-[#F05D9B] placeholder-slate-500" 
                      name="fields[name]" 
                      placeholder="Your First Name" 
                      autoComplete="given-name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading font-bold text-stone-700 text-sm">
                      <span>Where to send your preview PDF? *</span>
                    </label>
                    <input 
                      aria-label="email" 
                      aria-required="true" 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-stone-200 outline-none focus:border-[#F05D9B] bg-white font-sans text-stone-900 text-sm transition-all shadow-sm focus:ring-1 focus:ring-[#F05D9B] placeholder-slate-500"  
                      name="fields[email]" 
                      placeholder="your.best.email@example.com" 
                      autoComplete="email"
                    />
                  </div>

                  {/* Subscriber Type Custom Option select element */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading font-bold text-stone-700 text-sm">
                      <span>Which best describes you? *</span>
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full px-4 py-3 rounded-2xl border border-stone-200 outline-none focus:border-[#F05D9B] bg-stone-50 font-sans text-stone-900 text-sm transition-all shadow-sm appearance-none cursor-pointer pr-10" 
                        name="fields[suscriber_type]" 
                        aria-label="suscriber_type" 
                        required
                        aria-required="true"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-stone-50">Select your role...</option>
                        <option value="Parent" className="bg-stone-50">Parent / Caregiver</option>
                        <option value="Teacher" className="bg-stone-50">Teacher / Educator</option>
                        <option value="Therapist" className="bg-stone-50">Therapist (Speech, OT, ABA)</option>
                        <option value="Other" className="bg-stone-50">Other Helper</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Hidden compliance tags required by Mailerlite embedded system */}
                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />

                  {/* Submit CTA button */}
                  <button 
                    type="submit" 
                    className="w-full mt-2 bg-[#F05D9B] hover:bg-[#d94481] text-white font-heading font-bold text-base py-3.5 rounded-2xl shadow-xl shadow-[#F05D9B]/15 transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Get My Waiting Skills Kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center mt-2">
                    <span className="font-sans text-[11px] text-stone-500">
                      By submitting you agree to receive future tips & printable updates.
                    </span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
