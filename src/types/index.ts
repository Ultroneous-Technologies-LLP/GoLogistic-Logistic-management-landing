import { UseInViewTypeEnum } from "@/hooks";

export type ButtonVariant = "contained" | "outlined";

export interface Image {
  alt: string;
  src: string;
}

type Variant = ButtonVariant;

export interface Button {
  href: string;
  label: string;
  variant: Variant;
  ariaLabel?: string;
}

export interface GetAnimationOptions {
  animationType?: UseInViewTypeEnum | null;
  className?: string;
}

export type GetAnimationFn = (options?: GetAnimationOptions) => string;
