import clsx from "clsx";
import { useEffect, useState, RefObject } from "react";

import { ANIMATION } from "./constant";
import { GetAnimationProps } from "./type";
import { UseInViewTypeEnum } from "./enum";

export const useInView = (
  ref: RefObject<HTMLElement | null>,
  threshold: number = 0.3
) => {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, hasAnimated]);

  const getAnimation = ({
    animationType = null,
    className = "",
  }: GetAnimationProps) => {
    if (!inView && !hasAnimated) return "opacity-0";

    if (hasAnimated && !inView) return "opacity-100";

    if (animationType && !ANIMATION.includes(animationType))
      return clsx(animationType, "opacity-100", className);

    switch (animationType) {
      case UseInViewTypeEnum.IN_LEFT:
        return clsx("animate-slide-in-left opacity-100", className);
      case UseInViewTypeEnum.IN_RIGHT:
        return clsx("animate-slide-in-right opacity-100", className);
      case UseInViewTypeEnum.UP:
        return clsx("animate-slide-up opacity-100", className);
      default:
        return clsx("opacity-100", className);
    }
  };

  return { inView, hasAnimated, getAnimation };
};
