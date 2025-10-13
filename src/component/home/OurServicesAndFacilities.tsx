"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { Button, Container, Title } from "@/component/common";
import { ourServicesAndFacilitiesSection } from "@/types/home-page-types";
import clsx from "clsx";

interface OurServicesAndFacilitiesProps {
  data: ourServicesAndFacilitiesSection;
}

const OurServicesAndFacilities: FC<OurServicesAndFacilitiesProps> = ({
  data,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1280;

  const handleActivate = (index: number) => {
    if (isMobile) {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <Container
        id="service"
        backgroundClassName="bg-black relative"
        aria-label="services-heading"
      >
        <Image
          width={1440}
          height={511}
          alt={data.backgroundImage.alt}
          src={data.backgroundImage.src}
          title={data.backgroundImage.alt}
          className="absolute bottom-46 xl:bottom-[unset] xl:top-104 z-0 opacity-25"
        />
        <div className="px-4 md:px-6 xl:px-20 py-12.5 xl:py-42 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-3 xl:gap-y-38">
            <div className="md:col-span-2 xl:col-span-1">
              <Title title={data.title} variant="white" />
              <p className="pb-8 xl:pb-0 text-xl/7.5 xl:text-4xl/12.5 font-bold text-white xl:max-w-[364px]">
                <span>{data.longTitle}</span>
              </p>
            </div>
            {data.services.map((value, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  className={clsx(
                    "rounded-20 w-full flex gap-5 justify-between max-w-91 mx-auto xl:ml-0 xl:mr-auto overflow-hidden",
                    "transition-all duration-700 ease-in-out",
                    isActive
                      ? "bg-white text-black h-85"
                      : "bg-transparent text-white h-50"
                  )}
                  key={value.id}
                  onMouseEnter={
                    !isMobile ? () => setActiveIndex(index) : undefined
                  }
                  onMouseLeave={
                    !isMobile ? () => setActiveIndex(-1) : undefined
                  }
                  onClick={isMobile ? () => handleActivate(index) : undefined}
                >
                  <div className="max-w-55 w-full pl-8 py-8 xl:pt-10 xl:pl-9.5 xl:pb-7.5 flex flex-col justify-between break-words">
                    <h3 className="text-2xl/9 font-semibold flex flex-col">
                      {index + 1} <br />
                      <span>{value.title}</span>
                    </h3>
                    <div
                      className={clsx(
                        "transition-all duration-700",
                        isActive
                          ? "opacity-100 translate-y-0 delay-200"
                          : "opacity-0 translate-y-2 delay-0 pointer-events-none"
                      )}
                    >
                      <Button
                        variant={data.button.variant}
                        as="link"
                        href={data.button.href}
                        className="w-fit !font-medium hover:!font-medium rounded-md text-center inline-block"
                        aria-label={data.button.ariaLabel}
                      >
                        {data.button.label}
                      </Button>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "max-w-27 -mr-2.5 transition-all duration-700",
                      isActive
                        ? "opacity-100 translate-x-0 delay-300"
                        : "opacity-0 translate-x-2 delay-0 pointer-events-none"
                    )}
                  >
                    <Image
                      width={109}
                      height={343}
                      alt={value.alt}
                      src={value.src}
                      title={value.alt}
                      className={index === 0 ? "h-full" : ""}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurServicesAndFacilities;
