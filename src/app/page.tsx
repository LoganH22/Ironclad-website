import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import {
  ChartIcon,
  CalculatorIcon,
  CompassIcon,
  ShieldIcon,
  QuoteIcon,
} from "@/components/icons";

const SERVICES = [
  {
    icon: ChartIcon,
    title: "Cash Flow Tracking",
    description:
      "Real-time visibility into what's coming in and going out, so you're never caught off guard.",
  },
  {
    icon: CalculatorIcon,
    title: "Budget Building",
    description:
      "Practical, realistic budgets that hold up against how your business actually runs.",
  },
  {
    icon: ShieldIcon,
    title: "Business Valuation",
    description:
      "Clear, defensible valuations for financing, partnerships, or planning your next move.",
  },
  {
    icon: CompassIcon,
    title: "Management Advisory",
    description:
      "Hands-on guidance for the operating decisions that shape where your business is headed.",
  },
];

const PROOF_POINTS = [
  {
    headline: "Direct",
    description:
      "You work with the founders, always. No account managers, no hand-offs.",
  },
  {
    headline: "Weekly",
    description:
      "Financial visibility on a cadence you can actually use, not once a year.",
  },
  {
    headline: "Plain",
    description: "Straight answers about your numbers. No jargon, no spin.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-wave.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover opacity-20 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
        </div>

        <Container className="relative py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow light>Financial &amp; Management Consulting</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Financial guidance as solid{" "}
              <span className="italic text-brass-soft">as the name.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Ironclad Consulting Group helps growing businesses track cash
              flow, build real budgets, understand what they&apos;re worth,
              and make sound management decisions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact">Get a Consultation</Button>
              <Button href="/services" variant="outline-light" withArrow={false}>
                Our Services
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container narrow>
          <Reveal className="text-center">
            <QuoteIcon className="mx-auto size-8 text-brass" />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Where does your business stand financially?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Most growing businesses are flying without a real financial
              picture, reacting to problems instead of seeing them coming
              months out. A clear system changes that.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-review.jpg"
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover opacity-15 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy-soft/90 to-navy/95" />
        </div>

        <Container className="relative">
          <Reveal>
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Financial clarity shouldn&apos;t be complicated.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            {PROOF_POINTS.map(({ headline, description }, i) => (
              <Reveal key={headline} delay={i * 60} className="sm:px-8 first:sm:pl-0">
                <span className="font-heading text-4xl font-semibold text-white">
                  {headline}
                </span>
                <div className="mt-4 mb-4 h-px w-10 bg-brass" />
                <p className="text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Four core services, one steady footing.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 60}
                className="group border-t border-border pt-6"
              >
                <div className="flex items-start gap-4">
                  <Icon className="mt-1 size-6 shrink-0 text-brass" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="relative overflow-hidden bg-navy px-8 py-16 sm:px-16">
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 h-16 w-16 border-t border-l border-brass/60"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-brass/60"
            />
            <div className="relative flex flex-col items-center gap-6 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Ready for a clearer financial picture?
              </h2>
              <p className="max-w-xl text-white/70">
                Tell us where your business stands today, and we&apos;ll help
                you figure out the next right move.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact">Get a Consultation</Button>
                <Button href="/services" variant="outline-light" withArrow={false}>
                  See our services
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
