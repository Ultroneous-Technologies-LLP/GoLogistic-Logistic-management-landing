import { Image } from "@/types";

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
  backgroundImage: Image;
  longTitle: string;
  sliderData: SliderData[];
  title: string;
}
