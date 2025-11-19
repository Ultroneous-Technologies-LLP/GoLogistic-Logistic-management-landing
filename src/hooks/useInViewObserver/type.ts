import { RefObject } from "react";

import { UseInViewTypeEnum } from "./enum";

export interface CommonReturn {
  getAnimation: (
    indexOrOptions?: number | { animationType?: UseInViewTypeEnum | null; className?: string }
  ) => string;
}

export interface SingleReturn extends CommonReturn {
  hasAnimated: boolean;
  isInView: boolean;
  ref: RefObject<HTMLElement | null>;
}

export interface MultipleReturn extends CommonReturn {
  refs: RefObject<(HTMLElement | null)[]>;
}

export interface UseInViewHook {
  multipleAnimationRef?: RefObject<(HTMLElement | null)[]>;
  singleAnimationRef?: RefObject<HTMLElement | null>;
}

export interface UseInViewReturn {
  getAnimation: (
    indexOrOptions?: number | { animationType?: UseInViewTypeEnum | null; className?: string }
  ) => string;
  hasAnimated: boolean;
}
interface AnimationOptions {
  animationType?: UseInViewTypeEnum | null;
  className?: string;
}

export type IndexOrOptions = number | AnimationOptions;
