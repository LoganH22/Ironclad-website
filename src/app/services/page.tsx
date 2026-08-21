import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import {
  ChartIcon,
  CalculatorIcon,
  ShieldIcon,
  CompassIcon,
  CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Services | Ironclad Consulting Group",
  description:
    "Cash flow tracking, budget building, business valuation, and management advisory services from Ironclad Consulting Group.",
};

const SERVICES = [
  {
    icon: ChartIcon,
    title: "Cash Flow Tracking",
    description:
      "You can't manage what you can't see. We set up clear, ongoing tracking of cash in and cash out so you always know where you stand.",
    items: [
      "Cash flow statements built around your business",
      "Early warning on shortfalls before they happen",
      "Regular reporting cadence, not once-a-year surprises",
    ],
  },
  {
    icon: CalculatorIcon,
    title: "Budget Building",
    description:
      "A budget only works if it matches reality. We build budgets from how your business actually operates, not a generic template.",
    items: [
      "Realistic revenue and expense projections",
      "Department or project-level breakdowns",
      "Regular budget-vs-actual check-ins",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Business Valuation",
    description:
      "Whether you're raising capital, bringing on a partner, or planning an exit, you need a number you can stand behind.",
    items: [
      "Defensible valuation methodology",
      "Support for financing or partnership conversations",
      "Clear explanation of what drives your number",
    ],
  },
  {
    icon: CompassIcon,
    title: "Management Advisory",
    description:
      "Hands-on advice on the operating decisions that shape your business, from an outside perspective that isn't guessing.",
    items: [
      "Ongoing advisory relationship, not one-off reports",
      "Practical recommendations, not just analysis",
      "Support through key decision points",
    ],
  },
];

const TIERS = [
  {
    metal: "Bronze",
    accent: "#96603D",
    name: "Foundation",
    cadence: "One-time",
    description:
      "A one-time books cleanup and working budget — gets a disorganized set of books into shape.",
    includesLabel: "What's included",
    includes: ["Full books cleanup & reconciliation", "Initial budget build"],
    bands: [
      { label: "Low (<50 tx/mo)", value: "$600–800" },
      { label: "Medium (50–250 tx/mo)", value: "$1,200", typical: true },
      { label: "High (250+ tx/mo)", value: "$2,000+" },
    ],
  },
  {
    metal: "Silver",
    accent: "#64748B",
    name: "Growth",
    cadence: "Monthly",
    description:
      "Foundation, plus ongoing bookkeeping and monthly visibility into the business.",
    includesLabel: "Everything in Bronze, plus",
    includes: [
      "Ongoing weekly/monthly bookkeeping",
      "Monthly financial reporting (P&L)",
      "Cash flow tracking",
      "Quarterly check-ins",
    ],
    bands: [
      { label: "Low (<50 tx/mo)", value: "$800–1,000" },
      { label: "Medium (50–250 tx/mo)", value: "$1,600/mo", typical: true },
      { label: "High (250+ tx/mo)", value: "$2,200–2,800" },
    ],
  },
  {
    metal: "Gold",
    accent: "#B45309",
    name: "Strategic",
    cadence: "Custom",
    description:
      "Growth, plus the big-decision work: what the business is worth and where it's headed.",
    includesLabel: "Everything in Silver, plus",
    includes: ["Business valuation", "Growth planning", "Sale / acquisition advisory"],
    bands: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-navy py-24">
        <Container>
          <Reveal>
            <Eyebrow light>What we offer</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
              Four core services designed to give you a clear financial
              picture and a steady hand on management decisions.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-16">
          {SERVICES.map(({ icon: Icon, title, description, items }, i) => (
            <Reveal
              key={title}
              delay={i * 40}
              className="grid gap-8 border-b border-border pb-16 last:border-none last:pb-0 md:grid-cols-[auto_1fr] md:gap-12"
            >
              <div className="flex items-start gap-4 md:w-64">
                <Icon className="mt-1 size-8 shrink-0 text-brass" />
                <div>
                  <span className="font-tabular text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {title}
                  </h2>
                </div>
              </div>

              <div>
                <p className="max-w-2xl text-muted-foreground">
                  {description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 size-5 shrink-0 text-brass" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-border bg-muted/40 py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Investment</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Straightforward pricing
            </h2>
            <p className="mt-4 text-muted-foreground">
              Three tiers, priced by transaction volume and complexity, not a
              percentage of revenue. Each tier includes everything in the one
              before it.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TIERS.map((tier, i) => (
              <Reveal
                key={tier.metal}
                delay={i * 60}
                className="relative flex flex-col border border-border bg-card p-8"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: tier.accent }}
                />

                <span
                  className="w-fit text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: tier.accent }}
                >
                  {tier.metal}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                <div className="mt-6 border-y border-border py-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {tier.cadence}
                  </div>
                  {tier.bands ? (
                    <div className="mt-3 space-y-1.5">
                      {tier.bands.map((band) => (
                        <div
                          key={band.label}
                          className={`flex items-baseline justify-between px-2.5 py-1.5 ${
                            band.typical ? "bg-muted" : ""
                          }`}
                        >
                          <span className="text-xs text-muted-foreground">
                            {band.label}
                          </span>
                          <span className="font-heading font-tabular text-sm font-semibold text-foreground">
                            {band.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm text-foreground">
                      Scoped individually based on your business —
                      let&apos;s talk.
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    {tier.includesLabel}
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 shrink-0"
                          style={{ color: tier.accent }}
                        >
                          <CheckIcon className="size-4" />
                        </span>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Exact pricing depends on your transaction volume and complexity.{" "}
            <Link href="/contact" className="font-medium text-ink underline underline-offset-2">
              Reach out
            </Link>{" "}
            for a quote scoped to your business.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-20">
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
                Not sure which service fits?
              </h2>
              <p className="max-w-xl text-white/70">
                Most engagements start with a conversation, not a proposal.
                Let&apos;s talk about where your business is today.
              </p>
              <Button href="/contact">Get a Consultation</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
