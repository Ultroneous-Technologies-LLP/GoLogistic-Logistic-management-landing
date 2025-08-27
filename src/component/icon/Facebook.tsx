import { SVGProps } from "react";

const Facebook = ({
  width = 24,
  height = 22,
  ...svgProps
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...svgProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2207 11.358C23.2207 5.40959 18.0714 0.586426 11.7207 0.586426C5.37003 0.586426 0.220703 5.40959 0.220703 11.358C0.220703 16.7342 4.42539 21.1904 9.92383 21.9993L9.92383 14.4726L7.00313 14.4726L7.00313 11.358L9.92383 11.358L9.92383 8.98488C9.92383 6.28574 11.6411 4.79359 14.2676 4.79359C15.526 4.79359 16.8423 5.00421 16.8423 5.00421L16.8423 7.65527L15.3915 7.65527C13.9637 7.65527 13.5171 8.48526 13.5171 9.33833L13.5171 11.358L16.7063 11.358L16.197 14.4726L13.5176 14.4726L13.5176 22.0002C19.016 21.1919 23.2207 16.7356 23.2207 11.358Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Facebook;
