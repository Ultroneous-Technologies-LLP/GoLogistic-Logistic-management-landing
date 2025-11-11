import { useEffect, useRef, useState } from "react";

import { SCROLL_THRESHOLD } from "@/constant";

import { NOT_FOUND_INDEX, TIME_OUT, ZERO } from "./constant";
import { UseInViewTypeEnum } from "./enum";
import { UseInViewOptions, UseInViewReturn, Input } from "./type";
import { getAnimationClass } from "./utils";

export const useInViewObserver = (input?: Input): UseInViewReturn => {
  const isRef = !!input && "current" in input;
  const options: UseInViewOptions = isRef ? {} : (input as UseInViewOptions);

  const { isMultiple = false, threshold = SCROLL_THRESHOLD } = options;

  const internalRef = useRef<HTMLElement | null>(null);
  const singleRef = isRef ? input : internalRef;
  const multipleRefs = useRef<(HTMLElement | null)[]>([]);

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [isInView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isMultiple) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = multipleRefs.current.findIndex((el) => el === entry.target);
          if (entry.isIntersecting && index !== NOT_FOUND_INDEX) {
            setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const timeout = setTimeout(() => {
      multipleRefs.current.forEach((el) => el && observer.observe(el));
    }, TIME_OUT);

    return (): void => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [isMultiple, threshold]);

  useEffect(() => {
    if (isMultiple) {
      return;
    }

    const el = singleRef.current;
    if (!el) {
      return;
    }

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
    return (): void => observer.disconnect();
  }, [isMultiple, threshold, hasAnimated, singleRef]);

  const getAnimation = (
    indexOrOptions?: number | { animationType?: UseInViewTypeEnum | null; className?: string }
  ): string => {
    if (isMultiple) {
      const index = typeof indexOrOptions === "number" ? indexOrOptions : ZERO;
      const isVisible = visibleIndexes.includes(index);

      // 👇 default to RIGHT for multiple elements
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

  return isMultiple
    ? { refs: multipleRefs, getAnimation }
    : { ref: singleRef, isInView, hasAnimated, getAnimation };
};
