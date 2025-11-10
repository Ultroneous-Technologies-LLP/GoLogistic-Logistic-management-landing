import clsx from "clsx";
import NextLink from "next/link";
import { FC } from "react";

import { VARIANTS } from "./constant";
import { LinKProps } from "./types";

const baseClasses =
  "text-lg/9 font-semibold transition-all duration-500 ease-out hover:ease-in cursor-pointer";

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
