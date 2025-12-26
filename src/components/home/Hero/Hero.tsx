"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

import { Container, Link } from "@/components";

import { HeroSectionProps } from "./types";

export const Hero: FC<HeroSectionProps> = ({
  backgroundImage,
  description,
  title,
  heroButtons,
}) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isImageError, setIsImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 2,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <Container
      backgroundClassName="pt-20"
      className="relative overflow-x-hidden"
      id="home"
      ref={heroRef}
    >
      {backgroundImage.src && !isImageError && (
        <Image
          alt={backgroundImage.alt || ""}
          className={clsx(
            "absolute -z-20 h-full w-full object-cover transition-opacity duration-500",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          height={470}
          onError={() => setIsImageError(true)}
          onLoad={() => setIsImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
          src={backgroundImage.src}
          title={backgroundImage.alt || ""}
          width={1440}
        />
      )}
      <div className="flex flex-col gap-2 px-4 pb-20 md:flex-row md:items-center md:gap-4 md:px-6 md:pb-19 xl:items-start xl:gap-11.5 xl:px-17.5 xl:pt-37.5 xl:pb-31.5">
        <h1
          className="w-full max-w-102.5 text-2xl/9 font-semibold md:text-4xl/13.5 xl:max-w-143.5 xl:text-5xl xl:leading-16"
          ref={titleRef}
        >
          <span>{title}</span>
        </h1>

        <div ref={contentRef}>
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
