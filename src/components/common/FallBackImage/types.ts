import { ImageProps } from "next/image";

export type ImageSize = "small" | "medium" | "large";

export interface NextImageWithFallbackProps extends Omit<ImageProps, "src" | "alt"> {
  alt: string;
  src: string;
  fallbackSrc?: string;
  size?: ImageSize;
}
