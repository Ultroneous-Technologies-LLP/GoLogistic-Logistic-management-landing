export interface Image {
  src: string;
  alt: string;
}

type Variant = "contained" | "outlined";

export interface Button {
  variant: Variant;
  label: string;
  ariaLabel: string;
  href: string ;
}
