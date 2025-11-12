// import { Image } from "@/types";

interface BackgroundImage {
  alternativeText: string;
  url: string;
}

export interface ResponsiveSliderHook {
  centerPadding: string;
  slidesToShow: number;
}

interface SliderData {
  author: string;
  id: number;
  quote: string;
  subText: string;
}

export interface TestimonialSliderProps {
  longTitle: string;
  sliderData: SliderData[];
}

export interface TestimonialSectionProps {
  backgroundImage: BackgroundImage;
  longTitle: string;
  testimonialItems: SliderData[];
  title: string;
}
