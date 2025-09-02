import { FC } from "react";
import whyChooseUsData from "@/data.json";
import {
  CustomerCentric,
  GlobalReach,
  Innovation,
  Reliability,
} from "@/component/icon";
import { whyChooseUsSection } from "@/utils/type";
import { Container, SectionHeading } from "@/component/common";

const iconsMap = {
  Reliability,
  Innovation,
  GlobalReach,
  CustomerCentric,
};
interface whyChooseUsData {
  data: whyChooseUsSection;
}

type IconKey = keyof typeof iconsMap;

const WhyChooseUs: FC<whyChooseUsData> = ({ data }) => {
  return (
    <Container as="section" className="px-4 md:px-6 xl:px-17.5 py-20 xl:py-37">
      <SectionHeading title={data.title} />
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 xl:gap-12">
        <div className="max-w-146 w-full">
          <h3 className="pb-2.5 xl:pb-3.5 text-xl/7.5 xl:text-4xl/12.5 font-bold text-black">
            <span>{data.longTitle}</span>
          </h3>
          {data.description.map((value) => (
            <p
              className="pb-6 text-sm/4.5 xl:text-22/10 font-normal text-spanish-gray last:pb-0"
              key={value.id}
            >
              <span>{value.description}</span>
            </p>
          ))}
        </div>
        <div className="max-w-128.5 w-full">
          {data.whyChooseUsfeaturesData.map((item) => {
            const Icon = iconsMap[item.icon as IconKey];
            return (
              <article
                key={item.id}
                className="flex gap-4 xl:gap-10 pb-5 xl:pb-13.5 last:pb-0"
              >
                <div aria-hidden="true">
                  <Icon className="fill-black" />
                </div>
                <div>
                  <h4 className="pb-1 xl:pb-0.5 text-xl/7.5 xl:text-[28px]/12.5 font-semibold">
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-sm/4.5 xl:text-22/10 text-spanish-gray">
                    <span>{item.description}</span>
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

export default WhyChooseUs;
