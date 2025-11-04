"use client";

import clsx from "clsx";
import Slider from "react-slick";
import React, { FC, useRef } from "react";

import { useInView } from "@/hooks";
import { Container } from "@/components";

import { ShippingServiceProps } from "./types";
import { SETTING_PROPS, SLIDER_CLASS } from "./constant";

export const ShippingService: FC<ShippingServiceProps> = ({
  description,
  shippingServiceImage,
  title,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);

  return (
    <Container className="px-4 md:px-6 xl:px-17.5">
      <div
        ref={sectionRef}
        className={clsx(
          "rounded-20 relative z-0 w-full overflow-x-hidden",
          SLIDER_CLASS,
          getAnimation()
        )}
      >
        <Slider
          {...SETTING_PROPS}
          customPaging={() => (
            <div className="h-2 w-5 cursor-pointer rounded-full bg-white opacity-50 transition-all duration-300 xl:w-7" />
          )}
          appendDots={(dots: React.ReactNode) => (
            <ul className="mt-6 flex justify-center gap-2 md:gap-3">{dots}</ul>
          )}
        >
          {shippingServiceImage.map(({ alt, desktopSrc, id, mobileSrc, tabletSrc }) => (
            <div key={id} className="relative w-full">
              <div className="relative z-10 -mb-5 md:-mb-10 xl:-mb-20">
                <h2 className="pb-2 text-center text-xl font-semibold md:text-[32px] md:leading-12 xl:pb-3 xl:leading-none">
                  <span>{title}</span>
                </h2>
                <p className="mx-auto w-full max-w-55.5 text-center text-sm/5 text-[#7b7b7b] md:max-w-85.5 xl:max-w-112 xl:text-lg/7">
                  <span>{description}</span>
                </p>
              </div>
              <picture className="rounded-20 z-0 w-full overflow-hidden">
                <source srcSet={desktopSrc} media="(min-width: 1280px)" width={1300} height={728} />
                <source
                  srcSet={tabletSrc}
                  media="(min-width: 768px)"
                  width={1200}
                  height="auto"
                  className="h-full w-full"
                />
                <img
                  src={mobileSrc}
                  alt={alt}
                  loading="lazy"
                  width={767}
                  height="auto"
                  title={alt}
                  className="rounded-20 overflow-hidden"
                />
              </picture>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};
