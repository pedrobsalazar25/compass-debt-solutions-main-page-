import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { buildMeta } from "@/lib/seo";
import { assets } from "@/lib/site-content";

export const Route = createFileRoute("/e-sign-sms-consent")({
  head: () =>
    buildMeta({
      title: "E-Sign and SMS Consent Policy | Compass Debt Solutions",
      description:
        "Review the E-Sign and SMS Consent Policy for Compass Debt Solutions LLC, including electronic communications, electronic signatures, and opt-out information.",
      path: "/e-sign-sms-consent",
    }),
  component: ESignSmsConsentPage,
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

function ESignSmsConsentPage() {
  return (
    <>
      <PageHero
        title="E-Sign and SMS Consent Policy"
        subtitle="How we use electronic records, signatures, and text communications."
        image={assets.aboutUs}
        imageAlt="Compass Debt Solutions E-Sign and SMS consent policy"
        eyebrow="Legal"
      />

      <section className="section-band">
        <div className="page-shell">
          <article className="glass-panel p-8 md:p-12 space-y-6 text-base leading-8 text-muted-foreground">
            <header className="space-y-1">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                E-Sign and SMS Consent Policy
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

            <Section title="1. Purpose of This Policy">
              <p>
                This E-Sign and SMS Consent Policy (“Policy”) explains how Compass Debt Solutions LLC (“we,” “us,” or “our”) uses electronic records and communications in connection with our services. By submitting your information or checking a consent box on our forms, you agree to receive communications electronically and to transact with us using electronic signatures.
              </p>
            </Section>

            <Section title="2. Consent to Electronic Communications">
              <p>
                By providing your phone number, email, or other contact information through this website, you consent to receive communications from Compass Debt Solutions LLC electronically.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Informational updates or program details</li>
                <li>Follow-ups or appointment reminders</li>
                <li>Marketing messages about available program options</li>
              </ul>
              <p>
                Messages may be sent by email, phone call, or text (SMS/MMS). Message and data rates may apply. Message frequency may vary.
              </p>
            </Section>

            <Section title="3. Consent to Electronic Signatures">
              <p>
                By submitting your information online or by phone, you authorize the use of electronic signatures to indicate your agreement or consent where applicable. You understand that your electronic signature carries the same legal effect as a handwritten signature.
              </p>
            </Section>

            <Section title="4. Withdrawing Your Consent">
              <p>You may withdraw your consent to receive electronic communications at any time by:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Replying STOP to any text message;</li>
                <li>
                  Emailing{" "}
                  <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
                    info@compassdebtsolutions.com
                  </a>
                  ; or
                </li>
                <li>Calling (623) 323-3658.</li>
              </ul>
              <p>Once you opt out, we may still send legally required notices or confirmations.</p>
            </Section>

            <Section title="5. Updating Your Contact Information">
              <p>
                It is your responsibility to keep your contact information current. You can update it by contacting us at{" "}
                <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
                  info@compassdebtsolutions.com
                </a>
                .
              </p>
            </Section>

            <Section title="6. Hardware and Software Requirements">
              <p>To access and retain electronic records, you must have:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A device with internet access and a web browser;</li>
                <li>A valid email account; and</li>
                <li>The ability to print or save documents for your records.</li>
              </ul>
            </Section>

            <Section title="7. No Condition of Purchase">
              <p>
                Your consent to receive messages or sign electronically is not a condition of any purchase or service. You may contact us directly instead of submitting information electronically if you prefer.
              </p>
            </Section>

            <Section title="8. Contact Us">
              <p>
                If you have any questions about this Policy or wish to withdraw consent, please reach out to:
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
            </Section>
          </article>
        </div>
      </section>
    </>
  );
}
