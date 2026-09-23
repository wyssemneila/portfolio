"use client";

import { useEffect, useState } from "react";
import { site, type Project, type Tool, type Interest } from "@/lib/site";
import { supabase } from "@/lib/supabase";

const TABS = [
  { id: "commercials", label: "AI Commercials" },
  { id: "design", label: "Design" },
  { id: "about", label: "About" },
  { id: "tools", label: "Tools" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// Blue → orange pastel gradients (matches the hero palette).
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #cfe0ff 0%, #dbe6ff 45%, #ffd9c2 100%)",
  "linear-gradient(135deg, #ffe0cc 0%, #ffd0b8 45%, #c9dcff 100%)",
  "linear-gradient(135deg, #d6e6ff 0%, #eaf0ff 45%, #ffe0d0 100%)",
  "linear-gradient(135deg, #ffe8d6 0%, #ffdcc4 45%, #d3e2ff 100%)",
];

const SHOT_GRADIENTS = [
  "linear-gradient(135deg,#1e4bd8,#3b6df5)",
  "linear-gradient(135deg,#ff5a1f,#ff8f5a)",
  "linear-gradient(135deg,#123cc4,#1e4bd8)",
  "linear-gradient(135deg,#ff7a3c,#ffb27a)",
  "linear-gradient(135deg,#2554e8,#6b8dff)",
  "linear-gradient(135deg,#ff5a1f,#ffd0b8)",
];

export default function Work() {
  const [active, setActive] = useState<TabId>("commercials");
  const [open, setOpen] = useState<Project | null>(null);
  const [commercials, setCommercials] = useState<Project[]>(site.work.commercials);
  const [design, setDesign] = useState<Project[]>(site.work.design);

  useEffect(() => {
    if (!supabase) return;

    async function loadProjects() {
      const { data, error } = await supabase!
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading projects from Supabase:", error);
        return;
      }

      if (data && data.length > 0) {
        const commData = data.filter((p) => p.category === "commercials");
        const desData = data.filter((p) => p.category === "design");

        setCommercials(() => {
          const dbMap = new Map(commData.map((p) => [p.title, p]));
          const merged = site.work.commercials.map((p) => dbMap.get(p.title) || p);
          commData
            .filter((p) => !site.work.commercials.some((s) => s.title === p.title))
            .forEach((p) => merged.push(p));
          return merged;
        });

        setDesign(() => {
          const dbMap = new Map(desData.map((p) => [p.title, p]));
          const merged = site.work.design.map((p) => dbMap.get(p.title) || p);
          desData
            .filter((p) => !site.work.design.some((s) => s.title === p.title))
            .forEach((p) => merged.push(p));
          return merged;
        });
      }
    }

    loadProjects();
  }, []);

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(80% 55% at 85% 0%, #dbe6ff 0%, rgba(219,230,255,0) 55%), radial-gradient(70% 50% at 8% 12%, #ffe4d3 0%, rgba(255,228,211,0) 55%), linear-gradient(180deg, #ffffff 0%, #f4f7ff 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">
        {/* Heading */}
        <div className="rise mb-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {site.work.heading}
          </h2>
          <p className="mt-2 text-slate-500">{site.work.subheading}</p>
        </div>

        {/* Tabs */}
        <div className="rise mb-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-slate-900/5 p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 ${
                  active === t.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {active === "commercials" && (
          <Grid projects={commercials} onOpen={setOpen} />
        )}
        {active === "design" && (
          <Grid projects={design} onOpen={setOpen} />
        )}
        {active === "about" && <About />}
        {active === "tools" && <Tools />}
      </div>

      {open && <Lightbox project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Grid({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      {projects.map((p, i) => (
        <div
          key={p.title}
          className="rise"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <Card
            project={p}
            gradient={CARD_GRADIENTS[i % CARD_GRADIENTS.length]}
            onOpen={onOpen}
          />
        </div>
      ))}
    </div>
  );
}

function getVimeoId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/);
  return match ? match[1] : null;
}

function Card({
  project,
  gradient,
  onOpen,
}: {
  project: Project;
  gradient: string;
  onOpen: (p: Project) => void;
}) {
  const isCollection = project.kind === "collection";
  const vimeoId = getVimeoId(project.video);

  return (
    <figure className="group">
      <div
        className={`block w-full rounded-3xl p-5 text-left transition-transform duration-300 group-hover:-translate-y-1 sm:p-7 ${
          isCollection ? "cursor-pointer" : ""
        }`}
        style={{ background: gradient }}
        onClick={() => isCollection && onOpen(project)}
      >
        <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-950 shadow-xl shadow-slate-900/25 ring-1 ring-white/30">
          {vimeoId ? (
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : project.kind === "video" && project.video ? (
            <video
              className="h-full w-full object-cover"
              src={project.video}
              poster={project.poster}
              controls
              playsInline
              preload="metadata"
            />
          ) : isCollection ? (
            <CollectionPreview project={project} />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
              <PlayIcon />
            </div>
          )}
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <div>
          <span className="font-semibold text-slate-800">{project.title}</span>
          <span className="ml-2 text-sm text-slate-500">
            {project.client} · {project.year}
          </span>
        </div>

        {project.caseStudy ? (
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-accent hover:scale-105 active:scale-95"
          >
            Case Study
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        ) : isCollection ? (
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-accent hover:scale-105 active:scale-95"
          >
            View Gallery
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        ) : null}
      </figcaption>
    </figure>
  );
}

function shotList(project: Project): string[] {
  if (project.images?.length) return project.images;
  return Array.from({ length: project.shots ?? 4 }, (_, i) => `shot-${i}`);
}

function CollectionPreview({ project }: { project: Project }) {
  const shots = shotList(project);
  return (
    <div className="grid h-full w-full grid-cols-3 gap-1 p-1">
      {shots.slice(0, 3).map((s, i) => (
        <Shot key={s} index={i} src={project.images?.[i]} />
      ))}
      <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {shots.length} shots ·  view
      </span>
    </div>
  );
}

function Shot({ index, src }: { index: number; src?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" className="h-full w-full rounded object-cover" />;
  }
  return (
    <div
      className="h-full w-full rounded"
      style={{ background: SHOT_GRADIENTS[index % SHOT_GRADIENTS.length] }}
    />
  );
}

function PlayIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-accent">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const shots = shotList(project);
  const vimeoId = getVimeoId(project.video);
  const cs = project.caseStudy;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/85 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative my-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#faf7f2] text-slate-900 shadow-2xl ring-1 ring-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky top navigation bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-200/80 bg-[#faf7f2]/95 px-6 py-4 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              {cs?.tagline || `${project.client} · ${project.year}`}
            </span>
            <span className="hidden text-sm font-semibold text-slate-700 sm:inline">
              {project.title}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-200/70 text-slate-600 transition hover:bg-stone-300 hover:text-slate-900"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Behance-Style Case Study Content */}
        {cs || project.kind === "video" ? (
          <div className="px-6 py-8 sm:px-12 sm:py-12">
            {/* Header: Title & Subtitle */}
            <div className="text-center">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                {project.client} · {project.year}
              </div>
              <h1 className="font-serif text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {cs?.headline || project.title}
              </h1>
              <div className="mx-auto my-5 flex items-center justify-center gap-3 text-stone-400">
                <span className="h-px w-12 bg-stone-300" />
                <span>✦</span>
                <span className="h-px w-12 bg-stone-300" />
              </div>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {cs?.overview || "An AI-powered cinematic production exploring generative video aesthetics, narrative craft, and high-end visual direction."}
              </p>
            </div>

            {/* Hero Video Embed */}
            <div
              className={`my-10 mx-auto overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-black/10 ${
                project.aspect === "9/16"
                  ? "max-w-[420px] aspect-[9/16]"
                  : "w-full aspect-video"
              }`}
            >
              <div className="relative h-full w-full">
                {vimeoId ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
                    className="h-full w-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : project.video ? (
                  <video
                    className="h-full w-full object-cover"
                    src={project.video}
                    poster={project.poster}
                    controls
                    playsInline
                    autoPlay
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-900 text-white">
                    <PlayIcon />
                  </div>
                )}
              </div>
            </div>

            {/* Creative Direction / Concept */}
            {cs?.concept && (
              <div className="my-10 rounded-2xl border border-stone-200/80 bg-white/80 p-6 sm:p-8 shadow-sm">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
                  Creative Direction & Concept
                </h3>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  {cs.concept}
                </p>
              </div>
            )}

            {/* Storyboard Section (Behance Style) */}
            {cs?.storyboard && cs.storyboard.length > 0 && (
              <div className="my-14">
                <div className="mb-8 text-center">
                  <h3 className="font-serif text-2xl font-bold uppercase tracking-[0.3em] text-slate-900 sm:text-3xl">
                    S T O R Y B O A R D
                  </h3>
                  <div className="mx-auto my-3 flex items-center justify-center gap-2 text-stone-400">
                    <span className="h-px w-8 bg-stone-300" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-8 bg-stone-300" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  {cs.storyboard.map((frame, i) => (
                    <div
                      key={frame.title}
                      className="group overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-sm transition hover:shadow-md"
                    >
                      <div
                        className="aspect-video w-full overflow-hidden rounded-xl"
                        style={{ background: SHOT_GRADIENTS[i % SHOT_GRADIENTS.length] }}
                      >
                        {frame.src ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={frame.src} alt={frame.title} className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-white/90">
                            <span className="font-serif text-sm font-semibold tracking-wider">
                              FRAME 0{i + 1}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-slate-900">{frame.title}</h4>
                        {frame.caption && (
                          <p className="mt-1 text-xs leading-relaxed text-slate-500">
                            {frame.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prompt Breakdown Timeline */}
            {cs?.prompts && cs.prompts.length > 0 && (
              <div className="my-14 rounded-3xl border border-stone-200/80 bg-white/90 p-6 sm:p-10 shadow-sm">
                <div className="mb-8 text-center">
                  <h3 className="font-serif text-xl font-bold uppercase tracking-[0.25em] text-slate-900 sm:text-2xl">
                    P R O M P T   &   D I R E C T I O N
                  </h3>
                  <div className="mx-auto my-3 flex items-center justify-center gap-2 text-stone-400">
                    <span className="h-px w-8 bg-stone-300" />
                    <span className="text-xs">✦</span>
                    <span className="h-px w-8 bg-stone-300" />
                  </div>
                </div>

                <div className="space-y-6">
                  {cs.prompts.map((p, i) => (
                    <div
                      key={i}
                      className="relative border-l-2 border-accent/40 pl-6 transition hover:border-accent"
                    >
                      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-stone-100 px-2 py-0.5 font-mono text-xs font-semibold text-stone-700">
                          {p.time}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          {p.frame}
                        </span>
                      </div>
                      <p className="mt-2 text-sm italic leading-relaxed text-slate-600">
                        &ldquo;{p.prompt}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Production Stack */}
            {cs?.tools && cs.tools.length > 0 && (
              <div className="my-10 text-center">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                  Production & AI Stack
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {cs.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-stone-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-14 border-t border-stone-200 pt-10 text-center">
              <h4 className="text-xl font-bold text-slate-900">
                Want a cinematic commercial for your brand?
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                Let&apos;s create something that stops the scroll.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-accent hover:scale-105"
              >
                Start a Project with Wissem ↗
              </a>
            </div>
          </div>
        ) : (
          /* Simple Collection Gallery View */
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="text-sm text-slate-500">
                {project.client} · {project.year}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {shots.map((s, i) => (
                <div key={s} className="aspect-square overflow-hidden rounded-lg">
                  <Shot index={i} src={project.images?.[i]} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function About() {
  const a = site.work.about;
  const [idx, setIdx] = useState(0);
  const img = a.images[idx] ?? a.images[0];

  return (
    <div className="rise grid items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      {/* Left: image + caption */}
      <div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-900/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.caption}
            className="h-full w-full object-cover"
          />
          {a.images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 shadow-sm backdrop-blur">
              {a.images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Image ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-6 bg-slate-800" : "w-2 bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <p className="mt-3 text-sm text-slate-500">{img.caption}</p>
      </div>

      {/* Right: intro + bio + CTA */}
      <div>
        <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          {a.greeting}
        </h3>
        <p className="mt-1 text-2xl font-semibold leading-snug text-slate-400 sm:text-3xl">
          {a.role.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
          {a.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center rounded-full bg-slate-100 px-6 py-3 text-sm font-medium text-slate-800 ring-1 ring-slate-900/10 transition hover:bg-slate-200"
        >
          {a.cta.label}
        </a>
      </div>

      {/* What I'm into right now — spans both columns */}
      <div className="md:col-span-2">
        <Interests />
      </div>
    </div>
  );
}

function Interests() {
  const it = site.work.interests;
  return (
    <div className="mt-14 border-t border-slate-900/10 pt-12">
      <h3 className="text-2xl font-semibold sm:text-3xl">
        <span className="text-slate-900">{it.heading[0]} </span>
        <span className="text-slate-400">{it.heading[1]}</span>
      </h3>
      <div className="mt-6 flex flex-wrap gap-3">
        {it.items.map((chip) => (
          <span
            key={chip.label}
            className="flex items-center gap-2.5 rounded-2xl bg-white py-2 pl-2 pr-4 shadow-sm ring-1 ring-slate-900/5"
          >
            <Thumb chip={chip} />
            <span className="text-sm font-medium text-slate-700">
              {chip.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Thumb({ chip }: { chip: Interest }) {
  const [err, setErr] = useState(false);
  if (chip.image && !err) {
    return (
      <span className="h-9 w-9 shrink-0 overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={chip.image}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setErr(true)}
        />
      </span>
    );
  }
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base"
      style={{ background: chip.grad }}
    >
      {chip.emoji}
    </span>
  );
}

function Tools() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {site.work.tools.map((tool, i) => (
        <div
          key={tool.name}
          className="rise flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <ToolLogo tool={tool} />
          <div>
            <div className="font-semibold text-slate-900">{tool.name}</div>
            <div className="text-sm text-slate-500">{tool.purpose}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ToolLogo({ tool }: { tool: Tool }) {
  const [err, setErr] = useState(false);
  const initials = tool.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Full-color app icon → light tile, image fills it like an app icon.
  if (tool.icon && !err) {
    return (
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-900/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tool.icon}
          alt={tool.name}
          className="h-full w-full object-cover"
          onError={() => setErr(true)}
        />
      </span>
    );
  }

  // White monochrome logo → brand-color tile.
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
      style={{ background: tool.bg, color: tool.fg }}
    >
      {tool.logo && !err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={tool.logo}
          alt={tool.name}
          className="h-6 w-6"
          onError={() => setErr(true)}
        />
      ) : (
        initials
      )}
    </span>
  );
}
