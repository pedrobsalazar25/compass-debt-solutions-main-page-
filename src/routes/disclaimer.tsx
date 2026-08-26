import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { buildMeta } from "@/lib/seo";
import { assets } from "@/lib/site-content";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    buildMeta({
      title: "Disclaimer | Compass Debt Solutions",
      description:
        "Read the Compass Debt Solutions LLC disclaimer regarding general information, no guarantees, marketing consent, and liability limitations.",
      path: "/disclaimer",
    }),
  component: DisclaimerPage,
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

function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        subtitle="Important information about the content, limitations, and use of this website."
        image={assets.aboutUs}
        imageAlt="Compass Debt Solutions disclaimer"
        eyebrow="Legal"
      />

      <section className="section-band">
        <div className="page-shell">
          <article className="glass-panel p-8 md:p-12 space-y-6 text-base leading-8 text-muted-foreground">
            <header className="space-y-1">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Disclaimer
              </h1>
              <p className="text-sm">
                <strong className="text-foreground">Last Updated:</strong> 07/29/2026
              </p>
              <p className="text-sm">
                <strong className="text-foreground">Compass Debt Solutions LLC</strong>
              </p>
              <p className="text-sm">1542 W. Maplewood St</p>
              <p className="text-sm">Chandler, AZ 85286</p>
              <p className="text-sm">Phone: (623) 471-9498</p>
            </header>

            <Section title="1. General Information">
              <p>
                Compass Debt Solutions LLC (“we,” “us,” or “our”) operates this website to provide information about our debt resolution services. The information on this website is provided for general informational purposes only and should not be interpreted as financial, legal, or tax advice. You should consult with a qualified professional before making any financial, legal, or tax decisions.
              </p>
            </Section>

            <Section title="2. No Financial or Debt Services Guarantees">
              <p>
                Compass Debt Solutions LLC is not a lender, creditor, bank, or law firm. We assist consumers in evaluating debt resolution options for qualifying unsecured debts. We do not provide loans, extend credit, or offer legal or tax advice. Any references to potential savings, payment reductions, or estimated outcomes are examples only and are not guarantees of future results.
              </p>
            </Section>

            <Section title="3. No Guarantees or Endorsements">
              <p>
                We make no guarantees or representations regarding qualification, enrollment, creditor participation, savings, or the outcome of any debt resolution program. Results vary based on each consumer's financial situation. We do not guarantee that any creditor will participate in a program or agree to settle a debt.
              </p>
            </Section>

            <Section title="4. Marketing and Communication Consent">
              <p>
                By submitting your contact information through this website or affiliated channels, you consent to receive calls, text messages, and/or emails from Compass Debt Solutions LLC where permitted by law. These communications may include informational or promotional messages regarding our services. Message and data rates may apply. You may opt out at any time by replying STOP to any text message or by contacting us directly.
              </p>
            </Section>

            <Section title="5. Accuracy of Information">
              <p>
                While we strive to keep the information on our website accurate and up to date, we make no guarantees regarding the completeness, reliability, or accuracy of any content. Any reliance you place on information provided on this site is strictly at your own risk.
              </p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Compass Debt Solutions LLC shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of this website or any services described on it.
              </p>
            </Section>

            <Section title="7. External Links">
              <p>
                This website may contain links to other websites that are operated by third parties. We are not responsible for the content, accuracy, privacy practices, or policies of those external websites. Visiting or using any linked site is at your own discretion and risk.
              </p>
            </Section>

            <Section title="8. Updates to This Disclaimer">
              <p>
                We may update this Disclaimer periodically to reflect changes in our business or applicable laws. The “Last Updated” date above indicates when the latest revisions were made. Please review this page regularly to stay informed.
              </p>
            </Section>

            <Section title="9. Contact Us">
              <p>If you have questions about this Disclaimer, please contact us at:</p>
              <p className="font-semibold text-foreground">Compass Debt Solutions LLC</p>
              <p>1542 W. Maplewood St</p>
              <p>Chandler, AZ 85286</p>
              <p>Phone: (623) 471-9498</p>
              <p>
                Email:{" "}
                <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
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
