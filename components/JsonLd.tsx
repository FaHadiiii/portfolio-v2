import React from "react";

export function JsonLd() {
  const url = "https://hadiayo.site";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AFH Portfolio",
    "alternateName": ["Ahmad Fakhrul Hadi", "Fakhrul Hadi", "AFH", "hadiayo"],
    "url": url,
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmad Fakhrul Hadi",
    "alternateName": ["Fakhrul Hadi", "AFH", "hadiayo"],
    "url": url,
    "image": `${url}/image/SEO.png`,
    "jobTitle": "Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "ForthNorth Technologies Sdn. Bhd."
    },
    "sameAs": [
      "https://github.com/FaHadiiii",
      "https://www.linkedin.com/in/fakhrulhadi/"
    ],
    "email": "hadiayo39@gmail.com",
    "telephone": "+60166468300",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kuala Lumpur",
      "addressCountry": "MY"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
