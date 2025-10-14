import { Image } from "@/types";

export interface HeroButtons {
  id: number;
  label: string;
  href: string;
  variant: "contained" | "outlined";
  ariaLabel: string;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  heroButtons: HeroButtons[];
  backgroundImage: Image;
}
