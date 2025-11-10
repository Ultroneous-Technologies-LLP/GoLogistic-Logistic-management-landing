"use client";

import clsx from "clsx";
import { FC, ReactElement, useRef } from "react";

import { Container, Title } from "@/components";
import { useInView, useMultipleInView, UseInViewTypeEnum } from "@/hooks";

import { ICONS_ARRAY } from "./constant";
import { Icons, WhyChooseUsSectionProps } from "./types";

const ANIMATION_DURATION_MS = 150;
const SCROLL_THRESHOLD = 0.3;

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
  const { getAnimation: getSectionAnimation } = useInView(sectionRef);
  const { refs, getAnimation } = useMultipleInView(
    whyChooseUsFeaturesData.length,
    SCROLL_THRESHOLD
  );

  return (
    <Container
      className="overflow-hidden px-4 py-20 md:px-6 xl:px-17.5 xl:py-37"
      id="why-choose-us"
      ref={sectionRef}
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-6 xl:gap-12">
        {/* Left section */}
        <div
          className={clsx(
            "w-full max-w-146 transition-all duration-700",
            getSectionAnimation({ animationType: UseInViewTypeEnum.IN_LEFT })
          )}
        >
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
          {whyChooseUsFeaturesData.map(({ id, icon, title: featureTitle, description }, index) => (
            <article
              className={clsx(
                "flex transform gap-4 pb-5 transition-all duration-700 ease-out last:pb-0 xl:gap-10 xl:pb-13.5",
                getAnimation(index, UseInViewTypeEnum.IN_RIGHT)
              )}
              key={id}
              ref={(el) => {
                refs.current[`${index}`] = el;
              }}
              style={{
                transitionDelay: `${index * ANIMATION_DURATION_MS}ms`,
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
