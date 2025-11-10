import { ComponentPropsWithoutRef, JSX, PropsWithChildren } from "react";

export type SupportedTags = Extract<
  keyof JSX.IntrinsicElements,
  "div" | "header" | "footer" | "section"
>;

export type ContainerProps<T extends SupportedTags> = {
  children: PropsWithChildren;
  as?: T;
  backgroundClassName?: string;
  className?: string;
  id?: string;
} & ComponentPropsWithoutRef<T>;
