import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Us — Birria Pa La Cruda Catering, Los Angeles" },
      {
        name: "description",
        content:
          "Book Birria Pa La Cruda for weddings, backyards, studios and block parties across Los Angeles. Send an inquiry with your date, headcount and location.",
      },
      { property: "og:title", content: "Book Birria Pa La Cruda" },
      {
        property: "og:description",
        content: "Birria catering and pop-ups for events across Los Angeles.",
      },
    ],
  }),
  component: Booking,
});

const schema = z.object({
  name: z.string().trim().min(2, "Tell us your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  event_type: z.string().trim().max(120).optional().or(z.literal("")),
  event_date: z.string().trim().optional().or(z.literal("")),
  guest_count: z.string().trim().optional().or(z.literal("")),
  event_location: z.string().trim().max(200).optional().or(z.literal("")),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  social_link: z.string().trim().max(200).optional().or(z.literal("")),
  looking_for: z.string().trim().max(2000).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const fieldClass =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground";

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string | undefined;
  required?: boolean | undefined;
  error?: string | undefined;
  textarea?: boolean | undefined;
  placeholder?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={name} className="label-type text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={4} placeholder={placeholder} className={fieldClass} />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} className={fieldClass} />
      )}
      {error ? <p className="mt-2 text-sm text-ember">{error}</p> : null}
    </div>
  );
}

function Booking() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");

    const d = parsed.data;
    const guests = d.guest_count ? Number.parseInt(d.guest_count, 10) : null;

    const { error } = await supabase.from("booking_inquiries").insert({
      name: d.name,
      email: d.email,
      phone: d.phone || null,
      event_type: d.event_type || null,
      event_date: d.event_date || null,
      guest_count: Number.isFinite(guests as number) ? guests : null,
      event_location: d.event_location || null,
      budget: d.budget || null,
      social_link: d.social_link || null,
      looking_for: d.looking_for || null,
      message: d.message || null,
    });

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("done");
  }

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="label-type text-muted-foreground">Book Us</p>
          <h1 className="font-type mt-6 text-4xl leading-[1.05] md:text-5xl">
            Tell us about your event
          </h1>
          <p className="mt-6 text-muted-foreground">
            Weddings, backyards, studios, block parties. Send the details and we'll get back to you
            with availability and pricing.
          </p>
        </div>

        <div className="md:col-span-8">
          {status === "done" ? (
            <div className="border border-border p-10">
              <p className="font-type text-2xl">Inquiry received.</p>
              <p className="mt-4 text-muted-foreground">
                Thanks — we've got your details and will follow up by email.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="label-type mt-8 underline underline-offset-8"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required error={errors["name"]} />
              <Field label="Email" name="email" type="email" required error={errors["email"]} />
              <Field label="Phone" name="phone" type="tel" error={errors["phone"]} />
              <Field
                label="Event type"
                name="event_type"
                placeholder="Wedding, birthday, studio…"
                error={errors["event_type"]}
              />
              <Field label="Event date" name="event_date" type="date" error={errors["event_date"]} />
              <Field
                label="Guest count"
                name="guest_count"
                type="number"
                error={errors["guest_count"]}
              />
              <Field
                label="Location"
                name="event_location"
                placeholder="Neighborhood or venue"
                error={errors["event_location"]}
              />
              <Field label="Budget" name="budget" placeholder="Optional" error={errors["budget"]} />
              <div className="sm:col-span-2">
                <Field
                  label="Instagram / website"
                  name="social_link"
                  error={errors["social_link"]}
                />
              </div>
              <div className="sm:col-span-2">
                <Field
                  label="What are you looking for?"
                  name="looking_for"
                  textarea
                  placeholder="Tacos on site, catering trays, full setup…"
                  error={errors["looking_for"]}
                />
              </div>
              <div className="sm:col-span-2">
                <Field label="Additional details" name="message" textarea error={errors["message"]} />
              </div>

              {status === "error" ? (
                <p className="text-sm text-ember sm:col-span-2">
                  Something went wrong sending your inquiry. Please try again.
                </p>
              ) : null}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="label-type bg-foreground px-7 py-4 text-background transition-opacity hover:opacity-85 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Submit Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
