import { SVGProps } from "react";

const RoundedLeftArrow = ({
  width = 14,
  height = 12,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      aria-label="arrow"
      {...svgProps}
    >
      <path
        d="M13 6L1 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11L1 6L6 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RoundedLeftArrow;
