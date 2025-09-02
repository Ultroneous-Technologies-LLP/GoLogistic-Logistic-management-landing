"use client";

import { DoubleQuotes, LeftArrow } from "@/component/icon";
import { FC, useEffect, useRef, useState } from "react";
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
  const [slidesToShow, setSlidesToShow] = useState(4.4); // default desktop
  const [centerPadding, setCenterPadding] = useState("0px");

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
        setCenterPadding("50px"); // show left/right peeks
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(2.9);
        setCenterPadding("-120px");
      } else {
        setSlidesToShow(4.5);
        setCenterPadding("-80px");
      }
    };

    updateSlides(); // run on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding,
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
      <div className="flex justify-between items-center max-w-360 mx-auto px-4 md:px-6 xl:pl-17.5 xl:pr-22.5 pb-8 md:pb-14 xl:pb-32.5">
        <h3 className="text-xl/7.5 xl:text-4xl/12.5 font-bold text-black">
          <span>{data.longTitle}</span>
        </h3>
        <div className="hidden md:flex gap-2.5">
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
      <div className="max-w-480 mx-auto w-full overflow-x-hidden [&_.slick-track]:flex [&_.slick-track]:gap-6 [&_.slick-slide]:w-84 [&_.slick-slide]:!inline-flex [&_.slick-slide]:h-auto [&_.slick-slide]:min-h-px [&_.slick-slide]:opacity-40 [&_.slick-slide]:transition-opacity [&_.slick-current]:!opacity-100 [&_.slick-current]:!mt-5">
        <Slider {...settings} ref={sliderRef}>
          {data.sliderData.map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f5f5] rounded-2xl transition-transform duration-500 p-6 border border-gray-300 max-w-84 w-full"
            >
              <div className="pb-10">
                <DoubleQuotes className="text-spanish-gray" />
                <p className="font-medium text-xl pt-8">{item.quote}</p>
              </div>
              <div>
                <h4 className="font-medium text-sm">{item.author}</h4>
                <h5 className="font-medium text-10">{item.subText}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex md:hidden gap-2.5 pt-8 justify-center">
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
    </>
  );
};

export default TestimonialSlider;
