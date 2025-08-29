import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import { FC } from "react";
import { heroSection } from "@/utils/type";

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
        className="absolute top-0 left-0 -z-20"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        title={data.backgroundImage.alt}
      />
      <div className="flex px-17.5 gap-11.5 pt-37.5 pb-31.5">
        <h1 className="text-5xl leading-[65px] font-semibold max-w-[574px] w-full">
          <span>{data.heading}</span>
        </h1>
        <div className="w-full">
          <p className="text-lg/10 pb-10.5">
            <span>{data.description}</span>
          </p>
          <div className="flex gap-6 w-full">
            {data.heroButtons.map((value) => (
              <div key={value.id}>
                <Button
                  as="link"
                  variant={value.variant}
                  href={value.href}
                  className="max-w-32 py-1.5 px-16.5 rounded-xl"
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
