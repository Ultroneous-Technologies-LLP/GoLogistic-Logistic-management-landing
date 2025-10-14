import { Image } from "@/types";

interface SliderData {
  id: number;
  quote: string;
  author: string;
  subText: string;
}

export interface TestimonialSliderProps {
  longTitle: string;
  sliderData: SliderData[];
}

export interface TestimonialSectionProps {
  title: string;
  longTitle: string;
  backgroundImage: Image;
  sliderData: SliderData[];
}
