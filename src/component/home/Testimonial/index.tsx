import { FC } from "react";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialSection } from "@/utils/type";
import Image from "next/image";

interface testimonialSectionData {
  data: testimonialSection;
}

const Testimonial: FC<testimonialSectionData> = ({ data }) => {
  return (
    <section className="py-36.5 relative">
      <Image
        src={data.backgroundImage.src}
        alt={data.backgroundImage.alt}
        width={1440}
        height={470}
        className="mx-auto absolute top-9.5 left-1/2 -translate-x-1/2 -z-10"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        title={data.backgroundImage.alt}
      />
      <div className="max-w-360 w-full mx-auto pl-17.5 pr-22.5">
        <h2 className="inline-block py-1 pl-1 pr-2 mb-5 text-sm font-medium text-black border-l-4 border-black bg-[#E8E8E880]">
          <span>{data.title}</span>
        </h2>
      </div>
      <TestimonialSlider data={data} />
    </section>
  );
};

export default Testimonial;
