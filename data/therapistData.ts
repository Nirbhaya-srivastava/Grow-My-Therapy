import { ServiceItem, FaqItem, OfficeFeature, OfficeImage } from '../types';
export const THERAPIST_PROFILE = {
  name: "Dr. Maya Reynolds, PsyD",
  credentials: "PsyD",
  licenseTitle: "Licensed Clinical Psychologist",
  practiceStatus: "(Fictional Therapist — Grow My Therapy Portfolio Case Study)",
  location: "Santa Monica, California",
  telehealthAvailability: "Secure Telehealth available throughout California",
  
  // Address explicitly noted from assignment profile
  addressRaw: "123th Street 45 W, Santa Monica, CA 90401",
  addressFlagNote: "Note: Provided in profile as '123th Street 45 W, Santa Monica, CA 90401' (flagged for client verification).",
  
  images: {
    portrait: "/images/dr_maya_reynolds_authentic_1791898975896.jpg",
    officeMain: "/images/office_brick_sunlit_1791899971029.jpg",
    officeLounge: "/images/office_bookshelf_lounge_1791899971354.jpg",
    coastalBanner: "/images/coastal_serenity_banner_1791897770182.jpg",
  },

  announcement: {
    text: "Accepting new clients for in-person therapy in Santa Monica & telehealth across California",
    badge: "New Client Openings",
    consultationCta: "Schedule a 15-Min Consultation",
  },

  hero: {
    eyebrow: "Psychotherapy in Santa Monica & Telehealth in California",
    heading: "A grounded space to slow down, unravel anxiety, and reconnect with yourself.",
    subheading:
      "Supportive, evidence-based therapy for thoughtful, high-achieving adults who feel functional on the outside, but quietly exhausted, overthinking, or emotionally on edge within.",
    primaryCta: "Book a Free 15-Minute Consultation",
    secondaryCta: "Explore Specialties",
    trustItems: [
      "Licensed Clinical Psychologist (PsyD)",
      "In-Person Santa Monica & California Telehealth",
      "Evidence-Based CBT, EMDR & Somatic Integration",
    ],
  },

  intro: {
    eyebrow: "Understanding Where You Are",
    heading: "You don't have to carry the weight of high expectations in silence.",
    paragraphs: [
      "Many of the people I work with are high-achieving, thoughtful, and deeply self-aware. On paper, life appears organized and accomplished. Yet beneath the surface, you might be carrying relentless mental chatter, chronic tension in your shoulders and chest, disrupted sleep, or an exhausting sense that you are constantly bracing for something to go wrong.",
      "Whether you are navigating chronic professional stress, high internal perfectionism, or the persistent echoes of past life experiences, therapy can be your space to step off the treadmill of hyper-performance.",
      "Together, we move beyond quick surface fixes to cultivate real physiological ease, self-compassion, and emotional resilience that lasts.",
    ],
  },

  services: [
    {
      id: "anxiety-panic",
      title: "Anxiety and Panic Therapy",
      shortDesc:
        "Understand both the emotional and physiological roots of persistent worry, panic attacks, and the constant feeling of bracing for disaster.",
      fullDesc:
        "Anxiety doesn't just live in the mind—it manifests as physical tension, rapid heartbeat, sleeplessness, and relentless mental loops. We integrate Cognitive Behavioral Therapy (CBT) with body-oriented regulation techniques so you learn to soothe your nervous system in real-time, untangle spiraling thoughts, and step out of chronic fight-or-flight mode.",
      focusAreas: [
        "Generalized anxiety & chronic worry",
        "Panic attacks & physical anxiety sensations",
        "Social anxiety & imposter feelings",
        "Somatic nervous system regulation",
      ],
      idealFor: "Adults who feel mentally exhausted from overthinking and want grounded, practical tools alongside deep understanding.",
      approachKey: "CBT & Body-Oriented Regulation",
    },
    {
      id: "trauma-emdr",
      title: "Trauma and EMDR Therapy",
      shortDesc:
        "Paced, gentle, and stabilizing processing for single-incident trauma as well as complex, long-standing childhood or relational stress.",
      fullDesc:
        "When earlier experiences continue to dictate your current sense of safety, confidence, or relational trust, talk therapy alone is often not enough. Using EMDR (Eye Movement Desensitization and Reprocessing) alongside stabilizing somatic practices, we help your brain reprocess stuck distressing memories so they no longer trigger acute emotional distress in your day-to-day life.",
      focusAreas: [
        "Single-incident traumatic events",
        "Complex & developmental relational trauma",
        "EMDR phased processing & stabilization",
        "Rebuilding safety, trust, and boundaries",
      ],
      idealFor: "Individuals experiencing lingering flashbacks, hypervigilance, emotional numbing, or unresolved past chapters.",
      approachKey: "EMDR & Trauma-Informed Stabilization",
    },
    {
      id: "burnout-perfectionism",
      title: "Burnout and Perfectionism",
      shortDesc:
        "Unpack high internal pressure, relentless productivity guilt, and chronic depletion to build sustainable ways of living and working.",
      fullDesc:
        "Entrepreneurs, creative leaders, and dedicated professionals often tie their entire self-worth to productivity. After years of pushing through exhaustion, you may feel profoundly depleted, cynical, or disconnected from what actually matters. Therapy provides a dedicated space to slow down, dismantle perfectionist scripts, and re-establish boundaries that preserve your vitality.",
      focusAreas: [
        "Executive & creative burnout",
        "People-pleasing & boundary fatigue",
        "Imposter syndrome & inner critic dialogue",
        "Sustainable pacing and self-worth realignment",
      ],
      idealFor: "High-achieving professionals and creatives who want to thrive without sacrificing their health and peace of mind.",
      approachKey: "Mindfulness & Values-Aligned Reconnection",
    },
  ] as ServiceItem[],

  about: {
    eyebrow: "Meet Dr. Maya Reynolds",
    heading: "A warm, collaborative, and grounded therapeutic partnership.",
    bioParagraphs: [
      "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.",
      "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
      "If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.",
    ],
    credentialsList: [
      { label: "Degree", value: "Doctor of Psychology (PsyD) in Clinical Psychology" },
      { label: "Licensure", value: "Licensed Clinical Psychologist — State of California" },
      { label: "Clinical Focus", value: "Anxiety, EMDR Trauma Processing, Burnout & Perfectionism" },
      { label: "Modalities", value: "CBT, EMDR, Somatic/Body Regulation, Mindfulness" },
      { label: "Session Formats", value: "In-Person (Santa Monica) & California Telehealth" },
    ],
  },

  approach: {
    eyebrow: "Therapeutic Philosophy",
    heading: "Evidence-based science integrated with genuine human warmth.",
    subheading:
      "We balance thoughtful cognitive insight with somatic regulation, ensuring you feel safer in your body, not just smarter about your symptoms.",
    pillars: [
      {
        number: "01",
        title: "Paced with Safety & Stabilization",
        description:
          "We never rush into traumatic memories or overwhelming emotions before you have strong, reliable tools to regulate your nervous system. Safety and pacing come first.",
      },
      {
        number: "02",
        title: "Mind & Body Integration",
        description:
          "Anxiety and burnout are physiological states as much as cognitive patterns. We address breath, nervous system tone, and somatic signals alongside thought patterns.",
      },
      {
        number: "03",
        title: "Active, Collaborative Dialogue",
        description:
          "Therapy is not an awkward silence where you do all the talking. We engage in real conversation, testing practical tools together and tailoring each session to your goals.",
      },
      {
        number: "04",
        title: "Depth Combined with Practicality",
        description:
          "You will walk away with tangible grounding exercises for your workday, while also unpacking deeper roots so that lasting internal shifts take root.",
      },
    ],
  },

  office: {
    eyebrow: "A Calming Sanctuary",
    heading: "Designed to help you exhale from the moment you arrive.",
    description:
      "My Santa Monica office is a quiet, private space intentionally designed to feel calm and grounding. With generous natural California light, comfortable furnishings, soothing botanicals, and an uncluttered atmosphere, clients frequently share that the environment itself eases their nervous system upon entry.",
    address: "123th Street 45 W, Santa Monica, CA 90401",
    verificationNotice: "Client Verification Notice: Address is listed as provided in Dr. Reynolds' profile materials. Please verify with our office prior to your initial in-person appointment.",
    features: [
      {
        title: "Natural California Light",
        description: "Expansive windows with sheer drapery create a bright, gentle ambiance that supports alertness and relaxation.",
        iconName: "Sun",
      },
      {
        title: "Acoustic Privacy & Comfort",
        description: "Specialized soundproofing and plush, supportive seating ensure total privacy for sensitive conversations.",
        iconName: "Shield",
      },
      {
        title: "Grounding, Organic Materials",
        description: "Warm hardwoods, linen textiles, living plants, and soft neutral tones eliminate the cold clinical clinic feel.",
        iconName: "Sparkles",
      },
      {
        title: "Convenient Coastal Location",
        description: "Accessible Santa Monica setting with nearby parking, ocean air breezes, and tranquil surroundings.",
        iconName: "MapPin",
      },
    ] as OfficeFeature[],
    gallery: [
      {
        src: "/images/office_brick_sunlit_1791899971029.jpg",
        alt: "Sunlit Santa Monica therapy room with industrial brick windows, sheer curtains, gray sofa and modern armchair",
        caption: "Main consultation room featuring tall windows with exposed brick and warm natural California light",
        tag: "Sunlit Consultation Room",
      },
      {
        src: "/images/office_bookshelf_lounge_1791899971354.jpg",
        alt: "Santa Monica therapy lounge with extensive psychological library bookcase, olive tree, comfortable sofa, and glass table",
        caption: "Calming consultation lounge with curated psychology library, olive tree, and grounding seating",
        tag: "Lounge & Library",
      },
      {
        src: "/images/coastal_serenity_banner_1791897770182.jpg",
        alt: "Santa Monica coastline morning mist and serene ocean horizon",
        caption: "Our practice is rooted in the calming coastal rhythm of Santa Monica, California",
        tag: "Coastal Surroundings",
      },
    ] as OfficeImage[],
  },

  faqs: [
    {
      question: "Do you offer in-person sessions, telehealth, or both?",
      answer:
        "I provide both in-person sessions at my private office in Santa Monica, California, as well as secure, HIPAA-compliant telehealth video sessions for adults residing anywhere within the state of California. Some clients choose a hybrid model depending on their schedule.",
    },
    {
      question: "What happens during the initial 15-minute consultation?",
      answer:
        "The consultation is a complimentary, low-pressure video or phone call. We'll briefly discuss what is prompting you to seek therapy now, talk through any questions you have about my approach, and determine whether my clinical expertise aligns with what you're looking for.",
    },
    {
      question: "How does EMDR therapy work, and is it right for me?",
      answer:
        "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based modality designed to help the brain resolve stuck, distressing memories. Rather than having to repeatedly recount traumatic details, EMDR uses bilateral stimulation (such as eye movements or alternating taps) to help your nervous system reprocess the experience into an adaptive, neutral memory. We always begin with thorough preparation and stabilization.",
    },
    {
      question: "Who is your practice best suited for?",
      answer:
        "I specialize in working with thoughtful, high-achieving adults, professionals, entrepreneurs, and creatives who often feel 'functional' on the outside but struggle internally with chronic worry, panic, burnout, perfectionism, or past trauma. If you appreciate a warm, structured, and collaborative approach, we are likely a good fit.",
    },
    {
      question: "What are your fees and do you accept insurance?",
      answer:
        "Standard session fees and scheduling options will be clearly reviewed during our initial consultation call. As is typical for specialized psychological practices in California, I operate as an out-of-network provider. I can supply comprehensive Superbills (itemized statements) that you may submit to your PPO insurance plan for potential reimbursement.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Click 'Schedule Consultation' to choose a time that works for you, or submit the consultation request form below with your preferred meeting format. I will respond within 24 to 48 business hours with next steps.",
    },
  ] as FaqItem[],

  contact: {
    email: "contact@drmayareynolds.com",
    phone: "(310) 555-0194",
    hours: "Monday – Thursday: 9:00 AM – 6:00 PM PST",
    responseWindow: "Inquiries responded to within 24–48 business hours",
    crisisNotice:
      "Please note: This website and consultation form are not monitored for psychiatric emergencies. If you are experiencing an acute mental health crisis, please dial 988 (Suicide & Crisis Lifeline) or visit your nearest emergency room.",
  },
};
