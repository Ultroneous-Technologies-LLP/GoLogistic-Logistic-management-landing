import { FC } from "react";
import Image from "next/image";

import { Container, Title } from "../../common";
import { TestimonialSectionProps } from "./types";
import TestimonialSlider from "./TestimonialSlider";

export const Testimonial: FC<TestimonialSectionProps> = ({
  backgroundImage,
  longTitle,
  sliderData,
  title,
}) => (
  <Container id="testimonial" className="py-20 md:pb-35.5 xl:py-36.5 relative">
    <Image
      src={backgroundImage.src}
      alt={backgroundImage.alt}
      width={1440}
      height={470}
      className="mx-auto absolute top-9.5 left-1/2 -translate-x-1/2 -z-10 object-cover w-full"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
      title={backgroundImage.alt}
    />
    <div className="max-w-360 w-full mx-auto px-4 md:px-6 xl:pl-17.5 xl:pr-22.5">
      <Title title={title} />
    </div>
    <TestimonialSlider longTitle={longTitle} sliderData={sliderData} />
  </Container>
);
