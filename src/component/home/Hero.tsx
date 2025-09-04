import Image from "next/image";
import { FC } from "react";
import { heroSection } from "@/types/home-page-types";
import { Button, Container } from "@/component/common";

interface heroSectionData {
  data: heroSection;
}

const Hero: FC<heroSectionData> = ({ data }) => {
  return (
    <Container className="relative" backgroundClassName="pt-20">
      <Image
        src={data.backgroundImage.src}
        alt={data.backgroundImage.alt}
        width={1440}
        height={470}
        className="absolute -z-20 object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        title={data.backgroundImage.alt}
      />
      <div className="flex flex-col md:flex-row md:items-center xl:items-start px-4 md:px-6 xl:px-17.5 gap-2 md:gap-4 xl:gap-11.5 xl:pt-37.5 pb-20 md:pb-19 xl:pb-31.5">
        <h1 className="text-2xl/9 md:text-4xl/13.5 xl:text-5xl xl:leading-16 font-semibold max-w-102.5 xl:max-w-143.5 w-full">
          <span>{data.heading}</span>
        </h1>
        <div>
          <p className="text-sm/4.5 md:text-sm/5 xl:text-lg/10 pb-4 md:pb-8 xl:pb-10.5">
            <span>{data.description}</span>
          </p>
          <div className="flex gap-2 xl:gap-6 w-full">
            {data.heroButtons.map((value) => (
              <div key={value.id}>
                <Button
                  as="link"
                  variant={value.variant}
                  href={value.href}
                  className="!text-base/6 py-3 px-7.5 xl:py-1.5 xl:px-16 rounded-xl inline-block xl:!text-xl/9"
                  aria-label={value.ariaLabel}
                >
                  {value.label}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
