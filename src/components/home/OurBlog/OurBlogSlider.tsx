"use client";

import Image from "next/image";
import { FC, useRef, useState } from "react";
import Slider from "react-slick";

import { LeftArrow } from "@/components";
import { useIsMobile } from "@/hooks";

import { MAX_VISIBLE_BLOGS, SETTING_PROPS, SLIDER_CLASS, START_INDEX } from "./constant";
import { OurBlogSliderProps } from "./types";

export const OurBlogSlider: FC<OurBlogSliderProps> = ({ blogData, longTitle }) => {
  const [showAll, setShowAll] = useState(false);

  const sliderRef = useRef<Slider>(null);

  const isMobile = useIsMobile();

  const handlePrev = (): void => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = (): void => {
    sliderRef.current?.slickNext();
  };

  const getVisibleBlogs = (): typeof blogData => {
    if (!isMobile) {
      return blogData;
    }

    if (showAll) {
      return blogData;
    }

    return blogData.slice(START_INDEX, MAX_VISIBLE_BLOGS);
  };

  const visibleBlogs = getVisibleBlogs();

  return (
    <>
      <div className="items-center justify-between px-4 pb-8 md:flex md:px-6 xl:pr-22.5 xl:pb-16.5 xl:pl-17.5">
        <h3 className="text-xl/7.5 font-bold text-black xl:text-4xl/12.5">
          <span>{longTitle}</span>
        </h3>
        <div className="hidden gap-2.5 md:flex">
          <button
            className="group flex size-11 items-center justify-center rounded-full border border-transparent bg-black transition-colors duration-300 hover:border-black hover:bg-white hover:ease-in"
            onClick={handlePrev}
            type="button"
          >
            <LeftArrow className="cursor-pointer text-white group-hover:text-black" />
          </button>
          <button
            className="group flex size-11 items-center justify-center rounded-full border border-transparent bg-black transition-colors duration-300 hover:border-black hover:bg-white hover:ease-in"
            onClick={handleNext}
            type="button"
          >
            <LeftArrow className="rotate-180 cursor-pointer text-white group-hover:text-black" />
          </button>
        </div>
      </div>
      <div className="pb-45 md:pb-36 xl:pb-0">
        {isMobile ? (
          <div className="space-y-8 px-4">
            {visibleBlogs.map((value) => (
              <div className="flex gap-4" key={value.id}>
                <div className="w-full max-w-[30%] rounded-sm">
                  <Image
                    alt={value.image.alternativeText}
                    className="h-full w-full rounded-xl object-cover"
                    height={447}
                    src={`http://localhost:1337${value.image.url}`}
                    title={value.image.alternativeText}
                    width={411}
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
            {blogData.length > MAX_VISIBLE_BLOGS && !showAll && (
              <div className="flex justify-center">
                <button
                  aria-label="View all blogs"
                  className="border-light-silver !w-fit rounded-xl border px-6 py-3"
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
                      alt={value.image.alternativeText}
                      className="rounded-20 object-cover"
                      fill
                      src={`http://localhost:1337${value.image.url}`}
                      title={value.image.alternativeText}
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
