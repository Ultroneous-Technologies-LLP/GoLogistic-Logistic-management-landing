"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FC, useRef, useState } from "react";

import { useIsMobile } from "@/hooks";
import { LeftArrow } from "@/components";

import { OurBlogSliderProps } from "./types";
import { SETTINGS, SLIDER_CLASS } from "./constant";

export const OurBlogSlider: FC<OurBlogSliderProps> = ({
  blogData,
  longTitle,
}) => {
  const [showAll, setShowAll] = useState(false);

  const sliderRef = useRef<Slider>(null);

  const isMobile = useIsMobile();

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const visibleBlogs = isMobile
    ? showAll
      ? blogData
      : blogData.slice(0, 3)
    : blogData;

  return (
    <>
      <div className="md:flex justify-between items-center px-4 pb-8 md:px-6 xl:pl-17.5 xl:pr-22.5 xl:pb-16.5">
        <h3 className="text-xl/7.5 xl:text-4xl/12.5 font-bold text-black">
          <span>{longTitle}</span>
        </h3>
        <div className="gap-2.5 hidden md:flex">
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
      <div className="pb-45 md:pb-36 xl:pb-0">
        {isMobile ? (
          <div className="px-4 space-y-8">
            {visibleBlogs.map((value) => (
              <div key={value.id} className="flex gap-4">
                <div className="max-w-[30%] w-full rounded-sm">
                  <Image
                    src={value.src}
                    width={411}
                    height={447}
                    alt={value.alt}
                    title={value.alt}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="max-w-[70%] w-full">
                  <h4 className="text-base/6 font-semibold">
                    <span>{value.title}</span>
                  </h4>
                  <p className="text-sm/4.5 text-spanish-gray pt-1 pb-4 font-medium">
                    <span>{value.description}</span>
                  </p>
                  <span className="text-10/3.5 text-spanish-gray block">
                    {value.date}
                  </span>
                </div>
              </div>
            ))}

            {/* Button only if there are more than 3 blogs */}
            {blogData.length > 3 && !showAll && (
              <div className="flex justify-center">
                <button
                  className="py-3 px-6 rounded-xl !w-fit border border-light-silver"
                  aria-label="View all blogs"
                  onClick={() => setShowAll(true)}
                  type="button"
                >
                  View All
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`px-6 xl:px-17.5 rounded-4xl w-full overflow-x-hidden ${SLIDER_CLASS}`}
          >
            <Slider {...SETTINGS} ref={sliderRef}>
              {visibleBlogs.map((value) => (
                <div key={value.id}>
                  <div className="group relative max-w-[411px] h-[447px] w-full rounded-20 overflow-hidden">
                    <Image
                      src={value.src}
                      alt={value.alt}
                      title={value.alt}
                      fill
                      className="object-cover rounded-20"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10 rounded-20" />
                  </div>
                  <span className="text-10/3.5 xl:text-sm text-spanish-gray block py-4 xl:pt-10.5 xl:pb-5">
                    {value.date}
                  </span>
                  <h4 className="text-base/6 xl:text-2xl/8.5 font-semibold md:line-clamp-2 text-ellipsis xl:line-clamp-none">
                    <span>{value.title}</span>
                  </h4>
                  <p className="text-sm/4.5 xl:text-base/normal text-spanish-gray pt-4 xl:pt-2.5 font-medium md:line-clamp-2 text-ellipsis xl:line-clamp-none">
                    <span>{value.description}</span>
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
};
