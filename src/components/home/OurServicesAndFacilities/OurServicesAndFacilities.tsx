"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useState } from "react";

import { Link, Container, Title } from "@/components";
import { BREAKPOINT_XL } from "@/constant";
import { useInView, useIsMobile } from "@/hooks";

import { OurServicesAndFacilitiesSectionProps } from "./types";

const FIRST_INDEX = 0;
const SECOND_INDEX = 1;

export const OurServicesAndFacilities: FC<OurServicesAndFacilitiesSectionProps> = ({
  backgroundImage,
  button,
  longTitle,
  services,
  title,
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(FIRST_INDEX);
  const [isImageError, setIsImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);
  const isMobile = useIsMobile(BREAKPOINT_XL);

  const handleMouseEnter = (index: number): void => {
    if (isMobile) {
      return;
    }
    setActiveIndex(index);
  };

  const handleMouseLeave = (): void => {
    if (isMobile) {
      return;
    }
    setActiveIndex(null);
  };

  const handleClick = (index: number): void => {
    if (!isMobile) {
      return;
    }
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container
      aria-label="services-heading"
      backgroundClassName={clsx(
        "bg-black relative overflow-x-hidden transition-transform z-0",
        getAnimation()
      )}
      id="services"
      ref={sectionRef}
    >
      {backgroundImage.src && !isImageError && (
        <Image
          alt={backgroundImage.alt || ""}
          className={clsx(
            "absolute bottom-46 z-0 opacity-25 xl:top-104 xl:bottom-[unset]",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          height={511}
          onError={() => setIsImageError(true)}
          onLoad={() => setIsImageLoaded(true)}
          src={backgroundImage.src}
          title={backgroundImage.alt}
          width={1440}
        />
      )}
      <div className="relative z-10 px-4 py-12.5 md:px-6 xl:px-20 xl:py-42">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-38">
          <div className="md:col-span-2 xl:col-span-1">
            <Title title={title} variant="white" />
            <p className="pb-8 text-xl/7.5 font-bold text-white xl:max-w-[364px] xl:pb-0 xl:text-4xl/12.5">
              <span>{longTitle}</span>
            </p>
          </div>
          {services.map(({ alt, id, src, title: servicesTitle }, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                className={clsx(
                  "rounded-20 mx-auto flex w-full max-w-91 justify-between gap-5 overflow-hidden transition-all duration-700 ease-in-out xl:mr-auto xl:ml-0",
                  isActive ? "h-85 bg-white text-black" : "h-50 bg-transparent text-white"
                )}
                key={id}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Text Content */}
                <div className="flex w-full max-w-55 flex-col justify-between py-8 pl-8 break-words xl:pt-10 xl:pb-7.5 xl:pl-9.5">
                  <h3 className="flex flex-col text-2xl/9 font-semibold">
                    {index + SECOND_INDEX} <br />
                    <span>{servicesTitle}</span>
                  </h3>
                  <div
                    className={clsx("transition-all duration-700", {
                      "translate-y-0 opacity-100 delay-200": isActive,
                      "pointer-events-none translate-y-2 opacity-0 delay-0": !isActive,
                    })}
                  >
                    <Link
                      aria-label={button.ariaLabel}
                      className="inline-block w-fit rounded-md px-10 py-2.5 text-center !font-medium hover:!font-medium"
                      href={button.href}
                      label={button.label}
                      variant={button.variant}
                    />
                  </div>
                </div>
                <div
                  className={clsx("-mr-2.5 max-w-27 transition-all duration-700", {
                    "translate-x-0 opacity-100 delay-300": isActive,
                    "pointer-events-none translate-x-2 opacity-0 delay-0": !isActive,
                  })}
                >
                  <Image
                    alt={alt}
                    className={index === FIRST_INDEX ? "h-full" : ""}
                    height={343}
                    src={src}
                    title={alt}
                    width={109}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
