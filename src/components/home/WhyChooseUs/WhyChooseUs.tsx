"use client";

import clsx from "clsx";
import { FC, useRef } from "react";

import { Container, Title } from "@/components";
import { useInView, useMultipleInView, UseInViewTypeEnum } from "@/hooks";

import { ICONS } from "./constant";
import { IconKey, WhyChooseUsSectionProps } from "./types";

export const WhyChooseUs: FC<WhyChooseUsSectionProps> = ({
  descriptions,
  longTitle,
  title,
  whyChooseUsFeaturesData,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { getAnimation: getSectionAnimation } = useInView(sectionRef);

  const { refs, getAnimation } = useMultipleInView(whyChooseUsFeaturesData.length, 0.3);

  return (
    <Container
      ref={sectionRef}
      id="why-choose-us"
      className="overflow-hidden px-4 py-20 md:px-6 xl:px-17.5 xl:py-37"
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
              key={id}
              className="xl:text-22/10 text-spanish-gray pb-6 text-sm/4.5 font-normal last:pb-0"
            >
              <span>{description}</span>
            </p>
          ))}
        </div>
        <div className="flex w-full max-w-128.5 flex-col xl:mt-14.5">
          {whyChooseUsFeaturesData.map(({ id, icon, title, description }, index) => {
            const Icon = ICONS[icon as IconKey];

            return (
              <article
                key={id}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className={clsx(
                  "flex transform gap-4 pb-5 transition-all duration-700 ease-out last:pb-0 xl:gap-10 xl:pb-13.5",
                  getAnimation(index, UseInViewTypeEnum.IN_RIGHT)
                )}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div aria-hidden="true">
                  <Icon className="fill-black" />
                </div>
                <div>
                  <h4 className="pb-1 text-xl/7.5 font-semibold xl:pb-0.5 xl:text-[28px]/12.5">
                    <span>{title}</span>
                  </h4>
                  <p className="xl:text-22/10 text-spanish-gray text-sm/4.5">
                    <span>{description}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
