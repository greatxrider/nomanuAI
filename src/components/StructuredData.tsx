"use client";

interface StructuredDataProps {
  type: "WebPage" | "Service" | "Article" | "FAQPage";
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  organization?: string;
}

export default function StructuredData({
  type,
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
  organization = "NomanuAI",
}: StructuredDataProps) {
  const baseUrl = "https://www.nomanuai.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: description,
    url: `${baseUrl}${url}`,
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: `${baseUrl}${image}`,
      },
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(author && { author: { "@type": "Person", name: author } }),
    publisher: {
      "@type": "Organization",
      name: organization,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/nomanuai-logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
