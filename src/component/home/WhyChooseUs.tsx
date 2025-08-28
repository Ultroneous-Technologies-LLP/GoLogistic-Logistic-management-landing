import { whyChooseUsfeaturesData } from "@/utils/constans";
import Container from "../common/Container";
import { FC } from "react";

const WhyChooseUs: FC = () => {
  return (
    <Container as="section" className="px-17.5 py-37">
      <p className="inline-block py-1 pl-1 pr-2 mb-6 text-sm font-medium text-black border-l-4 border-black bg-[#E8E8E880]">
        <span>Why Choose Us</span>
      </p>
      <div className="flex justify-between gap-12">
        <div className="max-w-146 w-full">
          <h2 className="pb-3.5 text-4xl/12.5 font-bold">
            <span>We offer comprehensive worldwide logistics solutions.</span>
          </h2>
          <p className="pb-6 text-[22px]/10 font-normal text-[#949494]">
            <span>
              With a presence in key strategic locations worldwide, we combine
              global reach with local expertise, ensuring a deep understanding
              of regional nuances and regulations.
            </span>
          </p>
          <p className="pb-6 text-[22px]/10 font-normal text-[#949494]">
            <span>
              Embrace the future of logistics with us. We continuously invest in
              innovation to bring you cutting-edge solutions that keep your
              business agile and ready for the challenges of tomorrow.
            </span>
          </p>
        </div>
        <div className="max-w-128.5 w-full">
          {whyChooseUsfeaturesData.map(
            ({ Icon, title, description }, index) => (
              <article key={index} className="flex gap-10 pb-13.5 last:pb-0">
                <div aria-hidden="true">
                  <Icon className="fill-black" />
                </div>
                <div>
                  <h3 className="pb-0.5 text-[28px]/12.5 font-semibold">
                    <span>{title}</span>
                  </h3>
                  <p className="text-[22px] text-[#949494]">
                    <span>{description}</span>
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
