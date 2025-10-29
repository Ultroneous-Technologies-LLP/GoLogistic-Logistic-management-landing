"use client";

import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";

import { useInView, UseInViewTypeEnum } from "@/hooks";
import { Container, Title } from "@/components";

import { ICONS } from "./constant";
import { IconKey, WhyChooseUsSectionProps } from "./types";

export const WhyChooseUs: FC<WhyChooseUsSectionProps> = ({
  descriptions,
  longTitle,
  title,
  whyChooseUsFeaturesData,
}) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { inView, getAnimation } = useInView(sectionRef);

  useEffect(() => {
    if (!inView) {
      const resetTimeout = setTimeout(() => setVisibleIndex(null), 300);
      return () => clearTimeout(resetTimeout);
    }

    const timeouts: NodeJS.Timeout[] = [];

    whyChooseUsFeaturesData.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleIndex((prev) => (prev !== index ? index : prev));
      }, index * 700);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [inView, whyChooseUsFeaturesData]);

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
            getAnimation({ animationType: UseInViewTypeEnum.IN_LEFT })
          )}
        >
          <Title title={title} />
          <h3 className="pb-2.5 xl:pb-3.5 text-xl/7.5 xl:text-4xl/12.5 font-bold text-black transition-all duration-700">
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
              const isVisible = visibleIndex !== null && index <= visibleIndex;

              return (
                <article
                  key={id}
                  className={clsx(
                    "flex gap-4 xl:gap-10 pb-5 xl:pb-13.5 last:pb-0 transform transition-all duration-500",
                    {
                      "opacity-100 translate-x-0": isVisible,
                      "opacity-0 translate-x-5": !isVisible,
                    }
                  )}
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
