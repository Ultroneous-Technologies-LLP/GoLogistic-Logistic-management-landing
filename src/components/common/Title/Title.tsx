import clsx from "clsx";
import { FC } from "react";

import { TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ title, id, variant = "default" }) => (
  <h2
    id={id}
    className={clsx(
      "inline-block py-1 pl-1 pr-2 mb-4 xl:mb-5 text-sm font-medium text-black border-l-4",
      variant === "white"
        ? "border-platinum/80 bg-white"
        : "border-black bg-platinum/80"
    )}
  >
    <span>{title}</span>
  </h2>
);
