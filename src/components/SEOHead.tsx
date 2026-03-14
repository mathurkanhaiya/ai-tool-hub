import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
}

const SEOHead = ({ title, description, canonical }: SEOHeadProps) => {
  useEffect(() => {

    document.title = `${title} | Free AI Tools Hub`;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(
        `meta[${attr}="${name}"]`
      ) as HTMLMetaElement | null;

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }

      el.content = content;
    };

    // Basic SEO
    setMeta("description", description);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");

    // WhatsApp / Social preview image
    setMeta(
      "og:image",
      "https://i.ibb.co/Y4GzrkLh/C921394-F-ABA8-4-C2-C-A4-C0-7321-E9-E46-BDC.png",
      "property"
    );

    // Twitter preview
    setMeta(
      "twitter:image",
      "https://i.ibb.co/Y4GzrkLh/C921394-F-ABA8-4-C2-C-A4-C0-7321-E9-E46-BDC.png"
    );

    if (canonical) {
      let link = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }

      link.href = canonical;
    }

  }, [title, description, canonical]);

  return null;
};

export default SEOHead;