import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-base font-semibold text-foreground"
          >
            <Image
              src="/images/logo-badge.png"
              alt=""
              width={32}
              height={32}
              className="rounded-md"
            />
            Ironclad Consulting Group
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Dependable financial and management consulting for businesses
            that want their numbers, and their next move, right.
          </p>
        </div>

        <nav className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-muted-foreground">
          <a
            href="mailto:hello@ironcladconsultinggroup.com"
            className="hover:text-foreground"
          >
            hello@ironcladconsultinggroup.com
          </a>
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          © {year} Ironclad Consulting Group, LLC. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
