import { ButtonVariant, Image } from "@/types";

export interface HeroButtons {
  ariaLabel: string;
  href: string;
  id: number;
  label: string;
  variant: ButtonVariant;
}

export interface HeroSectionProps {
  backgroundImage: Image;
  buttons: HeroButtons[];
  description: string;
  title: string;
}
