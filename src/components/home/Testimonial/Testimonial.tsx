"use client";

import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";

import { Container, Title } from "@/components";

import TestimonialSlider from "./TestimonialSlider";
import { TestimonialSectionProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export const Testimonial: FC<TestimonialSectionProps> = ({
  backgroundImage,
  longTitle,
  sliderData,
  title,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isImageError, setIsImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, {
        autoAlpha: 0,
        y: 60,
      });

      gsap.to(sectionRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      });
    }, sectionRef);

    return (): void => ctx.revert();
  }, []);

  return (
    <Container
      className="relative overflow-x-hidden py-20 opacity-0 md:pb-35.5 xl:py-36.5"
      id="testimonial"
      ref={sectionRef}
    >
      {backgroundImage.src && !isImageError && (
        <Image
          alt={backgroundImage.alt}
          className={clsx(
            "absolute top-9.5 left-1/2 -z-10 mx-auto w-full -translate-x-1/2 object-cover",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          height={470}
          onError={() => setIsImageError(true)}
          onLoad={() => setIsImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
          src={backgroundImage.src}
          title={backgroundImage.alt}
          width={1440}
        />
      )}
      <div className="mx-auto w-full max-w-360 px-4 md:px-6 xl:pr-22.5 xl:pl-17.5">
        <Title title={title} />
      </div>
      <TestimonialSlider longTitle={longTitle} sliderData={sliderData} />
    </Container>
  );
};
