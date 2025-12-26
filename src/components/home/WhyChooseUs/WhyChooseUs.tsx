"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, ReactElement, useLayoutEffect, useRef } from "react";

import { Container, Title } from "@/components";

import { ICONS_ARRAY } from "./constant";
import { Icons, WhyChooseUsSectionProps } from "./types";

const ANIMATION_DURATION_MS = 150;
const MAX_DELAY_MS = 1000;

gsap.registerPlugin(ScrollTrigger);

export const getFeatureIcon = (icon: Icons, className?: string): ReactElement | null => {
  const item = ICONS_ARRAY.find((i) => i.key === icon);
  if (!item) {
    return null;
  }
  const IconComponent = item.component;
  return <IconComponent className={className} />;
};

export const WhyChooseUs: FC<WhyChooseUsSectionProps> = ({
  descriptions,
  longTitle,
  title,
  whyChooseUsFeaturesData,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.fromTo(
      sectionRef.current,
      { autoAlpha: 0, x: -40 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      }
    );

    featuresRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: 40 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          delay: index * (ANIMATION_DURATION_MS / MAX_DELAY_MS),
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <Container
      className="overflow-hidden px-4 py-20 md:px-6 xl:px-17.5 xl:py-37"
      id="why-choose-us"
      ref={sectionRef}
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-6 xl:gap-12">
        {/* Left section */}
        <div className="w-full max-w-146">
          <Title title={title} />
          <h3 className="pb-2.5 text-xl/7.5 font-bold text-black xl:pb-3.5 xl:text-4xl/12.5">
            <span>{longTitle}</span>
          </h3>
          {descriptions.map(({ id, description }) => (
            <p
              className="xl:text-22/10 text-spanish-gray pb-6 text-sm/4.5 font-normal last:pb-0"
              key={id}
            >
              <span>{description}</span>
            </p>
          ))}
        </div>

        {/* Right section */}
        <div className="flex w-full max-w-128.5 flex-col xl:mt-14.5">
          {whyChooseUsFeaturesData.map(({ id, icon, title: featureTitle, description }) => (
            <article
              className="flex transform gap-4 pb-5 last:pb-0 xl:gap-10 xl:pb-13.5"
              key={id}
              ref={(el) => {
                if (el && !featuresRefs.current.includes(el as HTMLDivElement)) {
                  featuresRefs.current.push(el as HTMLDivElement);
                }
              }}
            >
              <div aria-hidden="true">{getFeatureIcon(icon, "fill-black")}</div>
              <div>
                <h4 className="pb-1 text-xl/7.5 font-semibold xl:pb-0.5 xl:text-[28px]/12.5">
                  <span>{featureTitle}</span>
                </h4>
                <p className="xl:text-22/10 text-spanish-gray text-sm/4.5">
                  <span>{description}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};
