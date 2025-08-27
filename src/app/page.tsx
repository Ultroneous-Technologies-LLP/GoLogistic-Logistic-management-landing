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
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        welcome to gologistic logistic management system
      </div>
    </>
  );
}
