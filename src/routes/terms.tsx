import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { buildMeta } from "@/lib/seo";
import { assets } from "@/lib/site-content";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildMeta({
      title: "Terms and Conditions | Compass Debt Solutions",
      description:
        "Review the Terms and Conditions governing your use of the Compass Debt Solutions LLC website and services.",
      path: "/terms",
    }),
  component: TermsPage,
});

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      {title ? (
        <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        subtitle="The terms that govern your use of our website and services."
        image={assets.aboutUs}
        imageAlt="Compass Debt Solutions terms and conditions"
        eyebrow="Legal"
      />

      <section className="section-band">
        <div className="page-shell">
          <article className="glass-panel p-8 md:p-12 space-y-6 text-base leading-8 text-muted-foreground">
            <header className="space-y-1">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Terms and Conditions
              </h1>
              <p className="text-sm">
                <strong className="text-foreground">Last Updated:</strong> 07/29/2026
              </p>
              <p className="text-sm">
                <strong className="text-foreground">Compass Debt Solutions LLC</strong>
              </p>
              <p className="text-sm">1542 W. Maplewood St</p>
              <p className="text-sm">Chandler, AZ 85286</p>
              <p className="text-sm">Phone: (623) 323-3658</p>
            </header>

            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using this website operated by Compass Debt Solutions LLC (“we,” “us,” or “our”), you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </Section>

            <Section title="2. Purpose of Our Services">
              <p>
                Compass Debt Solutions LLC is not a lender or creditor. We are a debt resolution company that assists consumers in evaluating options for resolving qualifying unsecured debts. We do not provide legal or tax advice, and results vary based on each consumer's individual financial situation.
              </p>
            </Section>

            <Section title="3. No Guarantees or Endorsements">
              <p>
                We do not guarantee that any consumer will qualify for or successfully complete any debt resolution program. Any estimates, savings, or timelines discussed are not guarantees and depend on individual circumstances.
              </p>
            </Section>

            <Section title="4. User Responsibilities">
              <p>By using this website, you agree that:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>You are at least 18 years old.</li>
                <li>Any information you provide is true, complete, and accurate.</li>
                <li>You will use this site only for lawful purposes and in compliance with these Terms and Conditions.</li>
              </ul>
            </Section>

            <Section title="5. Communication Consent">
              <p>
                By submitting your contact information and checking the consent box on our forms, you agree to be contacted by Compass Debt Solutions LLC through phone calls, text messages, or emails for informational purposes. Messages may include appointment reminders, consultation booking confirmations, and follow-up communications regarding your debt relief inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe at any time. Reply HELP for assistance.
              </p>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content, design, logos, text, and images on this website are the property of Compass Debt Solutions LLC and are protected by applicable copyright and trademark laws. You may not copy, reproduce, or distribute any material from this site without our written permission.
              </p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Compass Debt Solutions LLC shall not be liable for any damages, losses, or liabilities arising from or related to your use of this website. We make no warranties or representations regarding the accuracy, reliability, or completeness of any content or external links.
              </p>
            </Section>

            <Section title="8. Links to Third-Party Websites">
              <p>
                Our website may contain links to third-party sites. These links are provided for convenience only. We are not responsible for the content, policies, or practices of those external websites.
              </p>
            </Section>

            <Section title="9. Updates and Modifications">
              <p>
                We may revise these Terms and Conditions at any time without prior notice. Changes will take effect immediately upon posting. The “Last Updated” date at the top of this page indicates when the latest revisions were made.
              </p>
            </Section>

            <Section title="10. Governing Law">
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the State of Arizona, without regard to conflict-of-law principles.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have any questions or concerns about these Terms and Conditions, please contact us at:
              </p>
              <p className="font-semibold text-foreground">Compass Debt Solutions LLC</p>
              <p>1542 W. Maplewood St</p>
              <p>Chandler, AZ 85286</p>
              <p>Phone: (623) 323-3658</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@compassdebtsolutions.com"
                  className="text-primary hover:underline"
                >
                  info@compassdebtsolutions.com
                </a>
              </p>
            </Section>
          </article>
        </div>
      </section>
    </>
  );
}
