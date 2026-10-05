import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ironclad Consulting Group – Lancaster, PA",
  description:
    "Get in touch with Ironclad Consulting Group in Lancaster, PA for cash flow tracking, budgeting, valuation, and management consulting services.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Tell us a little about your business and what you&apos;re
            looking for. We&apos;ll get back to you to set up a
            conversation.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              href="mailto:info@ironcladconsultinggroup.net"
              className="font-medium text-ink underline underline-offset-2"
            >
              info@ironcladconsultinggroup.net
            </a>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Prefer to call?{" "}
            <a
              href="tel:+17179458210"
              className="font-medium text-ink underline underline-offset-2"
            >
              (717) 945-8210
            </a>
          </p>
        </Reveal>

        <Reveal delay={100} className="border border-border bg-card p-8">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
