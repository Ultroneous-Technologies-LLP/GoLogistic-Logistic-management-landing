import React, { SVGProps } from "react";

const Mail = ({
  width = 22,
  height = 27,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
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
};

export default Mail;
