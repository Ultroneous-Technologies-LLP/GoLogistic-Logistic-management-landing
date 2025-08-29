import { FC } from "react";
import Container from "../common/Container";
import Image from "next/image";
import Button from "../common/Button";
import clsx from "clsx";
import { ourServicesAndFacilitesSection } from "@/utils/type";

interface ourServicesAndFacilitesData {
  data: ourServicesAndFacilitesSection;
}

const OurServicesAndFacilites: FC<ourServicesAndFacilitesData> = ({ data }) => {
  return (
    <Container
      backgroundClassName="bg-black relative"
      aria-label="services-heading"
    >
      <Image
        width={1440}
        height={511}
        alt={data.backgroundImage.alt}
        src={data.backgroundImage.src}
        title={data.backgroundImage.alt}
        className="absolute top-104 z-0"
      />
      <div className="px-20 py-42 pl-20 pr-42 z-10 relative">
        <div className="flex">
          <div className="max-w-133.5 w-full mr-8">
            <h2
              id="services-heading"
              className="inline-block py-1 pl-1 pr-2 mb-5 text-sm font-medium border-l-4 border-[#E8E8E880] bg-white"
            >
              <span>{data.title}</span>
            </h2>
            <p className="pb-3.5 text-4xl/12.5 font-bold text-white">
              <span>{data.longTitle}</span>
            </p>
          </div>
          <div className="bg-white rounded-[20px] max-w-91 w-full max-h-86 h-full flex justify-between mr-32">
            <div className="max-w-43.5 w-full pt-12 pl-9.5 pb-7.5 flex flex-col justify-between">
              <h3 className="text-4xl/12.5 font-semibold text-wrap">
                <span>{data.transportLogistics.title}</span>
              </h3>
              <Button
                variant={
                  ["contained", "outlined"].includes(
                    data.transportLogistics.button.variant
                  )
                    ? (data.transportLogistics.button.variant as
                        | "contained"
                        | "outlined")
                    : undefined
                }
                className="w-fit !font-medium hover:!font-medium rounded-md"
                aria-label={data.transportLogistics.button.ariaLabel}
              >
                {data.transportLogistics.button.label}
              </Button>
            </div>
            <div>
              <Image
                width={109}
                height={343}
                alt={data.transportLogistics.image.alt}
                src={data.transportLogistics.image.src}
                title={data.transportLogistics.image.alt}
              />
            </div>
          </div>
          <div className="pt-12.5">
            <h3 className="text-4xl/12.5 text-wrap text-white">
              <span>{data.cargoTerminal.title}</span>
            </h3>
          </div>
        </div>
        <div className="flex justify-between flex-wrap pt-38 gap-y-42">
          {data.services.map((value, index) =>
            index === data.services.length - 1 ? (
              <span
                key={value.id}
                className="text-4xl/12.5 text-wrap text-white w-full max-w-69.5"
              >
                {value.title}
              </span>
            ) : (
              <h3
                key={value.id}
                className={clsx("text-4xl/12.5 text-wrap text-white w-full", {
                  "max-w-84.5": index % 3 === 0,
                  "max-w-88.5": index % 3 === 1,
                  "max-w-69.5": index % 3 === 2,
                })}
              >
                <span>
                  0{index + 3} <br />
                  {value.title}
                </span>
              </h3>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default OurServicesAndFacilites;
