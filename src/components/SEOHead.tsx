import { useEffect } from "react";
import { highCpmCountries } from "@/data/countries";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

const BASE_URL = "https://viralaitools.xyz";
const LOGO_URL = "https://i.ibb.co/Y4GzrkLh/C921394-F-ABA8-4-C2-C-A4-C0-7321-E9-E46-BDC.png";

const SEOHead = ({ title, description, canonical, keywords }: SEOHeadProps) => {
  useEffect(() => {
    document.title = `${title} | Free AI Tools Hub`;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // Basic SEO
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Free AI Tools Hub", "property");
    setMeta("og:image", LOGO_URL, "property");
    setMeta("og:image:width", "512", "property");
    setMeta("og:image:height", "512", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", LOGO_URL);

    // Canonical
    const canonicalUrl = canonical || `${BASE_URL}${window.location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // Set og:url
    setMeta("og:url", canonicalUrl, "property");

    // Hreflang tags for high-CPM countries
    // Remove old hreflang links
    document.querySelectorAll('link[hreflang]').forEach((el) => el.remove());

    // Add x-default
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.href = `${BASE_URL}${window.location.pathname}`;
    document.head.appendChild(xDefault);

    // Add country-specific hreflang
    highCpmCountries.forEach((country) => {
      const hreflangLink = document.createElement("link");
      hreflangLink.rel = "alternate";
      hreflangLink.setAttribute("hreflang", country.hreflang);
      hreflangLink.href = `${BASE_URL}${window.location.pathname}`;
      document.head.appendChild(hreflangLink);
    });

  }, [title, description, canonical, keywords]);

  return null;
};

export default SEOHead;
