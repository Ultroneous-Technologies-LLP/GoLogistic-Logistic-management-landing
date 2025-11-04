import { UseInViewTypeEnum } from "./enum";

export type Animation =
  | UseInViewTypeEnum.UP
  | UseInViewTypeEnum.IN_LEFT
  | UseInViewTypeEnum.IN_RIGHT
  | null;

export interface GetAnimationProps {
  animationType?: Animation;
  className?: string;
}
