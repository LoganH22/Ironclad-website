import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { ArrowUpRightIcon, PhoneIcon } from "./icons";

const PHONE = "(717) 945-8210";
const PHONE_HREF = "+17179458210";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy text-white/70">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="flex items-center gap-3 font-heading text-lg font-semibold text-white"
          >
            <Image
              src="/logo/06-mark-white-reverse.svg"
              alt=""
              width={30}
              height={30}
            />
            Ironclad Consulting Group
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            Dependable financial and management consulting for businesses
            that want their numbers, and their next move, right.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Navigate
          </div>
          <nav className="mt-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-white/70 transition-colors duration-160 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Get in touch
          </div>
          <a
            href="mailto:info@ironcladconsultinggroup.net"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-160 hover:text-white"
          >
            info@ironcladconsultinggroup.net
            <ArrowUpRightIcon className="size-3.5 transition-transform duration-220 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`tel:${PHONE_HREF}`}
            className="mt-3 flex w-fit items-center gap-1.5 text-sm text-white/70 transition-colors duration-160 hover:text-white"
          >
            <PhoneIcon className="size-3.5" />
            {PHONE}
          </a>
          <p className="mt-4 text-sm text-white/50">Lancaster, PA</p>
        </div>
      </Container>

      <Container className="flex flex-col items-start gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/40">
          © {year} Ironclad Consulting Group, LLC. All rights reserved.
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<div google-add-preferred-source-btn data-theme="dark"></div>',
          }}
        />
      </Container>
    </footer>
  );
}
