# Birria Pa La Cruda — Website

A minimal, editorial site for the El Sereno birria business: typewriter headings, charcoal/grey/off-white palette, big photography, no invented business facts.

## Design direction

- Palette: near-black charcoal, warm grey, off-white. Sunset-amber accent pulled from the El Sereno photo, used sparingly (buttons, small labels).
- Type: typewriter face (Special Elite / Courier Prime) for headings, nav, labels and captions; clean sans (Inter-class) for body.
- Layout: wide margins, large type, full-bleed photography, thin rules instead of card borders. Restrained motion — slow fades on scroll only.
- The uploaded El Sereno skyline photo becomes the home hero, uploaded as a hosted asset (not embedded from chat).
- Food/event imagery: generated placeholder photography in the same warm, hazy register, clearly swappable later.

## Pages

1. **Home** (`/`) — full-bleed El Sereno hero with wordmark and short brand statement; three buttons: Book Now, Menu, Schedule. Below: featured food strip, "Next pop-up" block (placeholder), Instagram link (@birriapalacruda).
2. **About** (`/about`) — story of the business and Chef Carlos Jaquez, framed around the Sunday pop-up in El Sereno, birria, community, and LA food culture. Written as brand narrative only; no dates, awards, or claims invented.
3. **Menu** (`/menu`) — categories (Tacos, Quesadillas, Consomé, Plates, Extras) rendered from one data file. Items and prices are marked as placeholders for the client to fill in.
4. **Schedule** (`/schedule`) — upcoming pop-ups list: date, time, location, notes, map link, plus a collaborations block. Also from one data file, placeholder entries.
5. **Gallery** (`/gallery`) — editorial photo archive, mixed-size grid with typewriter captions and filter labels (Food, Pop-ups, Events, Collabs, Catering); click to open a lightweight lightbox.
6. **Booking** (`/booking`) — inquiry form: name, email, phone, event type, date, guest count, location, budget, Instagram/website, what they're looking for, additional details. Zod validation, clear "Submit Inquiry" button, success state.

Shared header (typewriter nav) and footer (Instagram, El Sereno / Los Angeles line) in the root layout.

## Booking submissions

Enable Lovable Cloud so inquiries are stored in a database table and are not lost. Submissions insert-only from the public form; reads restricted. If you'd rather keep it no-backend for now, say so and the form will instead open a prefilled email — everything else stays the same.

## Technical notes

- TanStack Start routes: `index`, `about`, `menu`, `schedule`, `gallery`, `booking`, each with its own `head()` metadata (title, description, og/twitter).
- Client-editable content lives in `src/content/menu.ts`, `src/content/schedule.ts`, `src/content/gallery.ts` — plain arrays with comments.
- Tokens (colors, fonts, radius) defined in `src/styles.css` via `@theme`; fonts loaded with a `<link>` in `__root.tsx`.
- Hero photo published through Lovable Assets and imported via its pointer JSON.
- No real menu items, prices, locations, dates, or phone numbers — clearly labeled placeholders throughout.
