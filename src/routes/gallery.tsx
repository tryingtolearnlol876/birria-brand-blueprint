import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";

import { galleryCategories, galleryItems, type GalleryCategory } from "@/content/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Birria Pa La Cruda, El Sereno" },
      {
        name: "description",
        content:
          "Photo archive from Birria Pa La Cruda: tacos, consomé, Sunday pop-ups, events, collaborations and catering across Los Angeles.",
      },
      { property: "og:title", content: "Gallery — Birria Pa La Cruda" },
      {
        property: "og:description",
        content: "Photos from the pot, the pop-ups and the events around Los Angeles.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);
  const open = openIndex === null ? null : items[openIndex];

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <p className="label-type text-muted-foreground">The Archive</p>
      <h1 className="font-type mt-6 max-w-3xl text-4xl leading-[1.05] md:text-6xl">Gallery</h1>
      <p className="mt-6 max-w-xl text-muted-foreground">
        Placeholder photography — swap these for real images from the pop-ups and events.
      </p>

      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-4">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setOpenIndex(null);
            }}
            className={`label-type transition-colors ${
              filter === cat ? "text-foreground underline underline-offset-8" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure
            key={item.src + i}
            className={`group cursor-zoom-in overflow-hidden ${item.wide ? "lg:col-span-2" : ""}`}
          >
            <button type="button" onClick={() => setOpenIndex(i)} className="block w-full text-left">
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  item.wide ? "aspect-16/10" : "aspect-4/5"
                }`}
              />
              <figcaption className="label-type mt-3 text-muted-foreground">
                {item.caption}
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setOpenIndex(null)}
            className="absolute right-6 top-6 text-ink-foreground"
          >
            <X className="size-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={open.src}
              alt={open.alt}
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="label-type mt-4 text-ink-foreground/60">
              {open.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
