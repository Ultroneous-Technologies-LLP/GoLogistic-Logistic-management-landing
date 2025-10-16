import { BUTTON_VARIANT } from "@/constant";

export interface Image {
  src: string;
  alt: string;
}

type Variant = BUTTON_VARIANT

export interface Button {
  variant: Variant;
  label: string;
  ariaLabel: string;
  href: string ;
}
