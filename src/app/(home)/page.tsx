import { FC } from "react";

import rawData from "@/content/home-page-data.json";
import {
  Contact,
  Hero,
  OurBlog,
  OurServicesAndFacilities,
  ShippingService,
  Testimonial,
  WhyChooseUs,
} from "@/components";

import { HomePageDataType } from "./types";

const Home: FC = () => {
  const data = rawData as HomePageDataType;

  const {
    heroSection,
    shippingService,
    whyChooseUsSection,
    ourServicesAndFacilitiesSection,
    testimonialSection,
    contactSection,
    blogSection,
  } = data;

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
        <Hero {...heroSection} />
        <ShippingService {...shippingService} />
        <WhyChooseUs {...whyChooseUsSection} />
        <OurServicesAndFacilities {...ourServicesAndFacilitiesSection} />
        <Testimonial {...testimonialSection} />
        <Contact {...contactSection} />
        <OurBlog {...blogSection} />
      </>
    </>
  );
};

export default Home;
