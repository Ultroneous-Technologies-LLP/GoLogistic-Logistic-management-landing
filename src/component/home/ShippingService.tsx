"use client";
import React, { FC } from "react";
import Container from "@/component/common/Container";
import { shippingService } from "@/utils/type";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true, // 👈 enables fade animation
  cssEase: "linear",
  customPaging: () => (
    <div className="w-5 xl:w-7 h-2 rounded-full bg-white opacity-50 transition-all duration-300 cursor-pointer" />
  ),
  appendDots: (dots: React.ReactNode) => (
    <ul className="flex justify-center gap-2 md:gap-3 mt-6">{dots}</ul>
  ),
};

interface ShippingServiceProps {
  data: shippingService;
}

const ShippingService: FC<ShippingServiceProps> = ({ data }) => {
  return (
    <Container className="px-4 md:px-6 xl:px-17.5">
      <div
        className="z-0 relative w-full rounded-20 overflow-x-hidden [&_.slick-track]:flex [&_.slick-track]:gap-0.5 [&_.slick-dots]:absolute [&_.slick-dots]:bottom-6 [&_.slick-dots]:left-1/2 [&_.slick-dots]:-translate-x-1/2 
        [&_.slick-dots]:!flex [&_.slick-dots]:gap-1 [&_.slick-slide]:h-auto [&_.slick-list]:rounded-2xl [&_.slick-active>div]:bg-red-500-200 [&_.slick-active>div]:opacity-100 
        [&_.slick-dots_.slick-active>div]:!w-10 [&_.slick-dots_.slick-active>div]:xl:!w-22 [&_.slick-dots_.slick-active>div]:opacity-100 [&_.slick-slide]:focus:!outline-none [&_.slick-slide]:focus:!ring-0"
      >
        <Slider {...settings}>
          {data.shippingServiceImage.map((value) => (
            <div key={value.id} className="relative w-full">
              <div className="-mb-5 md:-mb-10 xl:-mb-20 z-10 relative">
                <h2 className="text-xl md:text-[32px] md:leading-12 xl:leading-none font-semibold pb-2 xl:pb-3 text-center">
                  <span>{data.title}</span>
                </h2>
                <p className="text-sm/5 xl:text-lg/7 max-w-55.5 md:max-w-85.5 xl:max-w-112 text-center w-full mx-auto text-[#7b7b7b]">
                  <span>{data.description}</span>
                </p>
              </div>
              <picture className="w-full z-0 rounded-20 overflow-hidden">
                <source
                  srcSet={value.desktopSrc}
                  media="(min-width: 1280px)"
                  width={1300}
                  height={728}
                />
                <source
                  srcSet={value.tabletSrc}
                  media="(min-width: 768px)"
                  width={1200}
                  height="auto"
                  className="w-full h-full"
                />
                <img
                  src={value.mobileSrc}
                  alt={value.alt}
                  loading="lazy"
                  width={767}
                  height="auto"
                  title={value.alt}
                  className="rounded-20 overflow-hidden"
                />
              </picture>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ShippingService;
