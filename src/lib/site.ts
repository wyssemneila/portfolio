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
  portrait: "/hero-portrait.png",

  cta: {
    label: "Get in touch",
    href: "#contact",
  },

  /** Quick-contact redirects. */
  email: "clashwissem49@gmail.com",
  whatsapp: "1234567890", // international format, no + or spaces

  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
    { label: "Behance", href: "https://behance.net", icon: "behance" as const },
    { label: "Gmail", href: "mailto:clashwissem49@gmail.com", icon: "gmail" as const },
    { label: "WhatsApp", href: "https://wa.me/1234567890", icon: "whatsapp" as const },
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
      { title: "Sneaker Launch Film", client: "Spec Ad", year: "2025", kind: "video" },
      { title: "Perfume Campaign", client: "Lumière", year: "2025", kind: "collection", shots: 6 },
      { title: "Energy Drink Teaser", client: "Volt", year: "2024", kind: "video" },
      { title: "Skincare Product Set", client: "Dermal", year: "2024", kind: "collection", shots: 8 },
    ] as Project[],

    design: [
      { title: "Album Cover Series", client: "Personal", year: "2025", kind: "collection", shots: 6 },
      { title: "Event Poster Pack", client: "Client", year: "2024", kind: "collection", shots: 4 },
      { title: "Brand Identity Kit", client: "Studio X", year: "2024", kind: "collection", shots: 8 },
      { title: "Social Templates", client: "Agency", year: "2023", kind: "collection", shots: 6 },
    ] as Project[],

    about: {
      text: "I'm Wissem — a freelance AI filmmaker crafting cinematic commercials, teasers and short films. I blend AI generation with real editing craft to move fast without losing the polish brands expect.",
      highlights: [
        { k: "50+", v: "Projects delivered" },
        { k: "4 yrs", v: "Creating with AI" },
        { k: "24h", v: "Fast turnaround" },
      ],
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

export type Project = {
  title: string;
  client: string;
  year: string;
  kind?: "video" | "collection";
  video?: string;
  poster?: string;
  images?: string[];
  shots?: number;
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
