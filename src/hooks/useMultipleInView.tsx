import { useEffect, useRef, useState } from "react";

import { getAnimationClass } from "./utils";
import { UseInViewTypeEnum } from "./useInView";

export const useMultipleInView = (count: number, threshold: number = 0.3) => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.findIndex((el) => el === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  const getAnimation = (
    index: number,
    animationType: UseInViewTypeEnum = UseInViewTypeEnum.UP,
    className = ""
  ) => {
    const isVisible = visibleIndexes.includes(index);
    const hasAnimated = isVisible;
    return getAnimationClass(animationType, isVisible, hasAnimated, className);
  };

  return { refs, getAnimation };
};
