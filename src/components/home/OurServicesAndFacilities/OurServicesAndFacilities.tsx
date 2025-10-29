"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef, useState } from "react";

import { BREAKPOINT_Xl } from "@/constant";
import { useInView, UseInViewTypeEnum, useIsMobile } from "@/hooks";
import { Link, Container, Title } from "@/components";

import { OurServicesAndFacilitiesSectionProps } from "./types";

export const OurServicesAndFacilities: FC<
  OurServicesAndFacilitiesSectionProps
> = ({ backgroundImage, button, longTitle, services, title }) => {
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
        getAnimation({
          animationType: UseInViewTypeEnum.UP,
        })
      )}
      aria-label="services-heading"
    >
      <Image
        width={1440}
        height={511}
        alt={backgroundImage.alt}
        src={backgroundImage.src}
        title={backgroundImage.alt}
        className="absolute bottom-46 xl:bottom-[unset] xl:top-104 z-0 opacity-25"
      />
      <div className="px-4 md:px-6 xl:px-20 py-12.5 xl:py-42 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-3 xl:gap-y-38">
          <div className="md:col-span-2 xl:col-span-1">
            <Title title={title} variant="white" />
            <p className="pb-8 xl:pb-0 text-xl/7.5 xl:text-4xl/12.5 font-bold text-white xl:max-w-[364px]">
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
                  "rounded-20 w-full flex gap-5 justify-between max-w-91 mx-auto xl:ml-0 xl:mr-auto overflow-hidden transition-all duration-700 ease-in-out",
                  isActive
                    ? "bg-white text-black h-85"
                    : "bg-transparent text-white h-50"
                )}
              >
                {/* Text Content */}
                <div className="max-w-55 w-full pl-8 py-8 xl:pt-10 xl:pl-9.5 xl:pb-7.5 flex flex-col justify-between break-words">
                  <h3 className="text-2xl/9 font-semibold flex flex-col">
                    {index + 1} <br />
                    <span>{title}</span>
                  </h3>
                  <div
                    className={clsx("transition-all duration-700", {
                      "opacity-100 translate-y-0 delay-200": isActive,
                      "opacity-0 translate-y-2 delay-0 pointer-events-none":
                        !isActive,
                    })}
                  >
                    <Link
                      variant={button.variant}
                      href={button.href}
                      className="w-fit !font-medium hover:!font-medium rounded-md text-center inline-block py-2.5 px-10"
                      aria-label={button.ariaLabel}
                      label={button.label}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    "max-w-27 -mr-2.5 transition-all duration-700",
                    {
                      "opacity-100 translate-x-0 delay-300": isActive,
                      "opacity-0 translate-x-2 delay-0 pointer-events-none":
                        !isActive,
                    }
                  )}
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
