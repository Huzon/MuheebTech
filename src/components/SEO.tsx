import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
};

export const SEO = ({ title, description, path = "/", noIndex = false }: SEOProps) => {
  useEffect(() => {
    const siteUrl = "https://www.muheebtechnicals.com";
    const canonicalUrl = new URL(path, siteUrl).toString();
    const fullTitle = `${title} | Muheeb Technical Services Dubai`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "muheeb-local-business-schema";
    document.getElementById(schemaId)?.remove();

    if (!noIndex) {
      const schema = document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      schema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "Muheeb Technical Services",
        description,
        url: siteUrl,
        image: `${siteUrl}/muheeb_icon.png`,
        telephone: "+971566036352",
        email: "info@muheebtechnical.com",
        areaServed: { "@type": "City", name: "Dubai" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        serviceType: [
          "Custom joinery",
          "Interior execution",
          "Event fabrication and installation",
          "Painting and wallpaper installation",
          "Custom furniture",
          "Flooring and ceiling work",
        ],
      });
      document.head.appendChild(schema);
    }

    return () => document.getElementById(schemaId)?.remove();
  }, [description, noIndex, path, title]);

  return null;
};
