import Image from "next/image";
import React, { FC } from "react";
import Container from "../common/Container";
import { shipingService } from "@/utils/type";

interface shipingServiceData {
  data: shipingService;
}

const ShipingService: FC<shipingServiceData> = ({ data }) => {
  return (
    <Container className="px-17.5">
      <div className="w-full -mb-32">
        <h2 className="text-[32px] font-semibold mx-auto pb-4 text-center max-w-175 bg-white rounded-b-4xl">
          <span>{data.title}</span>
        </h2>
        <p className="text-lg/7 max-w-130 text-center mx-auto bg-white text-[#7b7b7b] rounded-b-[40px] pb-4 px-4 -mt-2">
          <span>{data.description}</span>
        </p>
      </div>
      <Image
        src={data.shipingServiceImage.src}
        alt={data.shipingServiceImage.alt}
        title={data.shipingServiceImage.alt}
        width={1300}
        height={728}
        className="relative rounded-[20px] mx-auto -z-20"
        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1300px"
      />
    </Container>
  );
};

export default ShipingService;
