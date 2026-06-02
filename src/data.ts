export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  role: 'Teacher' | 'Parent' | 'Therapist';
  name: string;
  avatarText: string;
  title: string;
  quote: string;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  color: string;
  points: { title: string; desc: string }[];
}

// Brand-specific links & configurations
export const BRAND_CONFIG = {
  name: "Eunoia Learning LLC",
  email: "info@eunoiapublishers.com",
  websiteUrl: "https://eunoiapublishers.com",
  storeUrl: "https://www.teacherspayteachers.com/store/eunoia-learning",
  primaryColor: "#5B3DB5",
  secondaryPink: "#F05D9B",
  turquoise: "#19B7C9",
  softYellow: "#FFD86A",
};

// Section 2: Pain points / Problem area
export const PROBLEM_PINPOINTS = [
  { id: "pain-1", text: "Interrupts frequently during conversations and group discussions." },
  { id: "pain-2", text: "Gets highly frustrated or experiences dysregulation while waiting." },
  { id: "pain-3", text: "Has difficulty following daily routines in the classroom or home." },
  { id: "pain-4", text: "Struggles to sit through structured meetings or group instructions." },
  { id: "pain-5", text: "Becomes anxious or dysregulated when classroom expectations are unclear." },
];

// Section 3: Three pillars of how it helps
export const HOW_IT_HELPS_PILLARS = [
  {
    id: "pillar-1",
    title: "Social Story Book",
    description: "Teaches the core waiting skills through an engaging, relatable, neurodiversity-affirming story starring Beth, helping children conceptualize patience.",
    benefit: "Connects emotionally and reduces power struggles.",
    imageUrl: "/input_file_3.png" // Neurodiversity illustrations
  },
  {
    id: "pillar-2",
    title: "Visual Supports",
    description: "Equips parents and educators with visual reinforcement, visual countdowns, and timers to support cognitive predictability and self-regulation.",
    benefit: "Creates clear, stress-free boundaries.",
    imageUrl: "/input_file_2.png" // Poster with visual structure
  },
  {
    id: "pillar-3",
    title: "Interactive Board Game",
    description: "Transforms patient practice into structured play! Children guide Beth through her concert journey, practicing real-life scenarios actively.",
    benefit: "Makes skill training positive and fun.",
    imageUrl: "/input_file_0.png" // Board game + cards composite
  }
];

// Section 5: What children learn
export const SKILLS_DEVELOPED: SkillItem[] = [
  { id: "skill-1", title: "Waiting Skills", description: "Learning how to wait calmly and process down-time positively using concrete waiting tools." },
  { id: "skill-2", title: "Self-Regulation", description: "Utilizing breathing techniques, self-talk, and sensory-friendly reminders to soothe tension." },
  { id: "skill-3", title: "Emotional Awareness", description: "Identifying and validating big feelings instead of suppressing frustration or anger." },
  { id: "skill-4", title: "Patience", description: "Understanding that turn-taking is a natural, predictable process with a highly rewarding payout." },
  { id: "skill-5", title: "Listening Skills", description: "Developing active conversational listening, tuning into others, and respecting social cues." },
  { id: "skill-6", title: "Classroom Participation", description: "Raising hands, collaborating on shared floor tasks, and respecting classmates peacefully." },
  { id: "skill-7", title: "Turn Taking", description: "Embracing game and peer mechanics with confidence, navigating structured and unstructured group rules." },
  { id: "skill-8", title: "Confidence", description: "Shining bright! Harnessing social competency to feel secure, respected, and capable of waiting on stage." },
];

