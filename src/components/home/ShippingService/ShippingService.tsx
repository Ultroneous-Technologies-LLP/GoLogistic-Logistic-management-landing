"use client";

import clsx from "clsx";
import React, { FC, useRef } from "react";
import Slider from "react-slick";

import { Container } from "@/components";
import { useInViewObserver } from "@/hooks";

import { SETTING_PROPS, SLIDER_CLASS } from "./constant";
import { ShippingServiceProps } from "./types";

export const ShippingService: FC<ShippingServiceProps> = ({
  description,
  shippingServiceImage,
  title,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInViewObserver({ singleAnimationRef: sectionRef });

  return (
    <Container className="px-4 md:px-6 xl:px-17.5">
      <div
        className={clsx(
          "rounded-20 relative z-0 w-full overflow-x-hidden",
          SLIDER_CLASS,
          getAnimation()
        )}
        ref={sectionRef}
      >
        <Slider
          {...SETTING_PROPS}
          appendDots={(dots: React.ReactNode) => (
            <ul className="mt-6 flex justify-center gap-2 md:gap-3">{dots}</ul>
          )}
          customPaging={() => (
            <div className="h-2 w-5 cursor-pointer rounded-full bg-white opacity-50 transition-all duration-300 xl:w-7" />
          )}
        >
          {shippingServiceImage.map(({ alt, desktopSrc, id, mobileSrc, tabletSrc }) => (
            <div className="relative w-full" key={id}>
              <div className="relative z-10 -mb-5 md:-mb-10 xl:-mb-20">
                <h2 className="pb-2 text-center text-xl font-semibold md:text-[32px] md:leading-12 xl:pb-3 xl:leading-none">
                  <span>{title}</span>
                </h2>
                <p className="mx-auto w-full max-w-55.5 text-center text-sm/5 text-[#7b7b7b] md:max-w-85.5 xl:max-w-112 xl:text-lg/7">
                  <span>{description}</span>
                </p>
              </div>
              <picture className="rounded-20 z-0 w-full overflow-hidden">
                <source height={728} media="(min-width: 1280px)" srcSet={desktopSrc} width={1300} />
                <source
                  className="h-full w-full"
                  height="auto"
                  media="(min-width: 768px)"
                  srcSet={tabletSrc}
                  width={1200}
                />
                <img
                  alt={alt}
                  className="rounded-20 overflow-hidden"
                  height="auto"
                  loading="lazy"
                  src={mobileSrc}
                  title={alt}
                  width={767}
                />
              </picture>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};
