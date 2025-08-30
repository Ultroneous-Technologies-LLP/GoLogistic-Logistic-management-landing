import {
  Contact,
  Hero,
  OurBlog,
  OurServicesAndFacilites,
  ShipingService,
  Testimonial,
  WhyChooseUs,
} from "@/component/home";
import data from "@/data.json";
import { HomePageData } from "@/utils/type";
import { FC } from "react";

const Home: FC = () => {
  const pageData = data as HomePageData;

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
        <Hero data={pageData.heroSection} />
        <ShipingService data={pageData.shipingService} />
        <WhyChooseUs data={pageData.whyChooseUsSection} />
        <OurServicesAndFacilites
          data={pageData.ourServicesAndFacilitesSection}
        />
        <Testimonial data={pageData.testimonialSection} />
        <Contact data={pageData.contactSection} />
        <OurBlog data={pageData.blogSection} />
      </>
    </>
  );
};

export default Home;
