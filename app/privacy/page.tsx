import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, contactEmail, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy information for the ${siteName} website.`,
  alternates: { canonical: absoluteUrl("/privacy") }
};

export default function PrivacyPage() {
  return (
    <main className="studio-container py-20 lg:py-28">
      <div className="grid gap-12 border-t border-ivory/10 pt-8 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
        <div>
          <p className="studio-eyebrow">Legal</p>
          <h1 className="studio-page-title mt-8">Privacy</h1>
        </div>
        <div className="max-w-3xl space-y-8 text-base font-light leading-8 text-stone">
          <p className="text-ivory">Last updated: 13 July 2026</p>
          <p>
            This portfolio does not use advertising cookies, user accounts, or
            on-site analytics. Standard technical logs may be processed by the
            hosting provider to deliver and protect the website.
          </p>
          <p>
            The contact form prepares an email in your own email application.
            Information is sent only when you choose to send that email, and is
            then used to respond to your enquiry and discuss potential work.
          </p>
          <p>
            External links are governed by the privacy policies of their
            respective services. To ask about, correct, or delete information
            you have emailed to the studio, contact{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-ivory underline decoration-ivory/25 underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono text-[11px] uppercase tracking-widest text-ivory underline decoration-ivory/25 underline-offset-4"
          >
            Contact the studio
          </Link>
        </div>
      </div>
    </main>
  );
}
