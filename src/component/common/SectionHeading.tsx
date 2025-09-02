import { FC } from "react";

interface SectionHeadingProps {
  title: string;
  id?: string;
  variant?: "default" | "white";
}

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  id,
  variant = "default",
}) => {
  return (
    <h2
      id={id}
      className={`inline-block py-1 pl-1 pr-2 mb-4 xl:mb-5 text-sm font-medium text-black border-l-4 
        ${
          variant === "white"
            ? "border-platinum/80 bg-white"
            : "border-black bg-platinum/80"
        }`}
    >
      <span>{title}</span>
    </h2>
  );
};

export default SectionHeading;
