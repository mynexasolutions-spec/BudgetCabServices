import type { MetadataRoute } from "next";

const baseUrl = "https://budget-cab-services.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/mumbai-outstation-cabs", "/cab-services", "/cab-booking", "/contact", "/faq", "/about"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "weekly", priority: path === "/mumbai-outstation-cabs" ? 0.9 : 0.7 }));
}
