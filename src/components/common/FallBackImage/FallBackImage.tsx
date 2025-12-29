"use client";

import Image from "next/image";
import { useState, useEffect, FC } from "react";

import { ImageSize, NextImageWithFallbackProps } from "./types";

const DEFAULT_FALLBACKS: Record<ImageSize, string> = {
  small: "/fallback-small.avif",
  medium: "/fallback-medium.avif",
  large: "/fallback-large.avif",
};

export const FallBackImage: FC<NextImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  size = "medium",
  ...props
}) => {
  const [isImgSrc, setIsImgSrc] = useState(src);

  useEffect(() => {
    setIsImgSrc(src);
  }, [src]);

  if (!src && !fallbackSrc) {
    return null;
  }

  const handleError = (): void => {
    const defaultFallback = DEFAULT_FALLBACKS[`${size}`];
    const nextSrc = fallbackSrc || defaultFallback;

    if (isImgSrc !== nextSrc) {
      setIsImgSrc(nextSrc);
    }
  };

  return <Image alt={alt} onError={handleError} src={isImgSrc} {...props} />;
};
