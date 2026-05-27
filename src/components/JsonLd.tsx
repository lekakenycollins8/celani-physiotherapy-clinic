export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: "CELANI Physiotherapy & Sports Injuries Clinic",
    description:
      "Professional physiotherapy and rehabilitation clinic in Nairobi specialising in orthopedic, sports and pelvic floor rehabilitation.",
    "@id": "https://www.celaniphysio.com",
    url: "https://www.celaniphysio.com",
    telephone: "+254791484940",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Princess Park Apartments, Ground Floor Room 10, Kibera Road Off Kabarnet Road",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.3031,
      longitude: 36.7771,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasMap: "https://www.google.com/maps/search/Princess+Park+Apartments+Ground+Floor+Room+10+Kibera+Road+Off+Kabarnet+Road+Nairobi",
    medicalSpecialty: [
      "Physiotherapy",
      "Sports Medicine",
      "Orthopedic Rehabilitation",
      "Pelvic Floor Rehabilitation",
    ],
    sameAs: [`https://wa.me/254791484940`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
