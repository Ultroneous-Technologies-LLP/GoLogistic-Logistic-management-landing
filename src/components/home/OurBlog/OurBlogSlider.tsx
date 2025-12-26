"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { FallBackImage, LeftArrow } from "@/components";
import { useIsMobile } from "@/hooks";

import { MAX_VISIBLE_BLOGS, SETTING_PROPS, SLIDER_CLASS, START_INDEX } from "./constant";
import { OurBlogSliderProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export const OurBlogSlider: FC<OurBlogSliderProps> = ({ blogData, longTitle }) => {
  const [showAll, setShowAll] = useState(false);

  const sliderRef = useRef<Slider>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const isMobile = useIsMobile();

  const setItemRef = (el: HTMLDivElement | null): void => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(itemsRef.current, {
        autoAlpha: 0,
        y: 40,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.to(itemsRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          });
        },
      });
    }, sectionRef);

    return (): void => ctx.revert();
  }, []);

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
    <div ref={sectionRef}>
      <div className="items-center justify-between px-4 pb-8 md:flex md:px-6 xl:pr-22.5 xl:pb-16.5 xl:pl-17.5">
        <h3 className="text-xl/7.5 font-bold text-black xl:text-4xl/12.5">
          <span>{longTitle}</span>
        </h3>
        <div className="hidden gap-2.5 md:flex">
          <button
            className="group flex size-11 items-center justify-center rounded-full bg-black transition"
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
              <div className="flex gap-4" key={value.id} ref={setItemRef}>
                <div className="w-full max-w-[30%] rounded-sm">
                  <Image
                    alt={value.alt}
                    className="h-full w-full rounded-xl object-cover"
                    height={447}
                    src={value.src}
                    title={value.alt}
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
                  <div ref={setItemRef}>
                    <div className="rounded-20 relative h-[447px] w-full max-w-[411px] overflow-hidden">
                      <FallBackImage
                        alt={value.alt}
                        className="object-cover"
                        fill
                        size="small"
                        src={value.src}
                      />
                      <div className="absolute inset-0 bg-black/40 transition-opacity hover:opacity-0" />
                    </div>

                    <span className="text-spanish-gray block py-4 text-xs">{value.date}</span>
                    <h4 className="text-base font-semibold xl:text-2xl">{value.title}</h4>
                    <p className="text-spanish-gray pt-2 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};
