import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export const variants = {
  contained:
    "bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-light-silver",
  outlined:
    "bg-white text-black border border-light-silver hover:bg-black hover:text-white hover:border-transparent",
};

export type Variant = keyof typeof variants;

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export type ButtonOnlyProps = SharedProps & {
  as?: "button";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type LinkOnlyProps = SharedProps & {
  as: "link";
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">
  & Omit<LinkProps, "passHref">;

export type ButtonProps = ButtonOnlyProps | LinkOnlyProps;
