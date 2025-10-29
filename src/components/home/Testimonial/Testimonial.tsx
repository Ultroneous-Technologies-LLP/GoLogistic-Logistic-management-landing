"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef } from "react";

import { useInView, UseInViewTypeEnum } from "@/hooks";
import { Container, Title } from "@/components";

import { TestimonialSectionProps } from "./types";
import TestimonialSlider from "./TestimonialSlider";

export const Testimonial: FC<TestimonialSectionProps> = ({
  backgroundImage,
  longTitle,
  sliderData,
  title,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);

  return (
    <Container
      ref={sectionRef}
      id="testimonial"
      className={clsx(
        "py-20 md:pb-35.5 xl:py-36.5 relative overflow-x-hidden transition-transform duration-700",
        getAnimation({
          animationType: UseInViewTypeEnum.UP,
        })
      )}
    >
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
};
