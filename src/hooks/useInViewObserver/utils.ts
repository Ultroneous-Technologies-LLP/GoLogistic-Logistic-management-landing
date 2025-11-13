/* eslint-disable max-params */
import clsx from "clsx";

import { ANIMATION_TYPES } from "./constant";
import { UseInViewTypeEnum } from "./enum";

export const getAnimationClass = (
  animationType: UseInViewTypeEnum = UseInViewTypeEnum.UP,
  isVisible = true,
  hasAnimated = false,
  className = ""
): string => {
  if (!isVisible && !hasAnimated) {
    return "opacity-0";
  }
  if (hasAnimated && !isVisible) {
    return "opacity-100";
  }

  if (!ANIMATION_TYPES.includes(animationType)) {
    return clsx(animationType, "opacity-100", className);
  }

  switch (animationType) {
    case UseInViewTypeEnum.IN_LEFT:
      return clsx("animate-slide-in-left opacity-100", className);
    case UseInViewTypeEnum.IN_RIGHT:
      return clsx("animate-slide-in-right opacity-100", className);
    case UseInViewTypeEnum.UP:
    default:
      return clsx("animate-slide-up opacity-100", className);
  }
};
/* eslint-enable max-params */
