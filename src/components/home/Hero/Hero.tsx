"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef } from "react";

import { Container, Link } from "@/components";
import { useInViewObserver, UseInViewTypeEnum } from "@/hooks";

import { HeroSectionProps } from "./types";

export const Hero: FC<HeroSectionProps> = ({
  backgroundImage,
  description,
  title,
  heroButtons,
}) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInViewObserver({ singleAnimationRef: heroRef });

  return (
    <Container backgroundClassName="pt-20" className="relative" id="home" ref={heroRef}>
      <Image
        alt={backgroundImage.alt}
        className="absolute -z-20 h-full w-full object-cover"
        height={470}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        src={backgroundImage.src}
        title={backgroundImage.alt}
        width={1440}
      />
      <div className="flex flex-col gap-2 px-4 pb-20 md:flex-row md:items-center md:gap-4 md:px-6 md:pb-19 xl:items-start xl:gap-11.5 xl:px-17.5 xl:pt-37.5 xl:pb-31.5">
        <h1
          className={clsx(
            "w-full max-w-102.5 text-2xl/9 font-semibold transition-all duration-700 ease-out md:text-4xl/13.5 xl:max-w-143.5 xl:text-5xl xl:leading-16",
            getAnimation({
              animationType: UseInViewTypeEnum.IN_LEFT,
            })
          )}
        >
          <span>{title}</span>
        </h1>
        <div
          className={getAnimation({
            animationType: UseInViewTypeEnum.IN_RIGHT,
          })}
        >
          <p className="pb-4 text-sm/4.5 md:pb-8 md:text-sm/5 xl:pb-10.5 xl:text-lg/10">
            <span>{description}</span>
          </p>
          <div className="flex w-full gap-2 xl:gap-6">
            {heroButtons.map(({ ariaLabel, href, id, label, variant }) => (
              <div key={id}>
                <Link
                  aria-label={ariaLabel}
                  className="inline-block rounded-xl px-7.5 py-3 !text-base/6 xl:px-16 xl:py-1.5 xl:!text-xl/9"
                  href={href}
                  label={label}
                  variant={variant}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
