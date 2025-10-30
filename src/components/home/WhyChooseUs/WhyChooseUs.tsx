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

  const { refs, getAnimation } = useMultipleInView(
    whyChooseUsFeaturesData.length,
    0.3
  );

  return (
    <Container
      ref={sectionRef}
      id="why-choose-us"
      className="px-4 md:px-6 xl:px-17.5 py-20 xl:py-37 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 xl:gap-12">
        {/* Left section */}
        <div
          className={clsx(
            "max-w-146 w-full transition-all duration-700",
            getSectionAnimation({ animationType: UseInViewTypeEnum.IN_LEFT })
          )}
        >
          <Title title={title} />
          <h3 className="pb-2.5 xl:pb-3.5 text-xl/7.5 xl:text-4xl/12.5 font-bold text-black">
            <span>{longTitle}</span>
          </h3>
          {descriptions.map(({ id, description }) => (
            <p
              key={id}
              className="pb-6 text-sm/4.5 xl:text-22/10 font-normal text-spanish-gray last:pb-0"
            >
              <span>{description}</span>
            </p>
          ))}
        </div>
        <div className="max-w-128.5 w-full xl:mt-14.5 flex flex-col">
          {whyChooseUsFeaturesData.map(
            ({ id, icon, title, description }, index) => {
              const Icon = ICONS[icon as IconKey];

              return (
                <article
                  key={id}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  className={clsx(
                    "flex gap-4 xl:gap-10 pb-5 xl:pb-13.5 last:pb-0 transform transition-all duration-700 ease-out",
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
                    <h4 className="pb-1 xl:pb-0.5 text-xl/7.5 xl:text-[28px]/12.5 font-semibold">
                      <span>{title}</span>
                    </h4>
                    <p className="text-sm/4.5 xl:text-22/10 text-spanish-gray">
                      <span>{description}</span>
                    </p>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </Container>
  );
};
