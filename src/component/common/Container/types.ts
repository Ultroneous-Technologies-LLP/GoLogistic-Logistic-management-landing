import { ComponentPropsWithoutRef, ReactElement, JSX } from "react";

export type SupportedTags = Extract<
  keyof JSX.IntrinsicElements,
  "div" | "header" | "footer" | "section"
>;

export type ContainerProps<T extends SupportedTags> = {
  as?: T;
  backgroundClassName?: string;
  children: ReactElement | ReactElement[];
  className?: string;
  id?: string;
} & ComponentPropsWithoutRef<T>;
