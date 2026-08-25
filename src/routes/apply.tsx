import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { buildMeta } from "@/lib/seo";
import { assets } from "@/lib/site-content";

export const Route = createFileRoute("/apply")({
  head: () =>
    buildMeta({
      title: "Apply Now | Compass Debt Solutions",
      description:
        "Start your free debt relief application with Compass Debt Solutions. Complete the secure form to begin your path toward financial freedom.",
      path: "/apply",
      keywords: "debt relief application, apply for debt help Arizona, Compass Debt Solutions application",
    }),
  component: ApplyPage,
});

function ApplyPage() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]',
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <PageHero
        title="Start Your Application"
        subtitle="Complete the secure form below and a Compass specialist will follow up shortly."
        image={assets.contactHero}
        imageAlt="Compass Debt Solutions consultation"
        eyebrow="Free debt relief application"
        priority
      />

      <section className="section-band">
        <div className="page-shell">
          <div className="glass-panel p-4 md:p-8">
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/aqivQJKNiQ5F2KGvIhbE"
              id="aqivQJKNiQ5F2KGvIhbE"
              title="survey"
              scrolling="no"
              className="w-full min-h-[600px] border-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}
