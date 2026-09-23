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
        title: "Opening Ceremony Video",
        client: "Official Ceremony",
        year: "2025",
        kind: "video",
        aspect: "16/9",
        video: "https://vimeo.com/1229559387?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Cinematic Event Production · Opening Film",
          headline: "THE AWAKENING OF PURPOSE",
          overview:
            "The official cinematic opening ceremony film designed for large-format projection, combining epic generative visual worldbuilding, dynamic lighting, and synchronized atmospheric score.",
          concept:
            "A visionary journey exploring humanity, technology, and boundless ambition, crafted to captivate audiences and set an unforgettable tone for the event.",
          storyboard: [
            { title: "Genesis Horizon", caption: "Vast panoramic vistas emerging from volumetric golden mist." },
            { title: "Convergence of Forces", caption: "Dynamic motion energy swirling into central focal points." },
            { title: "The Climax Reveal", caption: "Monumental lighting bloom unveiling the ceremony's grand theme." },
          ],
          prompts: [
            {
              time: "0–4s",
              frame: "FRAME 1 · GENESIS HORIZON",
              prompt:
                "Extreme wide cinematic shot. Volumetric light sweeping across an alien architectural landscape at dawn.",
            },
            {
              time: "4–8s",
              frame: "FRAME 2 · ENERGY CONVERGENCE",
              prompt:
                "Dynamic forward tracking camera rushing into swirling luminous particles and crystalline geometry.",
            },
            {
              time: "8–14s",
              frame: "FRAME 3 · THE CLIMAX REVEAL",
              prompt:
                "Explosion of brilliant gold and cyan light revealing the grand emblem with cinematic lens flares.",
            },
          ],
          tools: ["Google Flow", "After Effects", "Premiere Pro", "Suno AI"],
        },
      },
      {
        title: "Theme Reveal TSYP 14",
        client: "TSYP",
        year: "2025",
        kind: "video",
        aspect: "16/9",
        video: "https://vimeo.com/1229559239?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Official Theme Reveal · Cinematic AI Teaser",
          headline: "WHERE VISION MEETS DESTINY",
          overview:
            "The official cinematic theme reveal for TSYP 14. Combining celestial visual metaphors, custom 3D lighting, and atmospheric sound design to unveil this year's congress theme.",
          concept:
            "A cosmic voyage traversing starlit plains and astronomical phenomena, guiding the audience toward the grand revelation of the congress identity.",
          storyboard: [
            { title: "Starlit Expanse", caption: "Under the celestial dome, an illuminated figure gazes into the cosmos." },
            { title: "Atmospheric Pulse", caption: "Volumetric light pulses as constellations align across the sky." },
            { title: "The Grand Reveal", caption: "The congress identity materializes through starlight and energy." },
          ],
          prompts: [
            {
              time: "0–4s",
              frame: "FRAME 1 · CELESTIAL OPENING",
              prompt:
                "Cinematic night sky filled with luminous constellations. Camera pans smoothly across a mystical landscape as ambient starlight illuminates the horizon.",
            },
            {
              time: "4–8s",
              frame: "FRAME 2 · THE ALIGNMENT",
              prompt:
                "Camera accelerates toward a celestial anomaly. Particles of glowing stardust swirl in slow motion, forming geometric alignment lines.",
            },
            {
              time: "8–14s",
              frame: "FRAME 3 · THE THEME REVEAL",
              prompt:
                "Explosion of soft volumetric light. The congress emblem and theme typography emerge in sharp metallic relief with atmospheric smoke and flare.",
            },
          ],
          tools: ["Google Flow", "After Effects", "Photoshop", "Suno AI"],
        },
      },
      {
        title: "CEDACT 1.0 Opening Video",
        client: "CEDACT",
        year: "2025",
        kind: "video",
        aspect: "16/9",
        video: "https://vimeo.com/1229547474?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Congress Visual Identity · Opening Film",
          headline: "PIONEERING THE UNCHARTED",
          overview:
            "An electrifying opening visual experience crafted for CEDACT 1.0, blending hyper-stylized AI motion graphics, high-contrast neon palettes, and cutting-edge visual storytelling.",
          concept:
            "Bridging the gap between raw data streams and human creativity, visualizing the dawn of intelligent technological breakthroughs.",
          storyboard: [
            { title: "Digital Ignition", caption: "High-velocity data streams converging into glowing architecture." },
            { title: "Neural Matrix", caption: "Abstract algorithmic structures blooming into cinematic form." },
            { title: "Emblem Materialization", caption: "Shattering crystal and neon glow revealing the CEDACT mark." },
          ],
          prompts: [
            {
              time: "0–3s",
              frame: "FRAME 1 · DATA STREAMS",
              prompt:
                "High-speed macro camera zooming through illuminated fiber-optic neon circuits.",
            },
            {
              time: "3–7s",
              frame: "FRAME 2 · NEURAL BLOOM",
              prompt:
                "Synaptic neural pulses radiating outward, turning darkness into a vibrant computational grid.",
            },
            {
              time: "7–12s",
              frame: "FRAME 3 · CEDACT REVEAL",
              prompt:
                "Volumetric neon flare revealing metallic 3D typography with high-energy sound impact.",
            },
          ],
          tools: ["ComfyUI", "Higgsfield", "DaVinci Resolve", "After Effects"],
        },
      },
      {
        title: "Tamkeen Campaign",
        client: "Tamkeen",
        year: "2025",
        kind: "video",
        aspect: "9/16",
        video: "https://vimeo.com/1229560739?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Social Campaign · 9:16 Vertical Video",
          headline: "EMPOWERING FUTURE LEADERS",
          overview:
            "A fast-paced, high-engagement vertical commercial produced for mobile-first brand campaigns, emphasizing human potential and dynamic visual rhythm.",
          concept:
            "Optimized for Instagram Reels and TikTok, capturing audience attention within the first 1.5 seconds through sharp pacing and bold art direction.",
          storyboard: [
            { title: "Hook Transition", caption: "Ultra-fast dynamic zoom into the protagonist's eyes." },
            { title: "Action Montage", caption: "Rapid-fire sequence showcasing determination and craft." },
            { title: "Call to Action", caption: "Clean typographic lockup with sound design hit." },
          ],
          tools: ["Higgsfield", "Premiere Pro", "CapCut", "ElevenLabs"],
        },
      },
      {
        title: "MarketTalk — Episode 01",
        client: "MarketTalk",
        year: "2025",
        kind: "video",
        aspect: "9/16",
        video: "https://vimeo.com/1229552721?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Brand Identity & Podcast Series",
          headline: "VOICES OF MODERN COMMERCE",
          overview:
            "Cinematic vertical promotional spot introducing the MarketTalk series, focusing on bold typographic animations and charismatic storytelling.",
          concept:
            "High-contrast urban aesthetics paired with punchy visual metaphors to drive audience curiosity and social shares.",
          storyboard: [
            { title: "Urban Pulse", caption: "Fast shutter city lights reflecting in sunglasses." },
            { title: "The Dialogue", caption: "Engaging close-up interview aesthetics with cinematic depth." },
            { title: "Brand Identity", caption: "Sleek metallic MarketTalk emblem animation." },
          ],
          tools: ["Higgsfield", "After Effects", "Premiere Pro"],
        },
      },
      {
        title: "UR Coach Brand Film",
        client: "UR Coach",
        year: "2025",
        kind: "video",
        aspect: "9/16",
        video: "https://vimeo.com/1229552722?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Fitness & Mentorship Brand Spot",
          headline: "TRANSFORM YOUR POTENTIAL",
          overview:
            "An inspiring, high-octane commercial centered on discipline, performance, and athletic dedication, crafted for social ad campaigns.",
          concept:
            "Sweat, grit, and kinetic camera moves generated to simulate multi-camera athletic documentary footage.",
          storyboard: [
            { title: "Pre-Dawn Focus", caption: "Athlete lacing up in deep moody gym shadows." },
            { title: "Explosive Motion", caption: "High frame-rate capture of explosive athletic performance." },
            { title: "Triumph", caption: "Triumphant silhouette against sunset stadium floodlights." },
          ],
          tools: ["ComfyUI", "Higgsfield", "DaVinci Resolve"],
        },
      },
      {
        title: "MarketTalk — Episode 02",
        client: "MarketTalk",
        year: "2025",
        kind: "video",
        aspect: "9/16",
        video: "https://vimeo.com/1229552658?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Social Commercial · Spec Ad",
          headline: "DECODING THE TRENDS",
          overview:
            "Second installment in the MarketTalk promotional campaign, diving deeper into business strategies and disruptive entrepreneurship.",
          concept:
            "Sleek lighting, kinetic typography, and fluid camera pushes tailored to hold retention across vertical feeds.",
          storyboard: [
            { title: "Market Volatility", caption: "Visualizing market swings with abstract light waves." },
            { title: "Strategic Vision", caption: "Sharp character tracking through minimalist office spaces." },
            { title: "Episode Teaser", caption: "High-impact title cards with bass drop sound design." },
          ],
          tools: ["Higgsfield", "Google Flow", "After Effects"],
        },
      },
      {
        title: "Aloowat Brand Commercial",
        client: "Aloowat",
        year: "2025",
        kind: "video",
        aspect: "9/16",
        video: "https://vimeo.com/1229552655?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Consumer Brand Spot · Mobile First",
          headline: "INNOVATION IN MOTION",
          overview:
            "A vibrant, stylish commercial spotlighting brand energy and community impact with clean color palettes and energetic edits.",
          concept:
            "Dynamic lighting transitions and expressive AI characters set against bright contemporary backdrops.",
          storyboard: [
            { title: "Morning Spark", caption: "Crisp sun flare through urban glass as day begins." },
            { title: "Lifestyle Flow", caption: "Fast handheld motion following everyday heroes." },
            { title: "Signature Logo", caption: "Vibrant brand mark with playful micro-interactions." },
          ],
          tools: ["Higgsfield", "Premiere Pro", "Photoshop"],
        },
      },
      {
        title: "Episode 1 — Cinematic Series",
        client: "Original Series",
        year: "2025",
        kind: "video",
        aspect: "9/16",
        video: "https://vimeo.com/1229547473?fl=tl&fe=ec",
        caseStudy: {
          tagline: "Narrative Short · AI Series",
          headline: "ECHOES OF TOMORROW",
          overview:
            "The pilot chapter of an AI-generated narrative series exploring speculative futures, moody atmospheric tension, and character-driven drama.",
          concept:
            "Cinematic anamorphic lighting, shallow focal depth, and nuanced facial performances directed through generative workflows.",
          storyboard: [
            { title: "Neon Shadows", caption: "Rain-slicked asphalt reflecting hazy neon signboards." },
            { title: "The Encounter", caption: "Intense character eye-line match across a crowded alley." },
            { title: "Cliffhanger", caption: "Slow cinematic pull-back as mystery deepens." },
          ],
          tools: ["Google Flow", "ComfyUI", "DaVinci Resolve", "ElevenLabs"],
        },
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
