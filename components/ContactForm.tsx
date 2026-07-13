"use client";

import type { FormEvent } from "react";
import { contactEmail } from "@/lib/seo";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") ?? "").trim();
    const lastName = String(form.get("lastName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const name = [firstName, lastName].filter(Boolean).join(" ");

    const subject = encodeURIComponent(`Project enquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", "", message]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="grid gap-x-10 gap-y-10 lg:pt-14" onSubmit={handleSubmit}>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        <label className="studio-field">
          <span>First name</span>
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label className="studio-field">
          <span>Last name</span>
          <input name="lastName" autoComplete="family-name" required />
        </label>
      </div>

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        <label className="studio-field">
          <span>Email*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="studio-field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <label className="studio-field">
        <span>Message*</span>
        <textarea name="message" rows={5} required />
      </label>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          className="min-w-44 border border-ivory bg-ivory px-8 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-obsidian transition-colors duration-300 hover:bg-transparent hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Submit
        </button>
        <p className="max-w-md text-xs leading-5 text-stone">
          Submitting opens your email app with the message prepared for {contactEmail}.
        </p>
      </div>
    </form>
  );
}
