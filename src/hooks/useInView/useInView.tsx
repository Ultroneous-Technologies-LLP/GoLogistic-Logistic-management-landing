import { RefObject, useEffect, useState } from "react";
import { UseInViewTypeEnum } from "./enum";
import { getAnimationClass } from "../utils";

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
    animationType = UseInViewTypeEnum.UP,
    className = "",
  }: {
    animationType?: UseInViewTypeEnum | null;
    className?: string;
  } = {}) => {
    const safeAnimationType = animationType ?? UseInViewTypeEnum.UP;

    return getAnimationClass(safeAnimationType, inView, hasAnimated, className);
  };

  return { inView, hasAnimated, getAnimation };
};
