import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { CheckIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { DEMO_URL, LOGIN_URL, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Client Dashboard | Ironclad Consulting Group – Lancaster, PA",
  description:
    "A private dashboard that connects your bank accounts, credit cards, and QuickBooks to show cash, spending, budget, and profit, without spreadsheets.",
  path: "/dashboard",
});

// Everything stated on this page is something the dashboard does today, or
// something our Privacy Policy says. Keep it that way, and keep prices off it.

const FEATURES = [
  {
    title: "Cash position",
    text: "Your balance across your connected checking and savings accounts, and how much your cash moved over the past week, month, or year.",
  },
  {
    title: "Spending by category",
    text: "Where the money went across your bank accounts and credit cards. A purchase counts the day it's made, and paying off a card isn't counted a second time.",
  },
  {
    title: "Credit cards",
    text: "Connect your business credit cards to see what you owe on each one, kept separate from your cash.",
  },
  {
    title: "Budget tracking",
    text: "Set a monthly budget for the categories you care about and see your spending against it as the month goes.",
  },
  {
    title: "Every transaction",
    text: "All the activity from your connected accounts in one searchable list. You choose the categories and can add your own. If an account can't connect, you can import its statements.",
  },
  {
    title: "QuickBooks insights",
    text: "Connect QuickBooks Online to add profit, what customers owe you, bills coming due, a 30-day cash projection, and your expenses as a share of revenue.",
  },
];

const STEPS = [
  {
    title: "Connect your accounts",
    text: "Choose your bank or card issuer and sign in on its own secure screen. You can also connect QuickBooks Online.",
  },
  {
    title: "See your key numbers",
    text: "Your dashboard fills in from the accounts you connected. Check it any time, on a computer or a phone.",
  },
  {
    title: "Work with us, if you want to",
    text: "Our consultants can see your dashboard only while you allow it. Access starts switched off, and you can change it at any time.",
  },
];

const SECURITY = [
  "You sign in at your bank's own secure screen. Ironclad never sees or stores your bank username or password.",
  "Every sign-in needs your password and a one-time code from an authenticator app.",
  "Each company can see only its own data.",
  "Our consultants can see your data only while you allow it. Access starts switched off for every new client.",
  "Your information is encrypted in transit and at rest.",
  "You can disconnect any account yourself at any time, which ends access and deletes the data imported from it.",
];

export default function DashboardPage() {
  return (
    <>
      <section className="border-b border-border bg-navy py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
            <Reveal>
              <Eyebrow light>Client Dashboard</Eyebrow>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                Know where your business stands, without the spreadsheet.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Connect your bank accounts and credit cards once. Your dashboard
                shows your cash position, spending, and budget from your own
                accounts, with no spreadsheets to build or update.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href={DEMO_URL}>Request a demo</Button>
                <Button href={LOGIN_URL} variant="outline-light" withArrow={false}>
                  Client login
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/55">
                Available to Ironclad clients by invitation.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <figure>
                <div className="overflow-hidden border border-white/15 bg-card shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/images/dashboard-overview.jpg"
                    alt="The Overview screen of the Ironclad client dashboard, showing sample figures for current cash position, money owed on a credit card, net change in cash, and spending by category."
                    width={1920}
                    height={1688}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-white/55">
                  Sample data shown. Your own accounts appear here once connected.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What you&apos;ll see</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              The numbers that matter, in one place
            </h2>
            <p className="mt-4 text-muted-foreground">
              Built to answer the questions owners actually ask: where do we
              stand, where is the money going, and what&apos;s coming up.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 60}>
                <span className="font-tabular text-xs font-semibold uppercase tracking-wide text-brass">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/40 py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Up and running in three steps
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 60} className="border border-border bg-card p-8">
                <span className="font-tabular text-sm font-semibold text-brass">Step {i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <Eyebrow>Security and privacy</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                Built to keep your connection private
              </h2>
              <p className="mt-4 text-muted-foreground">
                No system is perfectly secure, but we take reasonable steps to
                protect your information and to limit who can reach it.
              </p>
              <Link
                href="/privacy"
                className="mt-6 inline-block text-sm font-semibold text-foreground underline decoration-brass decoration-2 underline-offset-4 transition-colors duration-160 hover:text-brass"
              >
                Read our Privacy Policy
              </Link>
            </Reveal>

            <Reveal delay={80}>
              <ul className="space-y-4">
                {SECURITY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-brass" />
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow light>See it for yourself</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Want to see it with your own business in mind?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Request a demo and we&apos;ll get in touch to walk you through
              the dashboard.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={DEMO_URL}>Request a demo</Button>
              <Button href="/contact" variant="outline-light" withArrow={false}>
                Contact us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
