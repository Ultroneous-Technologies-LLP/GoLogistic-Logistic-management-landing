import { RefObject, useEffect, useState } from "react";

import { getAnimationClass } from "../utils";

import { UseInViewTypeEnum } from "./enum";

const DEFAULT_THRESHOLD = 0.3;

export const useInView = (
  ref: RefObject<HTMLElement | null>,
  threshold: number = DEFAULT_THRESHOLD
): {
  getAnimation: (options?: {
    animationType?: UseInViewTypeEnum | null;
    className?: string;
  }) => string;
  hasAnimated: boolean;
  isInView: boolean;
} => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const element = ref.current;
    if (!element) {
      return () => {};
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold, hasAnimated]);

  const getAnimation = ({
    animationType = UseInViewTypeEnum.UP,
    className = "",
  }: {
    animationType?: UseInViewTypeEnum | null;
    className?: string;
  } = {}): string => {
    const safeAnimationType = animationType ?? UseInViewTypeEnum.UP;
    return getAnimationClass(safeAnimationType, isInView, hasAnimated, className);
  };

  return { isInView, getAnimation, hasAnimated };
};
