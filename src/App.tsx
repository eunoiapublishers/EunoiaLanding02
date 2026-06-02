/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItHelps from './components/HowItHelps';
import InsideResource from './components/InsideResource';
import WhatTheyLearn from './components/WhatTheyLearn';
import WhoIsThisFor from './components/WhoIsThisFor';
import LeadMagnet from './components/LeadMagnet';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col antialiased">
      {/* 1. Header Navigation anchor drawer */}
      <Header />

      {/* 2. Hero Section Spotlight (book & game board layout) */}
      <main className="flex-grow">
        <Hero />

        {/* 3. The Problem section (pain points cards + illust_3) */}
        <Problem />

        {/* 4. How the Resource Helps (infographie 3 columns) */}
        <HowItHelps />

        {/* 5. Peak Peek Inside (interactive carousel showing screenshots) */}
        <InsideResource />

        {/* 6. What they direct learn grid (8 skills with playful Lucide badges) */}
        <WhatTheyLearn />

        {/* 7. Who is this for cards (Teachers, Clinicians and Parents checkouts) */}
        <WhoIsThisFor />

        {/* 8. Newsletter Free Starter Kit lead capture (MailerLite embedded action) */}
        <LeadMagnet />

        {/* 9. Educator and Family Testimonial panels */}
        <Testimonials />

        {/* 10. Accordion based frequently asked questions */}
        <FAQ />

        {/* 11. Final visual colourful banner CTA trigger */}
        <FinalCTA />
      </main>

      {/* 12. Footnotes, credits and brand copyright notes */}
      <Footer />
    </div>
  );
}

