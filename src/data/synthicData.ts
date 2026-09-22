import { ServiceItem, PricingPlan, FAQItem, WorkflowStep, StudioFeature, FounderInfo } from '../types';

export const AGENCY_INFO = {
  name: "SYNTHIC",
  tagline: "AI Video | Enterprise Solutions",
  founders: [
    {
      id: "arpit" as const,
      name: "Arpit Tiwari",
      role: "Founder & Creative Director",
      age: 17,
      bio: "17-year-old creative visionary and viral hook strategist directing on-location shoots, dynamic camera composition, and scroll-stopping short-form content.",
      phone: "+91 8085842137",
      phoneRaw: "8085842137",
      address: "Chhiwla Lauwa, Rewa, Madhya Pradesh",
      photoKey: "img-2026",
      specialty: "Conceptual Video Shoots, Visual Hooks & Pacing"
    },
    {
      id: "sanskar" as const,
      name: "Sanskar Tiwari",
      role: "Co-Founder & CEO",
      age: 16,
      bio: "16-year-old growth architect, media operator, and dedicated gym & fitness enthusiast scaling Meta ad funnels, AI models, and hyper-local conversion systems.",
      phone: "+91 6260435157",
      phoneRaw: "6260435157",
      address: "Ward No. 6, Baikunthpur, Rewa, Madhya Pradesh",
      photoKey: "snapchat-2939",
      isGymEnthusiast: true,
      gymNote: "Gym & Fitness Enthusiast • High-Discipline Daily Workouts",
      specialty: "Meta Ads Architecture, AI Studio Pipelines & Client Growth"
    }
  ] as FounderInfo[],
  // Company Official Calling Line: 6260435157
  phone: "+91 6260435157",
  phoneRaw: "6260435157",
  callNumber: "+91 6260435157",
  callNumberRaw: "6260435157",
  // Company Official WhatsApp: 9522464307
  whatsappNumber: "+91 9522464307",
  whatsappRaw: "9522464307",
  whatsappBaseUrl: "https://wa.me/919522464307",
  // Arpit Tiwari Direct
  arpitPhone: "+91 8085842137",
  arpitPhoneRaw: "8085842137",
  arpitAddress: "Chhiwla Lauwa, Rewa, Madhya Pradesh",
  arpitPhotoKey: "img-2026",
  // Sanskar Tiwari Direct & Company HQ
  sanskarAddress: "Ward No. 6, Baikunthpur, Rewa, Madhya Pradesh",
  sanskarPhotoKey: "snapchat-2939",
  email: "synthicagency9@gmail.com",
  instagram: "synthic_agency",
  instagramUrl: "https://instagram.com/synthic_agency",
  // Sanskar's address is also the company's address
  address: "Ward No. 6, Baikunthpur, Rewa, Madhya Pradesh"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "account-management",
    title: "Full Account Management",
    shortDesc: "Strategy, scheduling, profile aesthetic, and organic growth.",
    longDesc: "Complete social presence overhaul. We analyze your local audience, design a cohesive visual feed, plan content calendars, and execute daily/weekly posting that builds algorithmic momentum.",
    iconName: "TrendingUp",
    tags: ["Organic Growth", "Aesthetic Curation", "Daily Scheduling"],
    deliverables: [
      "Custom Feed & Bio Aesthetic Redesign",
      "Monthly Content Calendar & Strategic Hook Plan",
      "Daily/Weekly Uploads & Caption Copywriting",
      "Hashtag & Local Audience Engagement Strategy",
      "Monthly Metric & Reach Performance Report"
    ],
    gradient: "from-blue-600 via-indigo-600 to-purple-600"
  },
  {
    id: "video-shoots",
    title: "Conceptual Video Shoots",
    shortDesc: "We think the concept, write hooks, and shoot dynamic high-retention reels.",
    longDesc: "No boring footage. We script scroll-stopping 3-second visual hooks, bring professional lighting and camera rigs to your storefront or studio, and edit with trending audio and punchy sound design.",
    iconName: "Clapperboard",
    tags: ["High Retention", "Hook Ideation", "Viral Pacing"],
    deliverables: [
      "3-Second Hook Ideation tailored to your shop",
      "On-Location Smartphone & Camera Shooting",
      "Dynamic J-cuts, Speed Ramps & Color Grading",
      "Trending Audio Synchronization & SFX",
      "Exported in 9:16 Ultra-HD for Instagram & YouTube Shorts"
    ],
    gradient: "from-purple-600 via-pink-600 to-amber-500"
  },
  {
    id: "ai-studio",
    title: "Cinematic AI Studio",
    shortDesc: "Transform basic photos into runway-ready model shoots and video assets.",
    longDesc: "Bypass costly studio rentals, fashion models, and equipment. Send simple phone photos of your clothes, jewelry, or goods, and our AI pipeline generates runway models, cinematic lighting, and video commercials.",
    iconName: "Sparkles",
    tags: ["Virtual Models", "Zero Studio Rent", "4K Commercials"],
    deliverables: [
      "Photorealistic AI Fashion & Product Models",
      "Motion Commercials from Static Flat-Lays",
      "Custom Studio Backgrounds (Cyberpunk, Luxury, Minimal)",
      "High-Resolution 4K Renderings for Feed & Ads",
      "Localized Theme Matching Your Brand Tone"
    ],
    gradient: "from-cyan-500 via-blue-600 to-purple-600"
  },
  {
    id: "meta-ads",
    title: "Meta Ads Setup",
    shortDesc: "High-converting local Instagram & Facebook ads for direct walk-ins and calls.",
    longDesc: "Stop burning money on random boost buttons. We build precision-targeted Meta Ad funnels geo-fenced around Rewa and your target cities, driving WhatsApp inquiries and direct footfall to your doors.",
    iconName: "Target",
    tags: ["Direct Inquiries", "Geo-Targeting", "WhatsApp Funnels"],
    deliverables: [
      "Hyper-Local Geo-Radius Ad Setup",
      "Click-to-WhatsApp Direct Chat Funnels",
      "Compelling Ad Creatives & Video Hook Testing",
      "Audience Demographics & Interest Optimization",
      "Transparent Spend Tracking & Lead Reports"
    ],
    gradient: "from-blue-600 via-sky-500 to-indigo-700"
  },
  {
    id: "digital-setup",
    title: "Digital Setup & Websites",
    shortDesc: "Modern storefronts and landing pages for local retailers.",
    longDesc: "Turn social media viewers into paying clients. We build blazing-fast modern digital storefronts, catalog pages, and link-in-bio hubs engineered for mobile shoppers with direct WhatsApp ordering.",
    iconName: "Globe",
    tags: ["Mobile First", "WhatsApp Orders", "High Conversion"],
    deliverables: [
      "Custom Responsive Landing Pages & Catalog Portals",
      "Direct Click-to-Order & WhatsApp Checkout Buttons",
      "Google Business Profile & Map Syncing",
      "SEO Metadata for Local Search Visibility",
      "Lightning-Fast Sub-Second Load Speeds"
    ],
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "reel-shoot",
    name: "Per Reel / Video Shoot",
    price: "₹400 – ₹800",
    period: "per video",
    tagline: "High-voltage short-form content designed for immediate retention.",
    scope: "Hook ideation, on-location or AI shoot, fast cuts, trending sound design (adjusts based on duration and assets).",
    features: [
      "Scroll-stopping 3-second hook ideation",
      "On-location or AI Studio shoot execution",
      "Fast-paced modern cuts & kinetic captions",
      "Trending sound design & custom SFX",
      "Revisions included to match shop branding",
      "Exported in 1080x1920 (9:16) Reel format"
    ],
    isFeatured: false,
    ctaText: "Book Video Shoot",
    whatsappMessage: "Hi Arpit & Sanskar, I want to book a Per Reel/Video Shoot for my shop!"
  },
  {
    id: "complete-management",
    name: "Complete Account Handling",
    price: "₹5,000 – ₹7,000",
    period: "per month",
    tagline: "Our all-in-one flagship growth engine for shops and ambitious enterprises.",
    scope: "End-to-end content calendar, regular reels & creatives, hook-driven concepts, profile makeover, hashtag & growth strategy.",
    features: [
      "Complete Instagram & Facebook Profile Makeover",
      "End-to-end Monthly Content Calendar",
      "Regular Dynamic Reels & Aesthetic Post Creatives",
      "Proprietary Viral Hook Formulation for your niche",
      "Hashtag optimization & local community engagement",
      "AI Studio visual assets included",
      "Priority 24/7 WhatsApp consultation with founders"
    ],
    isFeatured: true,
    badge: "Best Value • Most Popular",
    ctaText: "Get Complete Handling",
    whatsappMessage: "Hi Arpit & Sanskar, I am interested in the Complete Account Handling (₹5,000 - ₹7,000/mo) plan for my business!"
  },
  {
    id: "meta-ads-ai",
    name: "Meta Ads & AI Campaign Launchpad",
    price: "Custom Scope",
    period: "tailored package",
    tagline: "Direct footfall, phone calls, and automated AI lead machines.",
    scope: "Targeted local ad setup, audience testing, lead/WhatsApp routing, and AI creative production.",
    features: [
      "Hyper-targeted local radius Meta Ads setup",
      "Direct Click-to-WhatsApp message funnels",
      "AI Runway model creatives & commercial video ads",
      "Audience A/B testing & lowest-cost-per-lead tuning",
      "Direct walk-in footfall tracking & call routing",
      "Bi-weekly performance audit & scaling advice"
    ],
    isFeatured: false,
    ctaText: "Discuss Custom Scope",
    whatsappMessage: "Hi Arpit & Sanskar, I need a custom Meta Ads & AI Campaign Launchpad for my business!"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Click & Send Raw Photos",
    tag: "Instant via WhatsApp",
    description: "Simply snap clear photos of your apparel, jewelry, or products using your smartphone and send them directly to us on WhatsApp. No special lighting or backdrop needed.",
    iconName: "Camera",
    actionHint: "Takes under 2 minutes from your shop floor"
  },
  {
    step: 2,
    title: "AI Synthesis & Runway Styling",
    tag: "Creative Engineering",
    description: "Our proprietary AI engine places your item on virtual hyper-realistic models with cinematic lighting, luxury backdrops, and editorial angles fitted to your brand tone.",
    iconName: "Cpu",
    actionHint: "Trained on high-converting fashion & retail aesthetics"
  },
  {
    step: 3,
    title: "Receive Reel-Ready Ads",
    tag: "4K Motion & Feed Ready",
    description: "We deliver finished, motion-rich video ads and 4K editorial stills directly to your device, complete with trending audio, hook text, and caption suggestions.",
    iconName: "Rocket",
    actionHint: "Post directly to Instagram Reels, Shorts & Status"
  }
];

