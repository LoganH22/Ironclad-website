import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import {
  ArrowRightIcon,
  ShieldIcon,
  IroncladShipIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About | Ironclad Consulting Group",
  description:
    "Ironclad Consulting Group is a Pennsylvania-based financial and management consulting firm founded by Logan Hostetter and Matt Welsey.",
};

const FOUNDERS = [
  { name: "Logan Hostetter", role: "Co-Founder" },
  { name: "Matt Welsey", role: "Co-Founder" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Built to be dependable.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Ironclad Consulting Group is a Pennsylvania-based financial and
            management consulting firm. The name is the mission: give
            businesses a foundation solid enough to build real decisions on.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We work with businesses that need more than a once-a-year
            spreadsheet review, help with cash flow tracking, budgeting,
            valuation, and the kind of management advisory that comes from
            actually understanding how a business runs day to day.
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#020617] py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-ship.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#0f172a]/88 to-[#020617]/95" />
        </div>

        <Container className="relative grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <IroncladShipIcon className="size-12 shrink-0 text-accent" />
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Why &ldquo;Ironclad&rdquo;
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              In the mid-1800s, navies started plating their wooden warship
              hulls in iron. The armor didn&apos;t just make the ships harder
              to sink, it kept them steady: holding their line under fire
              when an unarmored hull would have listed, splintered, or gone
              down.
            </p>
            <p className="mt-3 max-w-2xl text-slate-300">
              That&apos;s the name, and the job. We plate a business&apos;s
              financials the same way, not flashy, but steady enough to hold
              a course when things get rough. Give a company that kind of
              footing, and every decision on top of it gets easier to make.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-20">
        <Container>
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-[auto_1fr] md:items-center md:gap-12">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
              <ShieldIcon className="size-9" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Our approach
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every business is different, so every engagement starts with
                understanding yours: how money moves, where the pressure
                points are, and what decisions are actually on the table.
                From there, we build the tracking, the budget, or the
                valuation around your business, not a template.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Founders
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-brand text-lg font-semibold text-brand-foreground">
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container className="relative overflow-hidden rounded-2xl bg-brand px-8 py-16">
          <div className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 size-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-foreground">
              Let&apos;s talk about your business.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:opacity-90 hover:shadow-accent/30 cursor-pointer"
            >
              Get a Consultation
              <ArrowRightIcon />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
