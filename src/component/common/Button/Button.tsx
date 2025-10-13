"use client";

import clsx from "clsx";
import { FC } from "react";
import Link from "next/link";

import { ButtonOnlyProps, ButtonProps, LinkOnlyProps, variants } from "./types";

const baseClasses =
  "text-lg/9 font-semibold transition-all duration-500 ease-out hover:ease-in w-fit cursor-pointer w-full";

export const Button: FC<ButtonProps> = (props) => {
  const { as, variant = "contained", className, children, ...rest } = props;

  const combinedClass = clsx(baseClasses, variants[variant], className);

  if (as === "link") {
    const { href, ...linkProps } = rest as LinkOnlyProps;
    return (
      <Link {...linkProps} className={combinedClass} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button {...(rest as ButtonOnlyProps)} className={combinedClass}>
      <span>{children}</span>
    </button>
  );
};