// Section 6: Who is this for?
export const AUDIENCES: AudienceItem[] = [
  {
    id: "aud-teachers",
    title: "For Teachers",
    color: "purple",
    points: [
      { title: "Morning Meetings", desc: "Perfect interactive circle time lesson starter to set visual rules for discussion." },
      { title: "SEL Lessons", desc: "Integrates smoothly into Social-Emotional Learning frameworks, building empathy." },
      { title: "Small Groups", desc: "Excellent co-operative practice module for social communication centers." }
    ]
  },
  {
    id: "aud-therapists",
    title: "For Therapists",
    color: "turquoise",
    points: [
      { title: "ABA Therapy", desc: "Supports behavioral shaping with high-predictability structures and concrete reinforcements." },
      { title: "Speech & Language", desc: "Rich prompts for social communication, raising-hands, and answering questions." },
      { title: "OT Sessions", desc: "Fine-motor game pieces paired with autonomic breathing exercises for sensory tools." }
    ]
  },
  {
    id: "aud-parents",
    title: "For Parents",
    color: "pink",
    points: [
      { title: "Home Practice", desc: "Simple, screen-free structured game session families can enjoy in under 15 minutes." },
      { title: "Daily Routines", desc: "Immersive story reminders to implement waiting at supermarkets, restaurants, and car rides." },
      { title: "Community Settings", desc: "Empowers children with solid patience skills when visiting playgrounds or kin groups." }
    ]
  }
];

// Section 8: Testimonials
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    role: "Teacher",
    name: "Sarah M., M.Ed.",
    avatarText: "SM",
    title: "Special Education Teacher",
    quote: "My Kindergarteners struggled massively during transitions and circle time waiting. Introducing 'Beth's Concert Star' turned lessons into an ongoing musical game! The kids constantly remind each other: 'Take a deep breath, like Beth!'"
  },
  {
    id: "test-2",
    role: "Parent",
    name: "Jessica K.",
    avatarText: "JK",
    title: "Mother of 6yo Autistic Boy",
    quote: "Most social stories feel clinical and uninviting. This story and board game are absolutely gorgeous and feel so loving and welcoming! My son loves moving his token across the stage, and we use the card count downs at dinner table successfully."
  },
  {
    id: "test-3",
    role: "Therapist",
    name: "David L., OTR/L",
    avatarText: "DL",
    title: "Pediatric Occupational Therapist",
    quote: "I use this resource in my group OT sessions. The illustrations are neurodiversity-affirming, showing helpful regulation options like breathing deeply and setting standard timers. It's an essential SEL toolkit!"
  }
];

// Section 9: FAQ list
export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What age is this resource best suited for?",
    answer: "This visual toolkit is designed primarily for children aged 3 to 8 years old. It works exceptionally well for preschoolers, kindergarteners, and early elementary schoolers, as well as older children who benefit from clear visual supports."
  },
  {
    id: "faq-2",
    question: "Is it suitable for autistic or neurodivergent children?",
    answer: "Absolutely! It was created with neurodiversity-affirming practices at its core. The friendly rounded characters, simplified visual cards, concrete steps (like using timers and countdown steps), and absence of overwhelming layouts make it ideal for autistic children and childen with ADHD."
  },
  {
    id: "faq-3",
    question: "Do you have options for classroom vs. home use?",
    answer: "Yes, the printable package includes elements for both! Small groups can play the concert board game in classrooms or clinics, while parents can review the storybook at night and practice simple everyday routines at home."
  },
  {
    id: "faq-4",
    question: "Is this a physical book or a printable download?",
    answer: "This is a digital, high-resolution PDF printable package. Once downloaded, you choose what to print! You can laminate the board game and cards for classroom durability, or view the beautiful storybook directly on an iPad, tablet, or interactive whiteboard."
  },
  {
    id: "faq-5",
    question: "Does it work well in professional therapy sessions?",
    answer: "Pediatric Occupational Therapists (OT), Speech-Language Pathologists (SLP), and ABA clinicians frequently express that they utilize the storyboard cards to teach turn-taking and conversational reciprocity. It's perfect for 1-on-1 and small therapeutic groups."
  },
  {
    id: "faq-6",
    question: "How do I access the files post-purchase?",
    answer: "Immediately after checkout on Teachers Pay Teachers, you'll receive download access to print-ready files. Plus, you will have lifetime access to updates made to the 'Beth's Concert Star' set, free of charge!"
  }
];
