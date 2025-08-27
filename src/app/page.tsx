import Hero from "@/component/home/Hero";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GoLogistic",
            url: "https://www.gologistic.example/",
            logo: "https://www.gologistic.example/favicon.png",
            sameAs: [
              "https://linkedin.com",
              "https://twitter.com",
              "https://facebook.com",
            ],
            description:
              "Reliable logistics management platform offering shipping, warehousing, and supply chain solutions.",
          }),
        }}
      />
      <>
        <Hero />
      </>
    </>
  );
}
