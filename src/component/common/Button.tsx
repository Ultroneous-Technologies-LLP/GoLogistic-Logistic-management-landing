import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from "react";

const baseClasses =
  "text-lg/9 font-semibold transition-all duration-500 ease-out hover:ease-in w-fit cursor-pointer w-full";

const variants = {
  contained:
    "bg-black text-white border border-transparent hover:bg-transparent hover:text-black hover:border-light-silver",
  outlined:
    "bg-transparent text-black border border-light-silver hover:bg-black hover:text-white hover:border-transparent",
} as const;

type Variant = keyof typeof variants;

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

type ButtonOnlyProps = SharedProps & {
  as?: "button";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type LinkOnlyProps = SharedProps & {
  as: "link";
  href: string;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  > &
  Omit<LinkProps, "passHref">;

type ButtonProps = ButtonOnlyProps | LinkOnlyProps;

const Button: FC<ButtonProps> = (props) => {
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

export default Button;
