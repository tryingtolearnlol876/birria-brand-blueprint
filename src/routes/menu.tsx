import { createFileRoute, Link } from "@tanstack/react-router";

import quesadilla from "@/assets/food-quesadilla.jpg";
import { menuSections, menuNote } from "@/content/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Birria Pa La Cruda" },
      {
        name: "description",
        content:
          "Birria tacos, quesabirria quesadillas, consomé and rotating specials from Birria Pa La Cruda in Los Angeles.",
      },
      { property: "og:title", content: "Menu — Birria Pa La Cruda" },
      {
        property: "og:description",
        content: "Tacos, quesadillas, consomé and rotating specials.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-12 md:px-10 md:pt-28">
        <p className="label-type text-muted-foreground">Menu</p>
        <h1 className="font-type mt-6 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
          Everything starts in the broth.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">{menuNote}</p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10">
        <img
          src={quesadilla}
          alt="Cheesy birria quesadilla pulled apart"
          width={1400}
          height={1000}
          loading="lazy"
          className="aspect-21/9 w-full object-cover"
        />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="space-y-20">
          {menuSections.map((section) => (
            <div key={section.id} className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-type text-2xl md:text-3xl">{section.title}</h2>
                {section.note ? (
                  <p className="mt-3 text-sm text-muted-foreground">{section.note}</p>
                ) : null}
              </div>

              <ul className="divide-y divide-border border-t border-border md:col-span-8">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-8 py-6">
                    <div>
                      <p className="font-type text-lg">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {item.price ? (
                      <p className="label-type shrink-0 text-muted-foreground">{item.price}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <p className="font-type text-xl">Feeding a crowd?</p>
          <Link
            to="/booking"
            className="label-type mt-6 inline-block bg-foreground px-7 py-4 text-background transition-opacity hover:opacity-85"
          >
            Catering inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
