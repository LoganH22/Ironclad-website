import type { NextConfig } from "next";

// Security headers sent on every response. Deliberately conservative: they
// harden the site without a script allow-list that could break the third-party
// scripts it loads (Google's publisher button).
const securityHeaders = [
  // Nobody may put the site inside a frame (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
  },
  // Browsers must trust the declared content type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site uses none of these browser features.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework in an "X-Powered-By" header.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
