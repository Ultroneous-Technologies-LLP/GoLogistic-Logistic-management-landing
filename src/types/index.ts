export type ButtonVariant = "contained" | "outlined";

export interface Image {
  src: string;
  alt: string;
}

type Variant = ButtonVariant;

export interface Button {
  variant: Variant;
  label: string;
  ariaLabel?: string;
  href: string;
}
