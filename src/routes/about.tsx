import { createFileRoute, Link } from "@tanstack/react-router";

import chefHands from "@/assets/chef-hands.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Birria Pa La Cruda" },
      {
        name: "description",
        content:
          "The story of Birria Pa La Cruda and Chef Carlos Jaquez: a Sunday pop-up in El Sereno rooted in birria, family recipes and Los Angeles food culture.",
      },
      { property: "og:title", content: "About — Birria Pa La Cruda" },
      {
        property: "og:description",
        content: "From a Sunday pop-up in El Sereno to a Los Angeles birria institution in progress.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-16 md:px-10 md:pt-28">
        <p className="label-type text-muted-foreground">About</p>
        <h1 className="font-type mt-6 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
          It started with one pot, one Sunday, one street in El Sereno.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>
                Birria Pa La Cruda began the way most good things in Los Angeles begin — small, on a
                weekend, for the neighbors. A pot of birria on a Sunday in El Sereno, a folding
                table, and a line that got longer every week.
              </p>
              <p>
                Chef Carlos Jaquez cooks birria the way it was handed to him: patient, generous, and
                built on the broth. Chiles toasted, meat braised until it gives, consomé that earns
                the second cup. Nothing about it is fast, and that is the point.
              </p>
              <p>
                The name is a wink at what birria has always done best — it takes care of you the
                morning after. But the work underneath it is serious: quality ingredients, Mexican
                food traditions carried forward, and a plate that respects both.
              </p>
              <p>
                What grew out of that Sunday is a mobile kitchen that shows up for the city —
                pop-ups, collaborations, private events, block parties. Same pot. Same hands. More
                people around the table.
              </p>
            </div>

            <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
              <div>
                <p className="label-type text-muted-foreground">Rooted in</p>
                <p className="font-type mt-2 text-xl">El Sereno</p>
              </div>
              <div>
                <p className="label-type text-muted-foreground">Built on</p>
                <p className="font-type mt-2 text-xl">Birria &amp; consomé</p>
              </div>
              <div>
                <p className="label-type text-muted-foreground">Made for</p>
                <p className="font-type mt-2 text-xl">Los Angeles</p>
              </div>
            </div>

            <Link
              to="/booking"
              className="label-type mt-12 inline-block bg-foreground px-7 py-4 text-background transition-opacity hover:opacity-85"
            >
              Work with us
            </Link>
          </div>

          <div className="space-y-4 md:col-span-5">
            <figure>
              <img
                src={chefHands}
                alt="Hands ladling birria from a large pot"
                width={1200}
                height={1500}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
              <figcaption className="label-type mt-3 text-muted-foreground">
                Chef Carlos Jaquez / placeholder image
              </figcaption>
            </figure>
            <figure>
              <img
                src={community}
                alt="Neighbors eating together at an outdoor pop-up"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="label-type mt-3 text-muted-foreground">
                Sunday in the neighborhood / placeholder image
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
