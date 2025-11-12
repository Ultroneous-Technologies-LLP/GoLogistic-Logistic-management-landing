"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef } from "react";

import { Container, Title } from "@/components";
import { useInViewObserver } from "@/hooks";

import TestimonialSlider from "./TestimonialSlider";
import { TestimonialSectionProps } from "./types";

export const Testimonial: FC<TestimonialSectionProps> = ({
  longTitle,
  testimonialItems,
  title,
  backgroundImage,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInViewObserver(sectionRef);

  return (
    <Container
      className={clsx(
        "relative overflow-x-hidden py-20 transition-transform duration-700 md:pb-35.5 xl:py-36.5",
        getAnimation()
      )}
      id="testimonial"
      ref={sectionRef}
    >
      <Image
        alt={backgroundImage.alternativeText}
        className="absolute top-9.5 left-1/2 -z-10 mx-auto w-full -translate-x-1/2 object-cover"
        height={470}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        src={`http://localhost:1337${backgroundImage.url}`}
        title={backgroundImage.alternativeText}
        width={1440}
      />
      <div className="mx-auto w-full max-w-360 px-4 md:px-6 xl:pr-22.5 xl:pl-17.5">
        <Title title={title} />
      </div>
      <TestimonialSlider longTitle={longTitle} sliderData={testimonialItems} />
    </Container>
  );
};
