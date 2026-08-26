import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";
import { buildMeta } from "@/lib/seo";
import { assets } from "@/lib/site-content";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildMeta({
      title: "Privacy Policy | Compass Debt Solutions",
      description:
        "Read how Compass Debt Solutions collects, uses, protects, and retains personal information from website visitors, clients, and referral partners.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and safeguard your information."
        image={assets.aboutUs}
        imageAlt="Compass Debt Solutions privacy policy"
        eyebrow="Legal"
      />

      <section className="section-band">
        <div className="page-shell">
          <article className="glass-panel p-8 md:p-12 space-y-6 text-base leading-8 text-muted-foreground">
            <header className="space-y-1">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-sm">
                <strong className="text-foreground">Last Updated:</strong> 07/29/2026
              </p>
              <p className="text-sm">
                Compass Debt Solutions LLC
                <br />
                1542 W. Maplewood St
                <br />
                Chandler, AZ 85286
                <br />
                Phone:{" "}
                <a href="tel:6234719498" className="text-primary hover:underline">
                  (623) 471-9498
                </a>
                <br />
                Email:{" "}
                <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
                  info@compassdebtsolutions.com
                </a>
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                Compass Debt Solutions LLC (“we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website, submit an inquiry, or interact with us through our marketing and communication channels. By using our website or providing your information, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <p>
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Personal Information</strong> such as your name, phone number, email address, and other details you voluntarily provide when requesting information or submitting forms.
                </li>
                <li>
                  <strong className="text-foreground">Non-Personal Information</strong> including browser type, device information, IP address, and usage data collected automatically through analytics tools or cookies.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested information.</li>
                <li>Connect you with independent third-party providers that may offer programs or services related to your inquiry.</li>
                <li>Send you updates, offers, or follow-up communications (including text messages or phone calls, if consented).</li>
                <li>Improve our website, marketing, and user experience.</li>
                <li>Comply with legal and regulatory requirements.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">4. Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share your information only with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers or third-party partners who assist in fulfilling your requests or providing relevant program information.</li>
                <li>Legal or regulatory authorities when required by law or to protect our rights.</li>
              </ul>
              <p>
                All third-party partners are required to handle your information responsibly and in compliance with applicable laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">5. Text Messaging and Communication Consent</h2>
              <p>
                By submitting your contact information and checking the consent box on our forms, you agree to receive text messages from Compass Debt Solutions LLC at the phone number provided. Messages may include appointment reminders, consultation booking confirmations, and follow-up communications regarding your debt relief inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe at any time. Reply HELP for assistance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">6. Data Security</h2>
              <p>
                We take reasonable precautions to protect your information from unauthorized access, misuse, or disclosure. However, no data transmission or storage system can be guaranteed 100% secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">7. Your Privacy Rights</h2>
              <p>
                If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to request access to, deletion of, or information about the use of your data. To exercise your rights, please contact us at:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
                  info@compassdebtsolutions.com
                </a>
                <br />
                Phone:{" "}
                <a href="tel:6234719498" className="text-primary hover:underline">
                  (623) 471-9498
                </a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">8. Links to Other Websites</h2>
              <p>
                Our website may contain links to other websites that are not operated by Compass Debt Solutions LLC. We are not responsible for the privacy practices or content of those third-party sites.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">9. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. The “Last Updated” date at the top of this page indicates when this policy was last revised.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-foreground">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Compass Debt Solutions LLC
                <br />
                1542 W. Maplewood St
                <br />
                Chandler, AZ 85286
                <br />
                Phone:{" "}
                <a href="tel:6234719498" className="text-primary hover:underline">
                  (623) 471-9498
                </a>
                <br />
                Email:{" "}
                <a href="mailto:info@compassdebtsolutions.com" className="text-primary hover:underline">
                  info@compassdebtsolutions.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
