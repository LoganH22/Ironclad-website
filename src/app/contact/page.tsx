import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ironclad Consulting Group",
  description:
    "Get in touch with Ironclad Consulting Group for cash flow tracking, budgeting, valuation, and management advisory services.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Tell us a little about your business and what you&apos;re
            looking for. We&apos;ll get back to you to set up a
            conversation.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              href="mailto:hello@ironcladconsultinggroup.com"
              className="font-medium text-foreground underline"
            >
              hello@ironcladconsultinggroup.com
            </a>
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
