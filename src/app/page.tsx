import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import {
  ArrowRightIcon,
  ChartIcon,
  CalculatorIcon,
  CompassIcon,
  ShieldIcon,
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
      <section className="relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-wave.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70 motion-safe:animate-[hero-zoom_24s_ease-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#020617]/75 to-[#020617]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-transparent to-transparent" />
        </div>

        <Container className="relative py-28 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-200">
              <ShieldIcon className="size-4 text-accent" />
              Financial &amp; Management Consulting
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Financial guidance as solid <span className="text-accent">as the name.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-300">
              Ironclad Consulting Group helps growing businesses track cash
              flow, build real budgets, understand what they&apos;re worth,
              and make sound management decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:opacity-90 hover:shadow-accent/30 cursor-pointer"
              >
                Get a Consultation
                <ArrowRightIcon />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-2xl text-center sm:mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Where does your business stand financially?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most growing businesses are flying without a real financial
            picture, reacting to problems instead of seeing them coming
            months out. A clear system changes that.
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#020617] py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-review.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#0f172a]/85 to-[#020617]/95" />
        </div>

        <Container className="relative">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Financial clarity shouldn&apos;t be complicated.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PROOF_POINTS.map(({ headline, description }) => (
              <div
                key={headline}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <span className="font-heading text-3xl font-semibold text-white">
                  {headline}
                </span>
                <div className="mt-3 mb-4 h-0.5 w-10 bg-accent" />
                <p className="text-sm text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              What we do
            </h2>
            <p className="mt-4 text-muted-foreground">
              Four core services, all built to give you a clearer picture and
              a firmer footing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="relative overflow-hidden rounded-2xl bg-brand px-8 py-16">
          <div className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 size-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-foreground">
              Ready for a clearer financial picture?
            </h2>
            <p className="max-w-xl text-brand-foreground/80">
              Tell us where your business stands today, and we&apos;ll help
              you figure out the next right move.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:opacity-90 hover:shadow-accent/30 cursor-pointer"
              >
                Get a Consultation
                <ArrowRightIcon />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-white/10 cursor-pointer"
              >
                See our services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
