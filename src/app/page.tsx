import { notFound } from "next/navigation";
import { FC } from "react";

import {
  // Contact,
  Hero,
  // OurBlog,
  // OurServicesAndFacilities,
  // ShippingService,
  // Testimonial,
  // WhyChooseUs,
} from "@/components";
// import rawData from "@/content/home-page-data.json";
import { axiosInstance } from "@/utils/axios";

import { HomePageDataType } from "./types";

async function HomeData(): Promise<HomePageDataType> {
  try {
    const response = await axiosInstance.get<{ data: HomePageDataType }>(
      "/logistics-ans-transport-website-landing-page?pLevel=7"
    );
    return response.data;
  } catch {
    notFound();
  }
}

const Home: FC = async () => {
  const strapiData = await HomeData();

  const { hero }: HomePageDataType = strapiData;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GoLogistic",
            url: "https://www.gologistic.example/",
            logo: "https://www.gologistic.example/favicon.png",
            sameAs: ["https://linkedin.com", "https://twitter.com", "https://facebook.com"],
            description:
              "Reliable logistics management platform offering shipping, warehousing, and supply chain solutions.",
          }),
        }}
        type="application/ld+json"
      />
      <>
        <Hero {...hero} />
        {/* <ShippingService {...shippingService} />
        <WhyChooseUs {...whyChooseUsSection} />
        <OurServicesAndFacilities {...ourServicesAndFacilitiesSection} />
        <Testimonial {...testimonialSection} />
        <Contact {...contactSection} />
        <OurBlog {...blogSection} /> */}
      </>
    </>
  );
};

export default Home;
