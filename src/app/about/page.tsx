import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import { ShieldIcon, IroncladShipIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About | Ironclad Consulting Group",
  description:
    "Ironclad Consulting Group is a Pennsylvania-based financial and management consulting firm founded by Logan Hostetter and Matt Welsey.",
};

const FOUNDERS = [
  {
    name: "Logan Hostetter",
    role: "Co-Founder",
    email: "loganh@ironcladconsultinggroup.net",
    phone: "(717) 945-8210",
    phoneHref: "+17179458210",
  },
  {
    name: "Matt Welsey",
    role: "Co-Founder",
    email: "mattw@ironcladconsultinggroup.net",
    phone: "(609) 234-7315",
    phoneHref: "+16092347315",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <Reveal>
          <Container narrow>
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Built to be dependable.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Ironclad Consulting Group is a Pennsylvania-based financial and
              management consulting firm. The name is the mission: give
              businesses a foundation solid enough to build real decisions
              on.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We work with businesses that need more than a once-a-year
              spreadsheet review, help with cash flow tracking, budgeting,
              valuation, and the kind of management advisory that comes from
              actually understanding how a business runs day to day.
            </p>
          </Container>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-navy py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-ship.jpg"
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover opacity-35 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy-soft/75 to-navy/90" />
        </div>

        <Container className="relative">
          <Reveal className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            <IroncladShipIcon className="size-12 shrink-0 text-brass-soft" />
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Why &ldquo;Ironclad&rdquo;
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                In the mid-1800s, navies started plating their wooden warship
                hulls in iron. The armor didn&apos;t just make the ships
                harder to sink, it kept them steady: holding their line under
                fire when an unarmored hull would have listed, splintered, or
                gone down.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                That&apos;s the name, and the job. We plate a business&apos;s
                financials the same way, not flashy, but steady enough to
                hold a course when things get rough. Give a company that kind
                of footing, and every decision on top of it gets easier to
                make.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border py-20">
        <Container>
          <Reveal className="grid gap-8 border-t border-border pt-12 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
            <div className="flex size-16 shrink-0 items-center justify-center bg-muted text-ink">
              <ShieldIcon className="size-9" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Our approach
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every business is different, so every engagement starts with
                understanding yours: how money moves, where the pressure
                points are, and what decisions are actually on the table.
                From there, we build the tracking, the budget, or the
                valuation around your business, not a template.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>The people</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Founders
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
              <Reveal
                key={founder.name}
                delay={i * 60}
                className="border border-border p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-navy text-lg font-semibold text-white">
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {founder.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {founder.role}
                </p>
                <a
                  href={`mailto:${founder.email}`}
                  className="mt-2 block text-sm text-ink underline underline-offset-2 transition-colors duration-160 hover:text-brass"
                >
                  {founder.email}
                </a>
                <a
                  href={`tel:${founder.phoneHref}`}
                  className="mt-1 block text-sm text-ink underline underline-offset-2 transition-colors duration-160 hover:text-brass"
                >
                  {founder.phone}
                </a>
              </Reveal>
            ))}
          </div>
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
                Let&apos;s talk about your business.
              </h2>
              <Button href="/contact">Get a Consultation</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
