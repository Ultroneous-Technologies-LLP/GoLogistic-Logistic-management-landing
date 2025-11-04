"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FC, useRef, useState } from "react";

import { useIsMobile } from "@/hooks";
import { LeftArrow } from "@/components";

import { OurBlogSliderProps } from "./types";
import { SETTING_PROPS, SLIDER_CLASS } from "./constant";

export const OurBlogSlider: FC<OurBlogSliderProps> = ({ blogData, longTitle }) => {
  const [showAll, setShowAll] = useState(false);

  const sliderRef = useRef<Slider>(null);

  const isMobile = useIsMobile();

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const visibleBlogs = isMobile ? (showAll ? blogData : blogData.slice(0, 3)) : blogData;

  return (
    <>
      <div className="items-center justify-between px-4 pb-8 md:flex md:px-6 xl:pr-22.5 xl:pb-16.5 xl:pl-17.5">
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
      <div className="pb-45 md:pb-36 xl:pb-0">
        {isMobile ? (
          <div className="space-y-8 px-4">
            {visibleBlogs.map((value) => (
              <div key={value.id} className="flex gap-4">
                <div className="w-full max-w-[30%] rounded-sm">
                  <Image
                    src={value.src}
                    width={411}
                    height={447}
                    alt={value.alt}
                    title={value.alt}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div className="w-full max-w-[70%]">
                  <h4 className="text-base/6 font-semibold">
                    <span>{value.title}</span>
                  </h4>
                  <p className="text-spanish-gray pt-1 pb-4 text-sm/4.5 font-medium">
                    <span>{value.description}</span>
                  </p>
                  <span className="text-10/3.5 text-spanish-gray block">{value.date}</span>
                </div>
              </div>
            ))}

            {/* Button only if there are more than 3 blogs */}
            {blogData.length > 3 && !showAll && (
              <div className="flex justify-center">
                <button
                  className="border-light-silver !w-fit rounded-xl border px-6 py-3"
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
          <div className={`w-full overflow-x-hidden rounded-4xl px-6 xl:px-17.5 ${SLIDER_CLASS}`}>
            <Slider {...SETTING_PROPS} ref={sliderRef}>
              {visibleBlogs.map((value) => (
                <div key={value.id}>
                  <div className="group rounded-20 relative h-[447px] w-full max-w-[411px] overflow-hidden">
                    <Image
                      src={value.src}
                      alt={value.alt}
                      title={value.alt}
                      fill
                      className="rounded-20 object-cover"
                    />
                    <div className="rounded-20 absolute inset-0 z-10 bg-black/40 opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
                  </div>
                  <span className="text-10/3.5 text-spanish-gray block py-4 xl:pt-10.5 xl:pb-5 xl:text-sm">
                    {value.date}
                  </span>
                  <h4 className="text-base/6 font-semibold text-ellipsis md:line-clamp-2 xl:line-clamp-none xl:text-2xl/8.5">
                    <span>{value.title}</span>
                  </h4>
                  <p className="text-spanish-gray pt-4 text-sm/4.5 font-medium text-ellipsis md:line-clamp-2 xl:line-clamp-none xl:pt-2.5 xl:text-base/normal">
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
