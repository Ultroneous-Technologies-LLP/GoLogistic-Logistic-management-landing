import clsx from "clsx";
import { ANIMATION_TYPES, UseInViewTypeEnum } from "../useInView";

export const getAnimationClass = (
  animationType: UseInViewTypeEnum = UseInViewTypeEnum.UP,
  isVisible = true,
  hasAnimated = false,
  className = ""
) => {
  if (!isVisible && !hasAnimated) return "opacity-0";
  if (hasAnimated && !isVisible) return "opacity-100";

  if (animationType && !ANIMATION_TYPES.includes(animationType))
    return clsx(animationType, "opacity-100", className);

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

export const getAnimation = ({
  animationType = UseInViewTypeEnum.UP,
  className = "",
}: {
  animationType?: UseInViewTypeEnum | null;
  className?: string;
} = {}) => {
  return getAnimationClass(animationType ?? UseInViewTypeEnum.UP, true, false, className);
};
