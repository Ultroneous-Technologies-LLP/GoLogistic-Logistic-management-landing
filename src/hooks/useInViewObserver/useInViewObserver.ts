import { useEffect, useState } from "react";

import { SCROLL_THRESHOLD } from "@/constant";

import { NOT_FOUND_INDEX, TIME_OUT, ZERO } from "./constant";
import { UseInViewTypeEnum } from "./enum";
import { UseInViewReturn, UseInViewHook, IndexOrOptions } from "./type";
import { getAnimationClass } from "./utils";

export const useInViewObserver = ({
  singleAnimationRef,
  multipleAnimationRef,
}: UseInViewHook): UseInViewReturn => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [isInView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let timeout: NodeJS.Timeout;

    const handleMultiple = (): void => {
      if (!multipleAnimationRef?.current.length) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = multipleAnimationRef.current.findIndex((el) => el === entry.target);
            if (entry.isIntersecting && index !== NOT_FOUND_INDEX) {
              setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: SCROLL_THRESHOLD }
      );

      timeout = setTimeout(() => {
        multipleAnimationRef.current.forEach((el) => el && observer.observe(el));
      }, TIME_OUT);
    };

    const handleSingle = (): void => {
      const el = singleAnimationRef?.current;
      if (!el || hasAnimated) {
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            setHasAnimated(true);
            observer.unobserve(el);
          }
        },
        { threshold: SCROLL_THRESHOLD }
      );

      observer.observe(el);
    };

    if (multipleAnimationRef?.current.length) {
      handleMultiple();
    } else {
      handleSingle();
    }

    return (): void => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [multipleAnimationRef, singleAnimationRef, hasAnimated]);

  const getAnimation = (indexOrOptions?: IndexOrOptions): string => {
    const isMultiple = multipleAnimationRef?.current.length;

    if (isMultiple) {
      const index = typeof indexOrOptions === "number" ? indexOrOptions : ZERO;
      const isVisible = visibleIndexes.includes(index);

      const animationType =
        typeof indexOrOptions === "object"
          ? (indexOrOptions.animationType ?? UseInViewTypeEnum.IN_RIGHT)
          : UseInViewTypeEnum.IN_RIGHT;

      const className = typeof indexOrOptions === "object" ? (indexOrOptions.className ?? "") : "";

      return getAnimationClass(animationType, isVisible, isVisible, className);
    }

    const indexOptions = typeof indexOrOptions === "object" ? indexOrOptions : undefined;
    const animationType = indexOptions?.animationType ?? UseInViewTypeEnum.UP;
    const className = indexOptions?.className ?? "";

    return getAnimationClass(animationType, isInView, hasAnimated, className);
  };

  return { hasAnimated, getAnimation };
};
