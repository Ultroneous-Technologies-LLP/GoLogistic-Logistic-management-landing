import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

import { VARIANTS } from "./constant";

export type Variant = keyof typeof VARIANTS;

export type LinKProps = {
  href: string;
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  isPureLink?: boolean;
  label?: string;
  variant?: Variant;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "href" | "children" | "aria-label"
> &
  Omit<LinkProps, "passHref">;
