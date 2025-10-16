import { FC } from "react";

import { Container, Title } from "@/components/common";
import { whyChooseUsSectionProps } from "./types";
import { IconKey, iconsMap } from "./constant";

export const WhyChooseUs: FC<whyChooseUsSectionProps> = ({
  descriptions,
  longTitle,
  title,
  whyChooseUsFeaturesData,
}) => (
  <Container
    id="why-choose-us"
    className="px-4 md:px-6 xl:px-17.5 py-20 xl:py-37"
  >
    <Title title={title} />
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 xl:gap-12">
      <div className="max-w-146 w-full">
        <h3 className="pb-2.5 xl:pb-3.5 text-xl/7.5 xl:text-4xl/12.5 font-bold text-black">
          <span>{longTitle}</span>
        </h3>
        {descriptions.map(({ description, id }) => (
          <p
            className="pb-6 text-sm/4.5 xl:text-22/10 font-normal text-spanish-gray last:pb-0"
            key={id}
          >
            <span>{description}</span>
          </p>
        ))}
      </div>
      <div className="max-w-128.5 w-full">
        {whyChooseUsFeaturesData.map(({ description, icon, id, title }) => {
          const Icon = iconsMap[icon as IconKey];

          return (
            <article
              key={id}
              className="flex gap-4 xl:gap-10 pb-5 xl:pb-13.5 last:pb-0"
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
        })}
      </div>
    </div>
  </Container>
);
