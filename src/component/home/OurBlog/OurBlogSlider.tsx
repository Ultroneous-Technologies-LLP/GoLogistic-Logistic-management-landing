"use client";
import { LeftArrow } from "@/component/icon";
import { blogSection } from "@/utils/type";
import Image from "next/image";
import { FC, useRef } from "react";
import Slider from "react-slick";

interface OurBlogSliderProps {
  data: blogSection;
}

const OurBlogSlider: FC<OurBlogSliderProps> = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderRef = useRef<Slider>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <>
      <div className="flex justify-between items-center pl-17.5 pr-22.5 pb-16.5">
        <h3 className="text-4xl/12.5 font-bold text-black">
          <span>{data.longTitle}</span>
        </h3>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            className="size-11 flex justify-center items-center border-transparent transition-colors duration-300 hover:ease-in bg-black rounded-full group hover:bg-white border hover:border-black"
          >
            <LeftArrow className="cursor-pointer text-white group-hover:text-black" />
          </button>
          <button
            onClick={handleNext}
            type="button"
            className="size-11 flex justify-center items-center border-transparent transition-colors duration-300 hover:ease-in bg-black rounded-full group hover:bg-white border hover:border-black"
          >
            <LeftArrow className="cursor-pointer text-white group-hover:text-black rotate-180" />
          </button>
        </div>
      </div>
      <div
        className="px-17.5 rounded-4xl w-full overflow-x-hidden [&_.slick-slider]:relative [&_.slick-slider]:block [&_.slick-slider]:box-border [&_.slick-slider]:select-none [&_.slick-slider]:touch-pan-y 
    [&_.slick-slider]:[--webkit-tap-highlight-color:transparent] [&_.slick-list]:overflow-hidden [&_.slick-list]:m-0 [&_.slick-list]:p-0 [&_.slick-track]:flex [&_.slick-track]:items-stretch [&_.slick-slide]:min-h-px [&_.slick-slide]:outline-none 
    [&_.slick-slide]:duration-300 [&_.slick-slide]:ease-in-out"
      >
        <Slider {...settings} ref={sliderRef}>
          {data.blogData.map((value) => (
            <div key={value.id}>
              <Image
                src={value.src}
                width={411}
                height={447}
                alt={value.alt}
                title="flight"
              />
              <span className="text-sm text-[#949494] block pt-10.5 pb-5">
                {value.date}
              </span>
              <h4 className="text-2xl/8.5 font-semibold">
                <span>{value.title}</span>
              </h4>
              <p className="text-base/normal text-[#949494] pt-2.5 font-medium">
                <span>{value.description}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default OurBlogSlider;
