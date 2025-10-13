import clsx from "clsx";
import { FC } from "react";
import NextLink from "next/link";

import { LinKProps } from "./types";
import { VARIANTS } from "./constant";

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
    variant && VARIANTS[variant],
    className
  );

  return (
    <NextLink
      {...rest}
      href={href}
      aria-label={ariaLabel || label}
      className={combinedClass || ""}
    >
      {children ?? label}
    </NextLink>
  );
};
