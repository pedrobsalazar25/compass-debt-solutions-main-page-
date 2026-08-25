import { Compass, Phone } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { ScrollRevealCards } from "@/components/scroll-reveal-cards";
import { Button } from "@/components/ui/button";
import { buildMeta } from "@/lib/seo";
import { assets, fullSteps, howItWorksFaqs, site, serviceItems, aboutAdvantages } from "@/lib/site-content";
import { ServiceCard } from "@/components/service-showcase";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    buildMeta({
      title: "How It Works | Compass Debt Solutions",
      description:
        "See the step-by-step debt settlement process Compass Debt Solutions uses to help Arizona clients move toward financial freedom.",
      path: "/how-it-works",
      keywords: "how debt settlement works, Arizona debt relief process, Chandler debt consultation",
    }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="Your Roadmap to a Brighter Financial Future"
        subtitle="A clear, proven process to help you find your way out of debt."
        image={assets.howItWorks}
        imageAlt="How Compass Debt Solutions works"
        eyebrow="How the process works"
        priority
      >
        <Button variant="hero" size="xl" asChild>
          <Link to="/apply">Get Your Free Estimate</Link>
        </Button>
      </PageHero>

      <section className="section-band">
        <div className="page-shell">
          <div className="section-heading max-w-2xl">
            <p className="eyebrow">Seven clear milestones</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              A structured path from stress to resolution
            </h2>
          </div>
          <div className="mt-8 hidden md:block space-y-4">
            {fullSteps.map((step, index) => (
              <div key={step.title} className="glass-panel grid gap-4 p-6 md:grid-cols-[auto_1fr] md:p-8">
                <div className="icon-wrap h-12 w-12 text-base font-semibold">{index + 1}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <ScrollRevealCards items={fullSteps} numbered className="mt-8" />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="page-shell">
          <div className="section-heading max-w-3xl">
            <p className="eyebrow">The Compass advantage</p>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
              A Clear, Personalized Approach to Your Debt-Relief Options
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every financial situation is different. At Compass Debt Solutions, we take the time to understand your situation, answer your questions, and help you explore options that may fit your needs.
            </p>
          </div>

          <div className="mt-8 hidden md:grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutAdvantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="service-card flex flex-col justify-between p-6">
                  <div>
                    <span className="icon-wrap h-12 w-12">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <ScrollRevealCards items={aboutAdvantages} className="mt-8" />

          <div className="mt-16 border-t border-border/40 pt-16">
            <div className="section-heading max-w-2xl mb-8">
              <p className="eyebrow">Our Services</p>
              <h3 className="font-display text-2xl font-semibold tracking-normal text-foreground md:text-3xl">
                What types of debt can we help you settle?
              </h3>
            </div>
            <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
              {serviceItems.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
            <div className="md:hidden">
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {serviceItems.map((service) => (
                    <CarouselItem key={service.slug} className="basis-[88%]">
                      <ServiceCard service={service} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>


      <section className="relative isolate overflow-hidden">
        <img
          src={assets.ctaBg}
          alt="Arizona desert path at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        <div className="page-shell relative py-20 md:py-28">
          <div className="flex flex-col gap-6 bg-white/15 border border-white/25 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_20px_50px_rgba(8,23,54,0.65)] md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Ready to start?</p>
              <h2 className="font-display text-3xl font-semibold tracking-normal text-foreground md:text-4xl">
                Call {site.phoneDisplay} or get your free estimate online.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">Get Your Free Estimate</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection title="How It Works FAQ" items={howItWorksFaqs} />
    </>
  );
}
