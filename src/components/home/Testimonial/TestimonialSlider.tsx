"use client";

import Slider from "react-slick";
import { FC, useEffect, useRef, useState } from "react";

import { DoubleQuotes, LeftArrow } from "@/components";
import { BREAKPOINT_MD, BREAKPOINT_Xl } from "@/constant";

import { TestimonialSliderProps } from "./types";

const TestimonialSlider: FC<TestimonialSliderProps> = ({ longTitle, sliderData }) => {
  const [slidesToShow, setSlidesToShow] = useState(4.4);
  const [centerPadding, setCenterPadding] = useState("0px");

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < BREAKPOINT_MD) {
        setSlidesToShow(1);
        setCenterPadding("50px");
      } else if (window.innerWidth < BREAKPOINT_Xl) {
        setSlidesToShow(2.9);
        setCenterPadding("-120px");
      } else {
        setSlidesToShow(4.5);
        setCenterPadding("-80px");
      }
    };

    updateSlides();
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
    autoplay: true,
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
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 pb-8 md:px-6 md:pb-14 xl:pr-22.5 xl:pb-32.5 xl:pl-17.5">
        <h3 className="text-xl/7.5 font-bold text-black xl:text-4xl/12.5">
          <span>{longTitle}</span>
        </h3>
        <div className="hidden gap-2.5 md:flex">
          <button
            type="button"
            onClick={handlePrev}
            className="group flex size-11 items-center justify-center rounded-full border border-transparent bg-black transition-colors duration-300 hover:border-black hover:bg-white hover:ease-in"
          >
            <LeftArrow className="cursor-pointer text-white group-hover:text-black" />
          </button>
          <button
            onClick={handleNext}
            type="button"
            className="group flex size-11 items-center justify-center rounded-full border border-transparent bg-black transition-colors duration-300 hover:border-black hover:bg-white hover:ease-in"
          >
            <LeftArrow className="rotate-180 cursor-pointer text-white group-hover:text-black" />
          </button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-480 overflow-x-hidden [&_.slick-current]:!opacity-100 [&_.slick-slide]:!inline-flex [&_.slick-slide]:h-auto [&_.slick-slide]:min-h-px [&_.slick-slide]:w-84 [&_.slick-slide]:opacity-40 [&_.slick-slide]:transition-opacity [&_.slick-track]:flex [&_.slick-track]:gap-6">
        <Slider {...settings} ref={sliderRef}>
          {sliderData.map(({ author, id, quote, subText }) => (
            <div
              key={id}
              className="w-full max-w-84 rounded-2xl border border-gray-300 bg-[#f5f5f5] p-6 transition-transform duration-500"
            >
              <div className="pb-10">
                <DoubleQuotes className="text-spanish-gray" />
                <p className="pt-8 text-xl font-medium">{quote}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">{author}</h4>
                <h5 className="text-10 font-medium">{subText}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center gap-2.5 pt-8 md:hidden">
        <button
          type="button"
          onClick={handlePrev}
          className="group flex size-11 items-center justify-center rounded-full border border-transparent bg-black transition-colors duration-300 hover:border-black hover:bg-white hover:ease-in"
        >
          <LeftArrow className="cursor-pointer text-white group-hover:text-black" />
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="group flex size-11 items-center justify-center rounded-full border border-transparent bg-black transition-colors duration-300 hover:border-black hover:bg-white hover:ease-in"
        >
          <LeftArrow className="rotate-180 cursor-pointer text-white group-hover:text-black" />
        </button>
      </div>
    </>
  );
};

export default TestimonialSlider;
