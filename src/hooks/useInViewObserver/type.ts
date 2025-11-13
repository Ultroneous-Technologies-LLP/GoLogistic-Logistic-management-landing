import { RefObject } from "react";

import { UseInViewTypeEnum } from "./enum";

export type Input = RefObject<HTMLElement | null> | UseInViewOptions | undefined;

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

export type UseInViewReturn = SingleReturn | MultipleReturn;

export interface UseInViewOptions {
  count?: number;
  isMultiple?: boolean;
  threshold?: number;
}
