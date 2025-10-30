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
          "relative z-0 w-full rounded-20 overflow-x-hidden",
          SLIDER_CLASS,
          getAnimation()
        )}
      >
        <Slider
          {...SETTING_PROPS}
          customPaging={() => (
            <div className="w-5 xl:w-7 h-2 rounded-full bg-white opacity-50 transition-all duration-300 cursor-pointer" />
          )}
          appendDots={(dots: React.ReactNode) => (
            <ul className="flex justify-center gap-2 md:gap-3 mt-6">{dots}</ul>
          )}
        >
          {shippingServiceImage.map(
            ({ alt, desktopSrc, id, mobileSrc, tabletSrc }) => (
              <div key={id} className="relative w-full">
                <div className="-mb-5 md:-mb-10 xl:-mb-20 z-10 relative">
                  <h2 className="text-xl md:text-[32px] md:leading-12 xl:leading-none font-semibold pb-2 xl:pb-3 text-center">
                    <span>{title}</span>
                  </h2>
                  <p className="text-sm/5 xl:text-lg/7 max-w-55.5 md:max-w-85.5 xl:max-w-112 text-center w-full mx-auto text-[#7b7b7b]">
                    <span>{description}</span>
                  </p>
                </div>
                <picture className="w-full z-0 rounded-20 overflow-hidden">
                  <source
                    srcSet={desktopSrc}
                    media="(min-width: 1280px)"
                    width={1300}
                    height={728}
                  />
                  <source
                    srcSet={tabletSrc}
                    media="(min-width: 768px)"
                    width={1200}
                    height="auto"
                    className="w-full h-full"
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
            )
          )}
        </Slider>
      </div>
    </Container>
  );
};
