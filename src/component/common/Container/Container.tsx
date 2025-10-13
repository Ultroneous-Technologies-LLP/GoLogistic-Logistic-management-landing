"use client";

import clsx from "clsx";
import { forwardRef, ElementType } from "react";

import { ContainerProps, SupportedTags } from "./types";

export const Container = forwardRef(
  <T extends SupportedTags = "div">(
    {
      as,
      backgroundClassName = "",
      className = "",
      children,
      ...rest
    }: ContainerProps<T>,
    ref: React.Ref<T extends "div" ? HTMLDivElement : HTMLElement>
  ) => {
    const Component = (as || "section") as ElementType;

    if (backgroundClassName) {
      return (
        <Component className={clsx(backgroundClassName)} ref={ref} {...rest}>
          <div className={clsx("mx-auto w-full max-w-360", className)}>
            {children}
          </div>
        </Component>
      );
    }

    return (
      <Component
        className={clsx("mx-auto w-full max-w-360", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
