import type { Metadata } from "next";
import { absoluteUrl, contactEmail, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms",
  description: `Website terms for ${siteName}.`,
  alternates: { canonical: absoluteUrl("/terms") }
};

export default function TermsPage() {
  return (
    <main className="studio-container py-20 lg:py-28">
      <div className="grid gap-12 border-t border-ivory/10 pt-8 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
        <div>
          <p className="studio-eyebrow">Legal</p>
          <h1 className="studio-page-title mt-8">Terms</h1>
        </div>
        <div className="max-w-3xl space-y-8 text-base font-light leading-8 text-stone">
          <p className="text-ivory">Last updated: 13 July 2026</p>
          <p>
            This website presents the work of Francesco Cappuccio and
            Cappuccio Design Studio. Its content is provided for portfolio and
            general information purposes.
          </p>
          <p>
            Unless otherwise credited, the text, project descriptions, images,
            and design work shown here may not be reproduced or used for
            commercial purposes without written permission.
          </p>
          <p>
            Links to third-party websites are provided for context. Their
            content and availability are controlled by their respective owners.
            Any design commission or collaboration is governed by a separate
            written agreement, not by these website terms.
          </p>
          <p>
            Questions about permitted use can be sent to{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-ivory underline decoration-ivory/25 underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
