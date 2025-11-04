"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useState } from "react";

import { BREAKPOINT_Xl } from "@/constant";
import { useInView, useIsMobile } from "@/hooks";
import { Link, Container, Title } from "@/components";

import { OurServicesAndFacilitiesSectionProps } from "./types";

export const OurServicesAndFacilities: FC<OurServicesAndFacilitiesSectionProps> = ({
  backgroundImage,
  button,
  longTitle,
  services,
  title,
}) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);
  const isMobile = useIsMobile(BREAKPOINT_Xl);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveIndex(null);
  };

  const handleClick = (index: number) => {
    if (isMobile) setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container
      ref={sectionRef}
      id="services"
      backgroundClassName={clsx(
        "bg-black relative overflow-x-hidden transition-transform z-0",
        getAnimation()
      )}
      aria-label="services-heading"
    >
      <Image
        width={1440}
        height={511}
        alt={backgroundImage.alt}
        src={backgroundImage.src}
        title={backgroundImage.alt}
        className="absolute bottom-46 z-0 opacity-25 xl:top-104 xl:bottom-[unset]"
      />
      <div className="relative z-10 px-4 py-12.5 md:px-6 xl:px-20 xl:py-42">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-38">
          <div className="md:col-span-2 xl:col-span-1">
            <Title title={title} variant="white" />
            <p className="pb-8 text-xl/7.5 font-bold text-white xl:max-w-[364px] xl:pb-0 xl:text-4xl/12.5">
              <span>{longTitle}</span>
            </p>
          </div>
          {services.map(({ alt, id, src, title }, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
                className={clsx(
                  "rounded-20 mx-auto flex w-full max-w-91 justify-between gap-5 overflow-hidden transition-all duration-700 ease-in-out xl:mr-auto xl:ml-0",
                  isActive ? "h-85 bg-white text-black" : "h-50 bg-transparent text-white"
                )}
              >
                {/* Text Content */}
                <div className="flex w-full max-w-55 flex-col justify-between py-8 pl-8 break-words xl:pt-10 xl:pb-7.5 xl:pl-9.5">
                  <h3 className="flex flex-col text-2xl/9 font-semibold">
                    {index + 1} <br />
                    <span>{title}</span>
                  </h3>
                  <div
                    className={clsx("transition-all duration-700", {
                      "translate-y-0 opacity-100 delay-200": isActive,
                      "pointer-events-none translate-y-2 opacity-0 delay-0": !isActive,
                    })}
                  >
                    <Link
                      variant={button.variant}
                      href={button.href}
                      className="inline-block w-fit rounded-md px-10 py-2.5 text-center !font-medium hover:!font-medium"
                      aria-label={button.ariaLabel}
                      label={button.label}
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
                    width={109}
                    height={343}
                    alt={alt}
                    src={src}
                    title={alt}
                    className={index === 0 ? "h-full" : ""}
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
