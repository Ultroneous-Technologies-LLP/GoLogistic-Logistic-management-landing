import Container from "../common/Container";
import { FC } from "react";
import whyChooseUsData from "@/data.json";
import { CustomerCentric, GlobalReach, Innovation, Reliability } from "../icon";
import { whyChooseUsSection } from "@/utils/type";

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
    <Container as="section" className="px-17.5 py-37">
      <h2 className="inline-block py-1 pl-1 pr-2 mb-6 text-sm font-medium text-black border-l-4 border-black bg-[#E8E8E880]">
        <span>{data.title}</span>
      </h2>
      <div className="flex justify-between gap-12">
        <div className="max-w-146 w-full">
          <h3 className="pb-3.5 text-4xl/12.5 font-bold text-black">
            <span>{data.longTitle}</span>
          </h3>
          {data.description.map((value) => (
            <p
              className="pb-6 text-[22px]/10 font-normal text-[#949494] last:pb-0"
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
              <article key={item.id} className="flex gap-10 pb-13.5 last:pb-0">
                <div aria-hidden="true">
                  <Icon className="fill-black" />
                </div>
                <div>
                  <h4 className="pb-0.5 text-[28px]/12.5 font-semibold">
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-[22px] text-[#949494]">
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
