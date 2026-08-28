import { createFileRoute, Link } from "@tanstack/react-router";

import { upcoming, collaborations, scheduleNote, type PopUp } from "@/content/schedule";
import { INSTAGRAM_URL } from "@/components/site-footer";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Birria Pa La Cruda Pop-Ups in LA" },
      {
        name: "description",
        content:
          "Upcoming Birria Pa La Cruda pop-ups, locations, times and collaborations across Los Angeles.",
      },
      { property: "og:title", content: "Schedule — Birria Pa La Cruda" },
      {
        property: "og:description",
        content: "Where and when to find the pop-up next.",
      },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
  component: SchedulePage,
});

function PopUpRow({ item }: { item: PopUp }) {
  return (
    <li className="grid gap-4 border-t border-border py-8 md:grid-cols-12">
      <div className="md:col-span-3">
        <p className="font-type text-lg">{item.date}</p>
        <p className="label-type mt-1 text-muted-foreground">{item.time}</p>
      </div>
      <div className="md:col-span-6">
        <p className="font-type text-lg">{item.place}</p>
        <p className="mt-1 text-sm text-muted-foreground">{item.address}</p>
        {item.notes ? <p className="mt-2 text-sm text-muted-foreground">{item.notes}</p> : null}
      </div>
      <div className="md:col-span-3 md:text-right">
        <a
          href={item.mapUrl ?? `https://www.google.com/maps/search/${encodeURIComponent(item.address)}`}
          target="_blank"
          rel="noreferrer"
          className="label-type underline underline-offset-8 hover:text-muted-foreground"
        >
          Directions
        </a>
      </div>
    </li>
  );
}

function SchedulePage() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <p className="label-type text-muted-foreground">Schedule</p>
      <h1 className="font-type mt-6 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
        Where the pot lands next.
      </h1>
      <p className="mt-6 max-w-xl text-muted-foreground">{scheduleNote}</p>

      <h2 className="font-type mt-20 text-2xl md:text-3xl">Upcoming pop-ups</h2>
      <ul className="mt-8 border-b border-border">
        {upcoming.map((item, i) => (
          <PopUpRow key={`${item.place}-${i}`} item={item} />
        ))}
      </ul>

      <h2 className="font-type mt-20 text-2xl md:text-3xl">Collaborations &amp; special events</h2>
      <ul className="mt-8 border-b border-border">
        {collaborations.map((item, i) => (
          <PopUpRow key={`${item.place}-collab-${i}`} item={item} />
        ))}
      </ul>

      <div className="mt-20 grid gap-6 border-t border-border pt-10 md:grid-cols-2">
        <p className="font-type text-xl">
          Dates move. Instagram is always the fastest place to catch us.
        </p>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="label-type bg-ember px-7 py-4 text-ink transition-opacity hover:opacity-85"
          >
            @birriapalacruda
          </a>
          <Link
            to="/booking"
            className="label-type border border-border px-7 py-4 transition-colors hover:bg-foreground hover:text-background"
          >
            Book the pop-up
          </Link>
        </div>
      </div>
    </section>
  );
}
