import { createFileRoute, Link } from "@tanstack/react-router";

import heroAsset from "@/assets/el-sereno-hero.png.asset.json";
import tacos from "@/assets/food-tacos.jpg";
import consome from "@/assets/food-consome.jpg";
import overhead from "@/assets/food-overhead.jpg";
import { INSTAGRAM_URL } from "@/components/site-footer";
import { upcoming, scheduleNote } from "@/content/schedule";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Birria Pa La Cruda — El Sereno Birria Pop-Up, Los Angeles" },
      {
        name: "description",
        content:
          "Birria, community and craft out of El Sereno. Tacos, quesadillas and consomé from a Los Angeles pop-up you can book for your next event.",
      },
      { property: "og:title", content: "Birria Pa La Cruda — El Sereno Birria Pop-Up" },
      {
        property: "og:description",
        content: "Birria, community and craft out of El Sereno, Los Angeles.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const next = upcoming[0];

  if (!next) return null;

  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Downtown Los Angeles skyline at sunset seen from the hills of El Sereno"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

        <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
          <p className="label-type rise text-ember">Est. in El Sereno &middot; Los Angeles</p>
          <h1 className="font-type rise mt-6 max-w-4xl text-4xl leading-[1.05] text-ink-foreground sm:text-6xl lg:text-7xl">
            Birria Pa La Cruda
          </h1>
          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/80 md:text-lg">
            A Sunday pot of birria on a hill in El Sereno turned into something the whole city
            drives for. Slow-cooked, hand-served, and built around the people who show up.
          </p>

          <div className="rise mt-10 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="label-type bg-ember px-7 py-4 text-ink transition-opacity hover:opacity-85"
            >
              Book Now
            </Link>
            <Link
              to="/menu"
              className="label-type border border-ink-foreground/40 px-7 py-4 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Menu
            </Link>
            <Link
              to="/schedule"
              className="label-type border border-ink-foreground/40 px-7 py-4 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Schedule
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="label-type text-muted-foreground md:col-span-3">01 / The Plate</p>
          <p className="font-type text-2xl leading-snug md:col-span-9 md:text-4xl">
            El Sereno raised. Birria first. Consomé always. We cook the way our families cook —
            slow, seasoned, and for a crowd.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <figure className="group overflow-hidden">
            <img
              src={tacos}
              alt="Tray of birria tacos"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="label-type mt-3 text-muted-foreground">Tacos</figcaption>
          </figure>
          <figure className="group overflow-hidden">
            <img
              src={consome}
              alt="Cup of steaming consomé"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="label-type mt-3 text-muted-foreground">Consomé</figcaption>
          </figure>
          <figure className="group overflow-hidden">
            <img
              src={overhead}
              alt="Overhead plate of birria with salsa and lime"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="label-type mt-3 text-muted-foreground">Plates</figcaption>
          </figure>
        </div>

        <Link to="/gallery" className="label-type mt-10 inline-block underline underline-offset-8">
          See the full archive
        </Link>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <p className="label-type text-ink-foreground/50 md:col-span-3">02 / Next Up</p>
          <div className="md:col-span-9">
            <h2 className="font-type text-3xl md:text-5xl">Upcoming pop-up</h2>
            <dl className="mt-10 divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
              <div className="grid gap-2 py-6 md:grid-cols-3">
                <dt className="label-type text-ink-foreground/50">Date</dt>
                <dd className="md:col-span-2">{next.date}</dd>
              </div>
              <div className="grid gap-2 py-6 md:grid-cols-3">
                <dt className="label-type text-ink-foreground/50">Time</dt>
                <dd className="md:col-span-2">{next.time}</dd>
              </div>
              <div className="grid gap-2 py-6 md:grid-cols-3">
                <dt className="label-type text-ink-foreground/50">Where</dt>
                <dd className="md:col-span-2">
                  {next.place}
                  <span className="block text-ink-foreground/60">{next.address}</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-ink-foreground/50">{scheduleNote}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/schedule"
                className="label-type border border-ink-foreground/40 px-7 py-4 transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                Full schedule
              </Link>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="label-type bg-ember px-7 py-4 text-ink transition-opacity hover:opacity-85"
              >
                @birriapalacruda
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="label-type text-muted-foreground md:col-span-3">03 / Book Us</p>
          <div className="md:col-span-9">
            <h2 className="font-type text-3xl leading-tight md:text-5xl">
              Weddings, backyards, studios, block parties.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Tell us the date, the headcount, and the vibe. We bring the pot, the tortillas and the
              consomé.
            </p>
            <Link
              to="/booking"
              className="label-type mt-10 inline-block bg-foreground px-7 py-4 text-background transition-opacity hover:opacity-85"
            >
              Start an inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
