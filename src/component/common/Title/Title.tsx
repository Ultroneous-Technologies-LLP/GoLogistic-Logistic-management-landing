import clsx from "clsx";
import { FC } from "react";

import { TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ title, variant = "default" }) => (
  <h2
    className={clsx(
      "inline-block py-1 pl-1 pr-2 mb-4 xl:mb-5 text-sm font-medium text-black border-l-4",
      {
        "border-platinum/80 bg-white": variant === "white",
        "border-black bg-platinum/80": variant !== "white",
      }
    )}
  >
    <span>{title}</span>
  </h2>
);
