import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy | Ironclad Consulting Group – Lancaster, PA",
  description:
    "How Ironclad Consulting Group collects, uses, protects, and deletes information, including data from connected bank accounts.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "October 4, 2026";

const link = "font-medium text-ink underline underline-offset-2";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container narrow>
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <p className="mt-8 leading-relaxed text-muted-foreground">
          Ironclad Consulting Group, LLC (&ldquo;Ironclad,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us&rdquo;) is a financial and management consulting firm based in
          Lancaster, Pennsylvania. This policy explains what information we collect
          through our website and our client dashboard, how we use and protect it,
          and the choices you have.
        </p>

        <Section title="Information we collect">
          <p>
            <strong className="text-foreground">Website visitors.</strong> If you
            contact us through our website, we receive the details you give us, such
            as your name, email address, phone number, and message.
          </p>
          <p>
            <strong className="text-foreground">Dashboard clients.</strong> Our
            clients can sign in to a private dashboard. We collect the email address
            used to sign in and, if you choose to connect a business bank account,
            the financial information described below.
          </p>
        </Section>

        <Section title="Connected bank accounts">
          <p>
            To show you your cash position, money in and out, and budgets, the
            dashboard connects to your bank through Plaid Inc. (&ldquo;Plaid&rdquo;).
            You sign in on Plaid&rsquo;s secure screen, so your bank username and
            password are given to Plaid and your bank. They are never seen or stored
            by Ironclad.
          </p>
          <p>
            Through Plaid we receive the account name, the last four digits of the
            account number, balances, and transaction details (date, description,
            amount, and category). We do not receive full account numbers or your
            bank login details. By connecting an account, you also agree to
            Plaid&rsquo;s handling of your information as described in the{" "}
            <a
              href="https://plaid.com/legal/#end-user-privacy-policy"
              className={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Plaid End User Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="How we use information">
          <ul className="list-disc space-y-2 pl-5">
            <li>To show you your financial dashboard and provide our consulting services.</li>
            <li>To respond to inquiries and communicate with you about our services.</li>
            <li>To keep the dashboard secure and working properly.</li>
          </ul>
          <p>
            We do not sell your information, and we do not use it for advertising or
            share it with anyone for their marketing purposes.
          </p>
        </Section>

        <Section title="Who can see your data">
          <p>
            Dashboard data is visible only to the people at your company who have a
            login and to the Ironclad consultants assigned to your account. We share
            information with service providers who help us run the dashboard (for
            example, Plaid for bank connections, our database and hosting providers,
            and our email delivery provider), only as needed to provide the service.
            We may also disclose information when required by law.
          </p>
        </Section>

        <Section title="How we protect it">
          <ul className="list-disc space-y-2 pl-5">
            <li>Information is encrypted in transit between your browser and our systems.</li>
            <li>
              The secure connection credentials we receive from Plaid are encrypted
              before they are stored and are never sent to your browser.
            </li>
            <li>
              Access is invitation-only, requires a login, and is limited so that each
              company can see only its own data.
            </li>
          </ul>
          <p>
            No system is perfectly secure, but we take reasonable steps to protect
            your information and to limit who can reach it.
          </p>
        </Section>

        <Section title="Retention and deletion">
          <p>
            We keep dashboard data for as long as you are a client and use the
            dashboard. You can ask us at any time to disconnect your bank account and
            delete your data, and we will do so within 30 days, except where we are
            required by law to keep certain records. Email{" "}
            <a href="mailto:info@ironcladconsultinggroup.net" className={link}>
              info@ironcladconsultinggroup.net
            </a>{" "}
            to make a request. You can also withdraw Plaid&rsquo;s access to your bank
            data through your bank or through Plaid.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            You may ask to see, correct, or delete the information we hold about you
            by contacting us. You can stop receiving communications from us at any
            time.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. The date at the top shows
            when it was last changed.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            Ironclad Consulting Group, LLC
            <br />
            Lancaster, PA
            <br />
            <a href="mailto:info@ironcladconsultinggroup.net" className={link}>
              info@ironcladconsultinggroup.net
            </a>
            <br />
            <a href="tel:+17179458210" className={link}>
              (717) 945-8210
            </a>
          </p>
        </Section>
      </Container>
    </section>
  );
}
