import { BUTTON_VARIANT } from "@/constant";
import { Image } from "@/types";

export interface HeroButtons {
  id: number;
  label: string;
  href: string;
  variant: BUTTON_VARIANT
  ariaLabel: string;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  heroButtons: HeroButtons[];
  backgroundImage: Image;
}
