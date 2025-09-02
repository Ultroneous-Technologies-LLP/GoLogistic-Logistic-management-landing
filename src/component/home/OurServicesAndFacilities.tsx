import { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ourServicesAndFacilitiesSection } from "@/utils/type";
import { Button, Container, SectionHeading } from "@/component/common";

interface OurServicesAndFacilitiesProps {
  data: ourServicesAndFacilitiesSection;
}

const OurServicesAndFacilities: FC<OurServicesAndFacilitiesProps> = ({
  data,
}) => {
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
        className="absolute bottom-46 xl:bottom-[unset] xl:top-104 z-0"
      />
      <div className="px-4 md:px-6 xl:px-20 xl:pl-20 xl:pr-42 py-12.5 xl:py-42 z-10 relative">
        <div className="flex flex-col xl:flex-row">
          <div className="xl:max-w-133.5 w-full xl:mr-8">
            <SectionHeading title={data.title} variant="white" />
            <p className="pb-8 xl:pb-3.5 text-xl/7.5 xl:text-4xl/12.5 font-bold text-white">
              <span>{data.longTitle}</span>
            </p>
          </div>
          <div className="md:flex md:gap-8">
            <div className="bg-white rounded-20 max-w-91 w-full max-h-86 h-full flex justify-between xl:mr-32">
              <div className="max-w-43.5 w-full pl-8 py-8 xl:pt-12 xl:pl-9.5 xl:pb-7.5 flex flex-col justify-between">
                <h3 className="text-2xl/9 xl:text-4xl/12.5 font-semibold text-wrap">
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
            <div className="pt-8 md:pt-0 xl:pt-12.5">
              <h3 className="text-2xl/9 xl:text-4xl/12.5 text-wrap text-white">
                <span className="block">{data.cargoTerminal.number}</span>
                <span className="block">{data.cargoTerminal.title}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row justify-between flex-wrap pt-12.5 xl:pt-38 gap-y-12.5 xl:gap-y-42">
          {data.services.map((value, index) =>
            index === data.services.length - 1 ? (
              <span
                key={value.id}
                className="hidden xl:block text-4xl/12.5 text-wrap text-white w-full max-w-69.5"
              >
                {value.title}
              </span>
            ) : (
              <h3
                key={value.id}
                className={clsx(
                  "text-2xl/9 xl:text-4xl/12.5 text-wrap text-white w-full",
                  {
                    "max-w-84.5": index % 3 === 0,
                    "max-w-80 xl:max-w-88.5": index % 3 === 1,
                    "xl:max-w-69.5": index % 3 === 2,
                  }
                )}
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

export default OurServicesAndFacilities;
