import clsx from "clsx";

import { ANIMATION_TYPES, UseInViewTypeEnum } from "../useInView";

interface GetAnimationProps {
  animationType?: UseInViewTypeEnum | null;
  className?: string;
}

interface AnimationClassOptions {
  animationType?: UseInViewTypeEnum | null;
  className?: string;
  hasAnimated?: boolean;
  isVisible?: boolean;
}

export const getAnimationClass = ({
  animationType,
  isVisible = true,
  hasAnimated = false,
  className = "",
}: AnimationClassOptions = {}): string => {
  const type: UseInViewTypeEnum = animationType ?? UseInViewTypeEnum.UP;

  if (!isVisible && !hasAnimated) {
    return "opacity-0";
  }

  if (hasAnimated && !isVisible) {
    return "opacity-100";
  }

  if (!ANIMATION_TYPES.includes(type)) {
    return clsx(type, "opacity-100", className);
  }

  switch (type) {
    case UseInViewTypeEnum.IN_LEFT:
      return clsx("animate-slide-in-left opacity-100", className);
    case UseInViewTypeEnum.IN_RIGHT:
      return clsx("animate-slide-in-right opacity-100", className);
    case UseInViewTypeEnum.UP:
    default:
      return clsx("animate-slide-up opacity-100", className);
  }
};

export const getAnimation = ({
  animationType = UseInViewTypeEnum.UP,
  className = "",
}: GetAnimationProps = {}): string =>
  clsx(getAnimationClass({ animationType, isVisible: true }), className);
