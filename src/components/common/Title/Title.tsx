import clsx from "clsx";
import { FC } from "react";

import { TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ title, variant = "default", className }) => (
  <h2
    className={clsx(
      "mb-4 inline-block border-l-4 py-1 pr-2 pl-1 text-sm font-medium text-black xl:mb-5",
      className,
      variant === "white" ? "border-platinum/80 bg-white" : "bg-platinum/80 border-black"
    )}
  >
    <span>{title}</span>
  </h2>
);
