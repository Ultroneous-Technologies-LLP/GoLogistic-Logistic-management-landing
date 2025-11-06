"use client";

import { useState, useEffect } from "react";

import { BREAKPOINT_MD, BREAKPOINT_XL } from "@/constant";

import { ResponsiveSliderHook } from "./types";

const SLIDES_DEFAULT = 4.4;
const SLIDES_MOBILE = 1;
const SLIDES_TABLET = 2.9;
const SLIDES_DESKTOP = 4.5;

export const useResponsiveSlider = (): ResponsiveSliderHook => {
  const [slidesToShow, setSlidesToShow] = useState(SLIDES_DEFAULT);
  const [centerPadding, setCenterPadding] = useState("0px");

  useEffect(() => {
    const updateSlides = (): void => {
      switch (true) {
        case window.innerWidth < BREAKPOINT_MD:
          setSlidesToShow(SLIDES_MOBILE);
          setCenterPadding("50px");
          break;

        case window.innerWidth < BREAKPOINT_XL:
          setSlidesToShow(SLIDES_TABLET);
          setCenterPadding("-120px");
          break;

        default:
          setSlidesToShow(SLIDES_DESKTOP);
          setCenterPadding("-80px");
          break;
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return (): void => window.removeEventListener("resize", updateSlides);
  }, []);

  return { slidesToShow, centerPadding };
};
