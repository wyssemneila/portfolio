// ─────────────────────────────────────────────────────────────
// Edit everything about your hero / brand here.
// ─────────────────────────────────────────────────────────────

export const site = {
  /** Used only for the browser tab title. */
  brand: "Wissem",
  /** Small top-left label. */
  location: "North Africa Based",
  tagline: "AI Films & Commercials",
  description:
    "Freelance AI filmmaker crafting cinematic ads and commercials. Ideas that move brands.",

  /** Big invitation wordmark: small word on top, big word below (Poppins Bold). */
  invite: {
    small: "LET'S",
    word: "IMAGINE",
  },

  /** Hero headline. `emphasis` is appended (italic) to the last line. */
  headline: {
    lines: ["IDEAS THAT", "MOVE"],
    emphasis: "BRANDS",
  },

  /** Portrait shown behind the wordmark. Drop your image in /public and update the path. */
  portrait: "/hero-portrait.webp",

  cta: {
    label: "Get in touch",
    href: "#contact",
  },

  /** Quick-contact redirects. */
  email: "clashwissem49@gmail.com",
  whatsapp: "21655797615", // international format, no + or spaces

  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
    { label: "Behance", href: "https://behance.net", icon: "behance" as const },
    { label: "Gmail", href: "mailto:clashwissem49@gmail.com", icon: "gmail" as const },
    { label: "WhatsApp", href: "https://wa.me/21655797615", icon: "whatsapp" as const },
  ],

  /** Scrolling services marquee under the headline. */
  services: [
    "AI UGC Videos",
    "AI Teasers",
    "AI Short Films",
    "AI Product Commercials",
    "AI Ad Campaigns",
    "AI Product Shooting",
    "AI Brand Films",
    "AI Social Ads",
  ],

  // ── Section 2: Work ──────────────────────────────────────────
  work: {
    heading: "Selected Work",
    subheading: "A mix of AI commercials, films and design.",

    /**
     * Projects per category. Each project is either:
     *  - kind "video":      video?: "/work/clip.mp4"  poster?: "/work/clip.jpg"
     *  - kind "collection": images?: ["/work/a.jpg", ...]  (opens a popup gallery)
     * If no real asset yet, `shots` renders that many gradient placeholders.
     */
    commercials: [
      {
        title: "AI Commercial 01",
        client: "Brand Film",
        year: "2025",
        kind: "video",
        video: "https://vimeo.com/1229552721?fl=tl&fe=ec",
      },
      {
        title: "AI Commercial 02",
        client: "Commercial Campaign",
        year: "2025",
        kind: "video",
        video: "https://vimeo.com/1229552722?fl=tl&fe=ec",
      },
      {
        title: "AI Commercial 03",
        client: "Product Teaser",
        year: "2025",
        kind: "video",
        video: "https://vimeo.com/1229552658?fl=tl&fe=ec",
      },
      {
        title: "AI Commercial 04",
        client: "Spec Ad",
        year: "2025",
        kind: "video",
        video: "https://vimeo.com/1229552655?fl=tl&fe=ec",
      },
      {
        title: "AI Commercial 05",
        client: "Social Campaign",
        year: "2025",
        kind: "video",
        video: "https://vimeo.com/1229547474?fl=tl&fe=ec",
      },
      {
        title: "AI Commercial 06",
        client: "Brand Story",
        year: "2025",
        kind: "video",
        video: "https://vimeo.com/1229547473?fl=tl&fe=ec",
      },
    ] as Project[],

    design: [
      { title: "Album Cover Series", client: "Personal", year: "2025", kind: "collection", shots: 6 },
      { title: "Event Poster Pack", client: "Client", year: "2024", kind: "collection", shots: 4 },
      { title: "Brand Identity Kit", client: "Studio X", year: "2024", kind: "collection", shots: 8 },
      { title: "Social Templates", client: "Agency", year: "2023", kind: "collection", shots: 6 },
    ] as Project[],

    about: {
      greeting: "Hi, I am Wissem.",
      role: ["Freelance AI filmmaker focused", "on cinematic ads & commercials"],
      paragraphs: [
        "I'm based in North Africa, creating AI-driven commercials, teasers and short films for brands that want cinematic results without a full production crew.",
        "I started in traditional editing, then moved fully into AI generation — combining tools like Higgsfield, ComfyUI and Google Flow with real post-production craft. That shift shaped how I work: story first, tech second.",
        "I care about making brands look premium. Strong concepts, clean edits, and visuals that stop the scroll and actually convert.",
        "Outside of client work, I experiment with new AI models, motion tests and personal short films to keep pushing the craft.",
      ],
      // Add more images to enable the carousel (drop files in /public).
      images: [
        { src: "/hero-portrait.png", caption: "Neon portrait — studio test" },
      ],
      cta: { label: "Book a call" },
    },

    // "What I'm into right now" chips (shown under the About tab).
    interests: {
      heading: ["What I'm into", "right now"],
      items: [
        { label: "AI tools", image: "/interests/ai-tools.jpg", emoji: "🤖", grad: "linear-gradient(135deg,#1e4bd8,#3b6df5)" },
        { label: "New AI models", image: "/interests/ai-models.jpg", emoji: "✨", grad: "linear-gradient(135deg,#7c5cff,#c7b3ff)" },
        { label: "Commercial ads", image: "/interests/ads.jpg", emoji: "🎬", grad: "linear-gradient(135deg,#ff5a1f,#ff9f5a)" },
        { label: "Cinematic grading", image: "/interests/grading.jpg", emoji: "🎞️", grad: "linear-gradient(135deg,#123cc4,#2554e8)" },
        { label: "Gym & fitness", image: "/interests/gym.jpg", emoji: "🏋️", grad: "linear-gradient(135deg,#0f172a,#334155)" },
        { label: "Travel & road trips", image: "/interests/travel.jpg", emoji: "🧭", grad: "linear-gradient(135deg,#0891b2,#67e8f9)" },
        { label: "Hip-hop & trap", image: "/interests/music.jpg", emoji: "🎧", grad: "linear-gradient(135deg,#ff5a1f,#ffd0b8)" },
      ] as Interest[],
    },

    tools: [
      { name: "Claude", purpose: "Claude Code — automation, workflows & MCP", bg: "#D97757", fg: "#fff", logo: "/logos/claude.svg" },
      { name: "Higgsfield", purpose: "AI video & image generation", bg: "#0F0F10", fg: "#fff", icon: "/logos/higgsfield.png" },
      { name: "Magnific", purpose: "AI video & image generation", bg: "#7C5CFF", fg: "#fff", icon: "/logos/magnific.png" },
      { name: "ComfyUI", purpose: "Local models for generation", bg: "#1FA97A", fg: "#fff", icon: "/logos/comfyui.png" },
      { name: "Google Flow", purpose: "AI video generation", bg: "#4285F4", fg: "#fff", icon: "/logos/googleflow.png" },
      { name: "ElevenLabs", purpose: "AI voiceover & audio", bg: "#101010", fg: "#fff", icon: "/logos/elevenlabs.png" },
      { name: "Suno AI", purpose: "AI music generation", bg: "#111827", fg: "#fff", icon: "/logos/suno.png" },
      { name: "Perplexity", purpose: "Research & references", bg: "#1FA3A3", fg: "#fff", logo: "/logos/perplexity.svg" },
      { name: "Miro", purpose: "Planning & moodboards", bg: "#FFD02F", fg: "#111", logo: "/logos/miro.svg" },
      { name: "Photoshop", purpose: "Image editing & compositing", bg: "#001E36", fg: "#31A8FF", icon: "/logos/photoshop.png" },
      { name: "Premiere Pro", purpose: "Video editing", bg: "#2D0040", fg: "#EA77FF", icon: "/logos/premiere.png" },
      { name: "After Effects", purpose: "Motion graphics & VFX", bg: "#00005B", fg: "#D6A3FF", icon: "/logos/aftereffects.png" },
      { name: "DaVinci Resolve", purpose: "Color grading", bg: "#0b0b0d", fg: "#E5A00D", icon: "/logos/davinci.png" },
    ] as Tool[],
  },
};

export type StoryboardFrame = {
  src?: string;
  title: string;
  caption?: string;
};

export type PromptBreakdown = {
  time: string;
  frame: string;
  prompt: string;
};

export type CaseStudy = {
  tagline?: string;
  headline?: string;
  overview?: string;
  concept?: string;
  storyboard?: StoryboardFrame[];
  prompts?: PromptBreakdown[];
  tools?: string[];
};

export type Project = {
  title: string;
  client: string;
  year: string;
  kind?: "video" | "collection";
  video?: string;
  poster?: string;
  images?: string[];
  shots?: number;
  aspect?: "9/16" | "16/9";
  caseStudy?: CaseStudy;
};

export type Interest = {
  label: string;
  image?: string;
  emoji: string;
  grad: string;
};

export type Tool = {
  name: string;
  purpose: string;
  bg: string;
  fg: string;
  /** White monochrome logo shown on the brand-color tile (optional). */
  logo?: string;
  /** Full-color app icon shown full-bleed on a light tile (optional). */
  icon?: string;
};
