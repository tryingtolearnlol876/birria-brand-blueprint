import { Link } from "@tanstack/react-router";

export const INSTAGRAM_URL = "https://www.instagram.com/birriapalacruda/";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-type text-2xl leading-none md:text-3xl">Birria Pa La Cruda</p>
            <p className="label-type mt-3 text-ink-foreground/60">
              El Sereno &middot; Los Angeles, California
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/menu" className="label-type text-ink-foreground/70 hover:text-ink-foreground">
              Menu
            </Link>
            <Link to="/schedule" className="label-type text-ink-foreground/70 hover:text-ink-foreground">
              Schedule
            </Link>
            <Link to="/gallery" className="label-type text-ink-foreground/70 hover:text-ink-foreground">
              Gallery
            </Link>
            <Link to="/booking" className="label-type text-ink-foreground/70 hover:text-ink-foreground">
              Book
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="label-type text-ember hover:opacity-80"
            >
              Instagram
            </a>
          </div>
        </div>

        <p className="label-type mt-14 text-ink-foreground/40">
          &copy; {new Date().getFullYear()} Birria Pa La Cruda
        </p>
      </div>
    </footer>
  );
}
