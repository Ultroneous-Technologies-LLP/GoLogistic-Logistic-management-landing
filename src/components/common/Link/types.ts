import { LinkProps } from "next/link";
import  { AnchorHTMLAttributes, ReactNode } from "react";

import { VARIANTS } from "./constant";

export type Variant = keyof typeof VARIANTS;

export type LinKProps = {
  href: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
  variant?: Variant;
  children?: ReactNode
  isPureLink?:boolean
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className" | "href" | "children" | "aria-label"
> &
  Omit<LinkProps, "passHref">;
