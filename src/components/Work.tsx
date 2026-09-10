"use client";

import { useEffect, useState } from "react";
import { site, type Project, type Tool } from "@/lib/site";

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
          <Grid projects={site.work.commercials} onOpen={setOpen} />
        )}
        {active === "design" && (
          <Grid projects={site.work.design} onOpen={setOpen} />
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

  return (
    <figure className="group">
      <button
        type="button"
        onClick={() => isCollection && onOpen(project)}
        className={`block w-full rounded-3xl p-5 text-left transition-transform duration-300 group-hover:-translate-y-1 sm:p-8 ${
          isCollection ? "cursor-pointer" : "cursor-default"
        }`}
        style={{ background: gradient }}
      >
        <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900 shadow-xl shadow-slate-900/20 ring-1 ring-white/40">
          {project.kind === "video" && project.video ? (
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
      </button>
      <figcaption className="mt-4 flex items-center justify-between px-1">
        <span className="font-medium text-slate-800">{project.title}</span>
        <span className="text-sm text-slate-500">
          {project.client} · {project.year}
        </span>
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
            <p className="text-sm text-slate-500">
              {project.client} · {project.year}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900/5 text-slate-600 transition hover:bg-slate-900/10 hover:text-slate-900"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {shots.map((s, i) => (
            <div key={s} className="aspect-square overflow-hidden rounded-lg">
              <Shot index={i} src={project.images?.[i]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="rise mx-auto max-w-3xl rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-900/5 backdrop-blur sm:p-12">
      <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
        {site.work.about.text}
      </p>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {site.work.about.highlights.map((h) => (
          <div key={h.v} className="text-center">
            <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              {h.k}
            </div>
            <div className="mt-1 text-xs text-slate-500 sm:text-sm">{h.v}</div>
          </div>
        ))}
      </div>
    </div>
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
