import { FC } from "react";
import Container from "../common/Container";
import Image from "next/image";
import Button from "../common/Button";

const OurServicesAndFacilites: FC = () => {
  return (
    <Container
      backgroundClassName="bg-black relative"
      aria-label="services-heading"
    >
      <Image
        width={1440}
        height={511}
        alt="Global logistics routes background map"
        title="Global logistics routes background map"
        src="/assets/home/bg-map.avif"
        className="absolute top-104 z-0"
      />
      <div className="px-20 py-42 pl-20 pr-42 z-10 relative">
        <div className="flex">
          <div className="max-w-133.5 w-full mr-8">
            <h2
              id="services-heading"
              className="inline-block py-1 pl-1 pr-2 mb-5 text-sm font-medium border-l-4 border-[#E8E8E880] bg-white"
            >
              <span>Our Services & Facilites</span>
            </h2>
            <p className="pb-3.5 text-4xl/12.5 font-bold text-white">
              <span>
                Highlight the advantages of opting for our logistics services.
              </span>
            </p>
          </div>
          <div className="bg-white rounded-[20px] max-w-91 w-full max-h-86 h-full flex justify-between mr-32">
            <div className="max-w-43.5 w-full pt-12 pl-9.5 pb-7.5 flex flex-col justify-between">
              <h3 className="text-4xl/12.5 font-semibold text-wrap">
                <span>01 Transport Logistc</span>
              </h3>
              <Button
                variant="outlined"
                className="w-fit !font-medium hover:!font-medium rounded-md"
                aria-label="Consult about Cargo Terminal"
              >
                Consult
              </Button>
            </div>
            <div>
              <Image
                width={109}
                height={343}
                alt="Transport logistics route line illustration"
                title="Transport logistics route line illustration"
                src="/assets/home/road-line.avif"
              />
            </div>
          </div>
          <div className="pt-12.5">
            <h3 className="text-4xl/12.5 text-wrap text-white">
              <span>02 Cargo Terminal</span>
            </h3>
          </div>
        </div>
        <div className="flex justify-between pt-38 pb-42">
          <h3 className="text-4xl/12.5 text-wrap text-white max-w-84.5 w-full">
            <span>
              03 <br />
              Temporary storage warehouse
            </span>
          </h3>
          <h3 className="text-4xl/12.5 text-wrap text-white max-w-88.5 w-full">
            <span>
              04 <br /> Industrial Park Sale and lease of land
            </span>
          </h3>
          <h3 className="text-4xl/12.5 text-wrap text-white max-w-69.5 w-full">
            <span className="block">05 </span>
            <span className="block">Cargo Customs Clearance</span>
          </h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-4xl/12.5 text-wrap text-white max-w-84.5 w-full">
            <span>
              06 <br /> Manipulation
            </span>
          </h3>
          <h3 className="text-4xl/12.5 text-wrap text-white max-w-88.5 w-full">
            <span>
              07 <br /> Warehouse
            </span>
          </h3>
          <span className="inline-block text-4xl/12.5 text-wrap text-white max-w-69.5 w-full"></span>
        </div>
      </div>
    </Container>
  );
};

export default OurServicesAndFacilites;
