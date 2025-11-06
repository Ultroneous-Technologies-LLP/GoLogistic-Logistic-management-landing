import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_12, ICON_SIZE_14 } from "./constant";

export const LeftArrow = ({
  width = ICON_SIZE_14,
  height = ICON_SIZE_12,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label="arrow"
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_14} ${ICON_SIZE_12}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M13 6L1 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M6 11L1 6L6 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);
