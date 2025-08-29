import { FC } from "react";
import TestimonialSlider from "./TestimonialSlider";
import { testimonialSection } from "@/utils/type";

interface testimonialSectionData {
  data: testimonialSection;
}

const Testimonial: FC<testimonialSectionData> = ({ data }) => {
  console.log({ data });

  return (
    <section className="py-36.5">
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
