import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  JSX,
  ReactElement,
} from "react";

type SupportedTags = Extract<
  keyof JSX.IntrinsicElements,
  "div" | "header" | "footer" | "section"
>;

type ContainerProps<T extends SupportedTags> = {
  as?: T;
  backgroundClassName?: string;
  children: ReactElement | ReactElement[];
  className?: string;
  id?: string;
} & ComponentPropsWithoutRef<T>;

// This version supports all 4 tags and proper ref types
const Container = forwardRef(
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

export default Container;
