import clsx from "clsx";
import NextLink from "next/link";
import { FC } from "react";

import { baseClasses, VARIANTS } from "./constant";
import { LinKProps } from "./types";

export const Link: FC<LinKProps> = ({
  href,
  variant,
  className,
  label,
  ariaLabel,
  children,
  isPureLink = true,
  ...rest
}) => {
  const combinedClass = clsx(
    isPureLink && baseClasses,
    variant && VARIANTS[`${variant}`],
    className
  );

  return (
    <NextLink {...rest} aria-label={ariaLabel || label} className={combinedClass || ""} href={href}>
      {children ?? label}
    </NextLink>
  );
};
