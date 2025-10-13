"use client";
import Button from "@/component/common/Button";
import { LeftArrow } from "@/component/icon";
import { useIsMobile } from "@/hooks";
import { blogSection } from "@/types/home-page-types";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import Slider from "react-slick";

const sliderClass =
  "[&_.slick-slider]:relative [&_.slick-slider]:block [&_.slick-slider]:box-border [&_.slick-slider]:select-none [&_.slick-slider]:touch-pan-y [&_.slick-slider]:[--webkit-tap-highlight-color:transparent] [&_.slick-list]:overflow-hidden [&_.slick-list]:m-0 [&_.slick-list]:p-0 [&_.slick-track]:flex [&_.slick-track]:gap-6 [&_.slick-track]:items-stretch [&_.slick-slide]:min-h-px [&_.slick-slide]:outline-none [&_.slick-slide]:duration-300 [&_.slick-slide]:ease-in-out";

interface OurBlogSliderProps {
  data: blogSection;
}

const OurBlogSlider: FC<OurBlogSliderProps> = ({ data }) => {
  const sliderRef = useRef<Slider>(null);
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const visibleBlogs = isMobile
    ? showAll
      ? data.blogData
      : data.blogData.slice(0, 3)
    : data.blogData;

  return (
    <>
      <div className="md:flex justify-between items-center px-4 pb-8 md:px-6 xl:pl-17.5 xl:pr-22.5 xl:pb-16.5">
        <h3 className="text-xl/7.5 xl:text-4xl/12.5 font-bold text-black">
          <span>{data.longTitle}</span>
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
      <div className="pb-70 md:pb-55.5 xl:pb-0">
        {isMobile ? (
          <div className="px-4 space-y-8">
            {visibleBlogs.map((value) => (
              <div key={value.id} className="flex gap-4">
                <div className="max-w-[30%] w-full bg-black/40 hover:bg-transparent">
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
            {data.blogData.length > 3 && !showAll && (
              <div className="flex justify-center">
                <Button
                  variant="outlined"
                  className="py-3 px-6 rounded-xl !w-fit"
                  aria-label="View all blogs"
                  onClick={() => setShowAll(true)}
                >
                  View All
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`px-6 xl:px-17.5 rounded-4xl w-full overflow-x-hidden ${sliderClass}`}
          >
            <Slider {...settings} ref={sliderRef}>
              {visibleBlogs.map((value) => (
                <div key={value.id}>
                  <div className="relative group">
                    <Image
                      src={value.src}
                      width={411}
                      height={447}
                      alt={value.alt}
                      title={value.alt}
                      className="relative -z-10"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-opacity duration-300 z-10 rounded-20" />
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

export default OurBlogSlider;
