export default function OrganizationSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Litas Technologies",
    alternateName: "LitasTech",
    url: "https://litastech.in/",
    logo: "https://litastech.in/logo.png",
    description:
      "Litas Technologies builds web applications, mobile applications, CRM solutions and AI automation solutions for service businesses.",
    email: "ravikumarsoftware18@gmail.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization),
      }}
    />
  );
}
