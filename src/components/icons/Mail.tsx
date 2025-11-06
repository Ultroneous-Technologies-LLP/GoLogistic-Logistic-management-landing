import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_22, ICON_SIZE_27 } from "./constant";

export const Mail = ({
  width = ICON_SIZE_22,
  height = ICON_SIZE_27,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_22} ${ICON_SIZE_27}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M19.6996 1.22559H1.98835C1.4425 1.22559 1 1.59524 1 2.05124V15.1659C1 15.6219 1.4425 15.9915 1.98835 15.9915H19.6996C20.2454 15.9915 20.6879 15.6219 20.6879 15.1659V2.05124C20.6879 1.59524 20.2454 1.22559 19.6996 1.22559Z"
      stroke="currentColor"
      strokeWidth="0.984396"
    />
    <path
      d="M1 1.22559L11.262 8.11636L20.6879 1.45141"
      stroke="currentColor"
      strokeWidth="0.984396"
    />
  </svg>
);
