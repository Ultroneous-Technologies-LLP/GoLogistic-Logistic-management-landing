import { FC } from "react";
import OurBlogSlider from "./OurBlogSlider";
import Image from "next/image";
import { blogSection } from "@/types/home-page-types";
import { Button, Container, SectionHeading } from "@/component/common";

interface OurBlogData {
  data: blogSection;
}

const OurBlog: FC<OurBlogData> = ({ data }) => {
  return (
    <Container id="blog" className="relative pt-20 xl:pt-36.5">
      <div className="px-4 md:px-6 xl:pl-17.5 xl:pr-22.5">
        <SectionHeading title={data.title} />
      </div>
      <div>
        <OurBlogSlider data={data} />
      </div>
      <div
        className="bg-white p-6 md:p-0 absolute -bottom-8 md:-bottom-21 xl:-bottom-22 left-1/2 -translate-x-1/2 h-fit max-w-78 md:max-w-153.5 xl:max-w-287 w-full mx-auto flex gap-4 xl:gap-17.5 items-center 
      rounded-20 shadow-[0_0_20px_0_#0000001A]"
      >
        <div className="max-w-57.5 xl:max-w-127.5 w-full hidden md:block">
          <Image
            src={data.blogCard.src}
            width={510}
            height={484}
            alt={data.blogCard.alt}
            title={data.blogCard.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-132 w-full text-center md:text-left md:p-5 xl:p-0">
          <h5 className="text-xl/7.5 xl:text-4xl/12.5 font-bold">
            <span>{data.blogCard.title}</span>
          </h5>
          <p className="text-sm/4.5 xl:text-xl/10 text-spanish-gray pt-2.5 pb-4 xl:pt-3.5 xl:pb-10.5">
            <span>{data.blogCard.description}</span>
          </p>
          <div>
            <Button
              variant={data.blogCard.button.variant}
              className="!text-base/6 !w-fit py-3 px-6 xl:px-7.5 xl:py-4 rounded-lg"
              aria-label={data.blogCard.button.ariaLabel}
            >
              {data.blogCard.button.label}
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-15 hidden xl:block">
        <Image
          width={1440}
          height={470}
          src={data.backgroundImage.src}
          alt={data.backgroundImage.alt}
          title={data.backgroundImage.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        />
      </div>
    </Container>
  );
};

export default OurBlog;
