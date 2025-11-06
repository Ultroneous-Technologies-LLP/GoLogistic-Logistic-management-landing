import { RefObject, useEffect, useRef, useState } from "react";

import { UseInViewTypeEnum } from "./useInView";
import { getAnimationClass } from "./utils";

const THRESHOLD = 0.3;
const INDEX = -1;

interface UseMultipleInViewReturn {
  getAnimation: (index: number, animationType?: UseInViewTypeEnum, className?: string) => string;
  refs: RefObject<(HTMLElement | null)[]>;
}

export const useMultipleInView = (
  count: number,
  threshold: number = THRESHOLD
): UseMultipleInViewReturn => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.findIndex((el) => el === entry.target);
          if (entry.isIntersecting && index !== INDEX) {
            setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return (): void => observer.disconnect();
  }, [threshold]);

  const getAnimation = (
    index: number,
    animationType: UseInViewTypeEnum = UseInViewTypeEnum.UP,
    className = ""
  ): string => {
    const isVisible = visibleIndexes.includes(index);
    const hasAnimated = isVisible;
    return getAnimationClass(animationType, isVisible, hasAnimated, className);
  };

  return { refs, getAnimation };
};
