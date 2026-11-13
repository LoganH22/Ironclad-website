import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Search engines ignore the change-frequency and priority hints, and a
// "last modified" date that is really just the build time is misleading, so
// the sitemap lists only the pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/dashboard", "/about", "/contact", "/privacy", "/terms"];
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}
