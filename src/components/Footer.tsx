import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-14 pt-10">
        <div className="mb-10 h-px w-full bg-slate-900/10" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-10 w-10 rounded-full bg-cover bg-top ring-1 ring-slate-900/10"
                style={{ backgroundImage: `url(${site.portrait})` }}
              />
              <span className="text-lg font-semibold text-slate-900">
                {site.brand}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              {site.description}
            </p>
            <p className="mt-4 text-xs text-slate-400">
              © {new Date().getFullYear()} {site.brand} — {site.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Links</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              {["Work", "About", "Tools"].map((l) => (
                <li key={l}>
                  <a href="#work" className="transition hover:text-slate-900">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-slate-900"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-slate-900"
                >
                  Schedule a call
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3 text-slate-400">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-slate-900/10 transition hover:text-slate-900 hover:ring-slate-900/25"
                >
                  <FooterIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ name }: { name: "linkedin" | "behance" | "gmail" | "whatsapp" }) {
  const cls = "h-4 w-4";
  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.95 1.8-1.95 3.6-1.95 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21H9z" />
        </svg>
      );
    case "behance":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
          <path d="M8.7 7.3c.63 0 1.2.05 1.72.16.5.1.94.28 1.3.52.36.24.64.57.83.98.19.41.28.92.28 1.53 0 .66-.15 1.2-.45 1.64-.3.43-.75.79-1.34 1.06.8.23 1.4.63 1.8 1.2.4.58.6 1.27.6 2.08 0 .66-.13 1.22-.38 1.7-.26.48-.6.87-1.03 1.17-.43.3-.93.52-1.48.66-.55.14-1.12.21-1.7.21H2V7.3zM8.35 12.1c.52 0 .95-.12 1.28-.37.33-.25.5-.65.5-1.2 0-.3-.06-.56-.17-.75a1.2 1.2 0 0 0-.46-.46 1.9 1.9 0 0 0-.66-.23 4.3 4.3 0 0 0-.78-.07H4.9v3.08zM8.5 17.1c.29 0 .56-.03.82-.09.26-.06.48-.15.68-.29.19-.13.35-.31.46-.54.11-.23.17-.52.17-.87 0-.68-.19-1.17-.57-1.46-.38-.29-.9-.44-1.53-.44H4.9v3.69zM16.4 16.9c.35.34.86.51 1.53.51.48 0 .89-.12 1.23-.36.34-.24.55-.5.63-.77h2.02c-.32 1-.82 1.72-1.5 2.16-.67.43-1.49.65-2.44.65-.66 0-1.26-.11-1.79-.32a3.76 3.76 0 0 1-1.35-.9 4.02 4.02 0 0 1-.85-1.4 5.2 5.2 0 0 1-.3-1.8c0-.64.1-1.23.31-1.78.2-.55.5-1.02.87-1.42.38-.4.83-.71 1.35-.94.52-.23 1.1-.34 1.73-.34.7 0 1.32.14 1.85.41.53.27.96.64 1.3 1.1.34.46.58.98.73 1.57.15.59.2 1.2.16 1.85h-6.03c0 .68.18 1.19.53 1.53zM19.4 12.6c-.28-.3-.72-.47-1.29-.47-.37 0-.68.06-.92.19-.24.13-.44.28-.58.47-.14.19-.24.39-.3.6-.05.21-.09.4-.1.57h3.75c-.06-.59-.26-1.03-.55-1.35zM15.1 8.1h4.7v1.14h-4.7z" />
        </svg>
      );
    case "gmail":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
          <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4H4l8 6 8-6h.5A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5H18V9.7l-6 4.5-6-4.5V20H3.5A1.5 1.5 0 0 1 2 18.5z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.1-.3.2-.5 0a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3z" />
        </svg>
      );
  }
}
