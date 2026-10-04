"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { MenuIcon, CloseIcon, PhoneIcon } from "./icons";

const PHONE = "(717) 945-8210";
const PHONE_HREF = "+17179458210";
const LOGIN_URL = "https://app.ironcladconsultinggroup.net";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/01-lockup-horizontal.svg"
            alt="Ironclad Consulting Group"
            width={194}
            height={44}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-ink/80 transition-colors duration-160 hover:text-ink"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brass transition-transform duration-220 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${PHONE_HREF}`}
            className="hidden items-center gap-1.5 text-sm font-medium text-ink/80 transition-colors duration-160 hover:text-ink lg:flex"
          >
            <PhoneIcon className="size-4 text-brass" />
            {PHONE}
          </a>
          <a
            href={LOGIN_URL}
            className="text-sm font-medium text-ink/80 transition-colors duration-160 hover:text-ink"
          >
            Client Login
          </a>
          <Link
            href="/contact"
            className="border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors duration-160 hover:border-ink hover:bg-ink hover:text-paper cursor-pointer"
          >
            Get a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-ink md:hidden cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      <div
        className={`grid overflow-hidden border-t border-border transition-[grid-template-rows] duration-220 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="px-3 py-2 text-base font-medium text-ink hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={LOGIN_URL}
              className="px-3 py-2 text-base font-medium text-ink hover:bg-muted"
            >
              Client Login
            </a>
            <Link
              href="/contact"
              onClick={close}
              className="mt-2 border border-ink px-4 py-2 text-center text-sm font-semibold text-ink"
            >
              Get a Consultation
            </Link>
            <a
              href={`tel:${PHONE_HREF}`}
              className="mt-3 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-ink"
            >
              <PhoneIcon className="size-4 text-brass" />
              {PHONE}
            </a>
          </Container>
        </div>
      </div>
    </header>
  );
}
