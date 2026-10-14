import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Terms of Use | Ironclad Consulting Group – Lancaster, PA",
  description:
    "The terms for using the Ironclad client dashboard, including connecting bank and accounting accounts.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "October 13, 2026";

const link = "font-medium text-ink underline underline-offset-2";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container narrow>
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <p className="mt-8 leading-relaxed text-muted-foreground">
          These terms apply to anyone who signs in to the Ironclad client dashboard
          (the &ldquo;Dashboard&rdquo;), which is provided by Ironclad Consulting
          Group, LLC (&ldquo;Ironclad,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By
          signing in or connecting an account, you agree to them. If your company
          has also signed a services agreement with us, that agreement applies too,
          and if the two disagree, the signed agreement controls. Our{" "}
          <Link href="/privacy" className={link}>
            Privacy Policy
          </Link>{" "}
          explains how we handle information.
        </p>

        <Section title="Your right to use the Dashboard">
          <p>
            We give you a personal, non-exclusive, non-transferable license to use
            the Dashboard for your company&rsquo;s internal business purposes, for
            as long as your company has an account. We own the Dashboard and
            everything in it, other than your own information.
          </p>
        </Section>

        <Section title="Your account">
          <ul className="list-disc space-y-2 pl-5">
            <li>Accounts are created by invitation. You must be invited by us or by your company.</li>
            <li>
              Keep your password and your authenticator device to yourself, and do
              not let anyone else sign in as you.
            </li>
            <li>Tell us right away at the address below if you think someone else has used your login.</li>
          </ul>
        </Section>

        <Section title="Connecting bank and accounting accounts">
          <p>
            You may connect only accounts that you are authorized to connect. By
            connecting, you authorize us, and our providers Plaid Inc. (for bank
            accounts) and Intuit Inc. (for QuickBooks Online), to retrieve the
            information described in our Privacy Policy. The Dashboard only reads
            information. It cannot move money or change anything in your bank or
            accounting software.
          </p>
          <p>
            You can disconnect an account at any time from the Dashboard, and you
            can also revoke access through your bank, Plaid, or Intuit. Plaid and
            Intuit have their own terms and privacy policies that apply to what they
            do with your information.
          </p>
        </Section>

        <Section title="Who can see your data">
          <p>
            Our consultants can see your company&rsquo;s data only while your team
            allows it, using the setting on the Dashboard&rsquo;s Privacy &amp;
            access page. It starts switched off for new client companies.
          </p>
        </Section>

        <Section title="What you agree not to do">
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the Dashboard to break the law or to infringe anyone&rsquo;s rights.</li>
            <li>Try to get into accounts, data, or systems that are not yours.</li>
            <li>Copy, resell, or reverse-engineer the Dashboard, or scrape data from it.</li>
            <li>Interfere with or overload the Dashboard, or try to bypass its security.</li>
          </ul>
        </Section>

        <Section title="Accuracy and our limits">
          <p>
            Information in the Dashboard comes from your bank and accounting
            software. It can be delayed, incomplete, or occasionally wrong, so
            please check important figures against your own records. The Dashboard
            provides business and financial information. It is not legal, tax,
            audit, or investment advice.
          </p>
          <p>
            We work to keep the Dashboard available and secure, but it is provided
            &ldquo;as is,&rdquo; and we do not promise that it will always be
            available or free of errors. We may update or change it over time.
          </p>
        </Section>

        <Section title="Liability">
          <p>
            To the extent the law allows, Ironclad is not liable for indirect or
            consequential losses, such as lost profits, arising from your use of the
            Dashboard, and our total liability is limited to the amount your company
            paid us for the Dashboard in the 12 months before the claim. Nothing
            here limits liability that cannot be limited by law.
          </p>
        </Section>

        <Section title="Ending access">
          <p>
            You may stop using the Dashboard at any time. We may suspend or end
            access if these terms are broken, if we need to protect the security of
            the Dashboard or other clients, or when your company&rsquo;s agreement
            with us ends. When access ends, we disconnect connected accounts and
            delete data as described in our Privacy Policy.
          </p>
        </Section>

        <Section title="General">
          <p>
            Pennsylvania law governs these terms. We may update them from time to
            time, and the date at the top shows when they were last changed.
            Continued use after a change means you accept the updated terms.
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
