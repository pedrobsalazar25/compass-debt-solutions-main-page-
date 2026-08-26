import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { buildMeta } from "@/lib/seo";
import { assets } from "@/lib/site-content";

export const Route = createFileRoute("/mobile-messaging-terms")({
  head: () =>
    buildMeta({
      title: "Mobile Messaging Terms & Conditions | Compass Debt Solutions",
      description:
        "Review the Mobile Messaging Terms & Conditions for Compass Debt Solutions LLC, including opt-in, opt-out instructions, message frequency, and privacy details.",
      path: "/mobile-messaging-terms",
    }),
  component: MobileMessagingTermsPage,
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

function MobileMessagingTermsPage() {
  return (
    <>
      <PageHero
        title="Mobile Messaging Terms & Conditions"
        subtitle="Terms governing SMS text message communications from Compass Debt Solutions LLC."
        image={assets.aboutUs}
        imageAlt="Compass Debt Solutions mobile messaging terms and conditions"
        eyebrow="Legal"
      />

      <section className="section-band">
        <div className="page-shell">
          <article className="glass-panel p-8 md:p-12 space-y-6 text-base leading-8 text-muted-foreground">
            <header className="space-y-1">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Mobile Messaging Terms & Conditions
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

            <Section title="1. Program Description">
              <p>
                Compass Debt Solutions LLC offers an SMS messaging program to communicate with consumers who have requested information or consented to receive text messages. Messages may include responses to inquiries, appointment reminders, customer support, account updates, and, where you have provided the appropriate consent, promotional information about our debt resolution services.
              </p>
            </Section>

            <Section title="2. Opt-In">
              <p>
                You may opt in to receive text messages by submitting your information through our website, completing a lead form, scheduling an appointment, or otherwise providing your express consent to receive SMS communications from Compass Debt Solutions LLC.
              </p>
            </Section>

            <Section title="3. Message Frequency">
              <p>
                Message frequency varies depending on your interaction with Compass Debt Solutions LLC and your service needs.
              </p>
            </Section>

            <Section title="4. Message & Data Rates">
              <p>
                Message and data rates may apply. Check with your wireless carrier for details regarding your messaging plan.
              </p>
            </Section>

            <Section title="5. Opt-Out Instructions">
              <p>
                You may opt out of receiving SMS messages at any time by replying STOP to any text message. After opting out, you will receive one final confirmation message, after which no further SMS messages will be sent unless you opt in again.
              </p>
            </Section>

            <Section title="6. Help">
              <p>
                For assistance, reply HELP to any text message or contact us at (623) 323-3658 or{" "}
                <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
                  info@compassdebtsolutions.com
                </a>
                .
              </p>
            </Section>

            <Section title="7. Privacy">
              <p>
                Your privacy is important to us. Your mobile number and SMS consent information will be used only to provide the messaging services you requested. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All categories of personal information collected exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties except service providers that support message delivery.
              </p>
            </Section>

            <Section title="8. Consent Not Required for Purchase">
              <p>
                Your consent to receive SMS messages is not a condition of purchasing any goods or services from Compass Debt Solutions LLC.
              </p>
            </Section>

            <Section title="9. Supported Carriers">
              <p>
                Supported carriers are not liable for delayed or undelivered messages. Delivery is subject to your wireless carrier&apos;s network availability.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                Compass Debt Solutions LLC may update this Mobile Messaging Terms & Conditions from time to time. Any updates will be posted on this page with a revised &quot;Last Updated&quot; date.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have any questions about this Mobile Messaging Terms & Conditions, please contact:
              </p>
              <p className="font-semibold text-foreground">Compass Debt Solutions LLC</p>
              <p>1542 W. Maplewood St</p>
              <p>Chandler, AZ 85286</p>
              <p>Phone: (623) 323-3658</p>
              <p>
                Email:{" "}
                <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
                  info@compassdebtsolutions.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://CompassDebtSolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://CompassDebtSolutions.com
                </a>
              </p>
            </Section>
          </article>
        </div>
      </section>
    </>
  );
}
