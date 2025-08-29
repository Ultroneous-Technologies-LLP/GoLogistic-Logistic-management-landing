"use client";

import { DoubleQuotes, LeftArrow } from "@/component/icon";
import { FC, useRef } from "react";
import Slider from "react-slick";

interface TestimonialSliderData {
  data: {
    longTitle: string;
    sliderData: {
      id: number;
      quote: string;
      author: string;
      subText: string;
    }[];
  };
}

const TestimonialSlider: FC<TestimonialSliderData> = ({ data }) => {
  console.log({ data });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-30px",
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
      <div className="flex justify-between items-center max-w-360 mx-auto pl-17.5 pr-22.5 pb-32.5">
        <h3 className="pb-3.5 text-4xl/12.5 font-bold text-black">
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
        className="w-full overflow-x-hidden [&_.slick-slider]:relative [&_.slick-slider]:block [&_.slick-slider]:box-border [&_.slick-slider]:select-none [&_.slick-slider]:touch-pan-y 
    [&_.slick-slider]:[--webkit-tap-highlight-color:transparent] [&_.slick-list]:overflow-hidden [&_.slick-list]:m-0 [&_.slick-list]:p-0 [&_.slick-track]:flex [&_.slick-track]:items-stretch [&_.slick-slide]:min-h-px [&_.slick-slide]:outline-none 
    [&_.slick-slide]:duration-300 [&_.slick-slide]:ease-in-out [&_.slick-slide]:opacity-40 [&_.slick-slide]:transition-opacity [&_.slick-current]:!opacity-100 [&_.slick-current]:!mt-5"
      >
        <Slider {...settings} ref={sliderRef}>
          {data.sliderData.map((item) => (
            <div
              key={item.id}
              className="py-6 pl-7 pr-3 bg-[#f5f5f5] max-w-84 w-full"
            >
              <div className="pb-21">
                <DoubleQuotes className="text-[#949494]" />
                <p className="font-medium text-2xl/8 pt-5.5">
                  <span>{item.quote}</span>
                </p>
              </div>
              <div>
                <h4 className="font-medium text-sm/4">
                  <span>{item.author}</span>
                </h4>
                <h5 className="font-medium text-[10px]/3.5">
                  <span>{item.subText}</span>
                </h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialSlider;