export const STUDIO_FEATURES: StudioFeature[] = [
  {
    id: "virtual-models",
    title: "AI Fashion & Product Models",
    description: "Place apparel, jewelry, or accessories on hyper-realistic AI models with realistic skin textures, diverse poses, and luxury styling.",
    iconName: "Users",
    highlight: "Zero model fees & zero studio rentals",
    badge: "Virtual Fashion"
  },
  {
    id: "photo-to-video",
    title: "Photo-to-Video Engine",
    description: "Turn static product images into motion-rich commercial reels with dynamic camera pans, light sweeps, and cinematic motion graphics.",
    iconName: "Film",
    highlight: "High-energy commercial reel output",
    badge: "Motion Magic"
  },
  {
    id: "local-concepts",
    title: "Localised Video Concepts",
    description: "AI-assisted visual storytelling custom-fitted to your shop's inventory, festive occasions, and local customer buying psychology in Rewa & MP.",
    iconName: "MapPin",
    highlight: "Crafted specifically for local buyers",
    badge: "Regional Relevance"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-onsite",
    question: "Do you shoot on-site at our shop or business?",
    answer: "Yes! We plan and shoot on-location at your storefront, cafe, showroom, or workspace in Rewa and surrounding areas. Alternatively, if you want zero disruption, you can use our Cinematic AI Studio engine by simply sending us your raw product photos."
  },
  {
    id: "faq-turnaround",
    question: "How fast is delivery?",
    answer: "We offer exceptionally fast turnaround! Single reels and AI photo shoots are typically delivered within 24 to 48 hours, keeping your social feeds consistent with daily and weekly posting routines."
  },
  {
    id: "faq-small-shop",
    question: "I have a small local shop. Is SYNTHIC right for my budget?",
    answer: "Absolutely. We specifically designed SYNTHIC with local shop owners, boutiques, salons, and retail enterprises in mind. Our single reel shoots start from just ₹400 – ₹800, and our complete monthly handling is priced at an honest ₹5,000 – ₹7,000/mo."
  },
  {
    id: "faq-meta-ads",
    question: "How do Meta Ads bring direct customers to my shop?",
    answer: "Instead of boosting posts blindly, we target customers living within a 5-15 km radius of your location who are actively interested in your offerings. We connect the ads directly to your WhatsApp or phone number so customers message you immediately for pricing, reservations, or directions."
  },
  {
    id: "faq-founder-contact",
    question: "Who will actually manage my account and shoots?",
    answer: "You work directly with founders Arpit Tiwari and Sanskar Tiwari. No outsourced call centers or junior interns. You get direct access via phone and WhatsApp for instantaneous creative iterations."
  }
];
