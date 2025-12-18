import { RefObject, useEffect, useState } from "react";

import { getAnimationClass } from "../utils";

import { UseInViewTypeEnum } from "./enum";

const DEFAULT_VIEW_VALUE = 0.3;

interface UseInViewReturn {
  getAnimation: (params?: {
    hasAnimated?: boolean;
    isView?: boolean;
    animationType?: UseInViewTypeEnum | null;
    className?: string;
  }) => string;
}

export const useInView = (
  ref: RefObject<HTMLElement | null>,
  threshold: number = DEFAULT_VIEW_VALUE
): UseInViewReturn => {
  const [isView, setIsView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsView(true);
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return (): void => observer.disconnect();
  }, [ref, threshold, hasAnimated]);

  const getAnimation = ({
    animationType = UseInViewTypeEnum.UP,
    className = "",
  }: {
    animationType?: UseInViewTypeEnum | null;
    className?: string;
  } = {}): string => {
    const safeAnimationType = animationType ?? UseInViewTypeEnum.UP;

    return getAnimationClass({
      animationType: safeAnimationType,
      isVisible: isView,
      hasAnimated,
      className,
    });
  };

  return { getAnimation };
};
