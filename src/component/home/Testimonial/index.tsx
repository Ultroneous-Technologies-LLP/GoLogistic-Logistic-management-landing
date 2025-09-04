import { FC } from "react";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialSection } from "@/types/home-page-types";
import Image from "next/image";
import { Container, SectionHeading } from "@/component/common";

interface testimonialSectionData {
  data: testimonialSection;
}

const Testimonial: FC<testimonialSectionData> = ({ data }) => {
  return (
    <Container
      id="testimonial"
      className="py-20 md:pb-35.5 xl:py-36.5 relative"
    >
      <Image
        src={data.backgroundImage.src}
        alt={data.backgroundImage.alt}
        width={1440}
        height={470}
        className="mx-auto absolute top-9.5 left-1/2 -translate-x-1/2 -z-10 object-cover w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        title={data.backgroundImage.alt}
      />
      <div className="max-w-360 w-full mx-auto px-4 md:px-6 xl:pl-17.5 xl:pr-22.5">
        <SectionHeading title={data.title} />
      </div>
      <TestimonialSlider data={data} />
    </Container>
  );
};

export default Testimonial;
