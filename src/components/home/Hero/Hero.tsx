import { FC } from "react";
import Image from "next/image";

import { HeroSectionProps } from "./types";
import { Container, Link } from "../../common";

export const Hero: FC<HeroSectionProps> = ({
  backgroundImage,
  description,
  title,
  heroButtons,
}) => (
  <Container className="relative" backgroundClassName="pt-20" id="home">
    <Image
      src={backgroundImage.src}
      alt={backgroundImage.alt}
      width={1440}
      height={470}
      className="absolute -z-20 object-cover w-full h-full"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
      title={backgroundImage.alt}
    />
    <div className="flex flex-col md:flex-row md:items-center xl:items-start px-4 md:px-6 xl:px-17.5 gap-2 md:gap-4 xl:gap-11.5 xl:pt-37.5 pb-20 md:pb-19 xl:pb-31.5">
      <h1 className="text-2xl/9 md:text-4xl/13.5 xl:text-5xl xl:leading-16 font-semibold max-w-102.5 xl:max-w-143.5 w-full">
        <span>{title}</span>
      </h1>
      <div>
        <p className="text-sm/4.5 md:text-sm/5 xl:text-lg/10 pb-4 md:pb-8 xl:pb-10.5">
          <span>{description}</span>
        </p>
        <div className="flex gap-2 xl:gap-6 w-full">
          {heroButtons.map(({ ariaLabel, href, id, label, variant }) => (
            <div key={id}>
              <Link
                variant={variant}
                href={href}
                className="!text-base/6 py-3 px-7.5 xl:py-1.5 xl:px-16 rounded-xl inline-block xl:!text-xl/9"
                aria-label={ariaLabel}
                label={label}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);
