import { JSX, SVGProps } from "react";

import { ICON_SIZE_0, ICON_SIZE_16, ICON_SIZE_21 } from "./constant";

export const Mail = ({
  width = ICON_SIZE_21,
  height = ICON_SIZE_16,
  ...svgProps
}: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill="none"
    height={height}
    role="img"
    viewBox={`${ICON_SIZE_0} ${ICON_SIZE_0} ${ICON_SIZE_21} ${ICON_SIZE_16}`}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <path
      d="M19.1918 0.492188H1.48054C0.934687 0.492188 0.492188 0.861844 0.492188 1.31784V14.4325C0.492188 14.8885 0.934687 15.2581 1.48054 15.2581H19.1918C19.7376 15.2581 20.1801 14.8885 20.1801 14.4325V1.31784C20.1801 0.861844 19.7376 0.492188 19.1918 0.492188Z"
      stroke="currentColor"
      strokeWidth="0.984396"
    />
    <path
      d="M0.492188 0.492188L10.7542 7.38296L20.1801 0.718012"
      stroke="currentColor"
      strokeWidth="0.984396"
    />
  </svg>
);
