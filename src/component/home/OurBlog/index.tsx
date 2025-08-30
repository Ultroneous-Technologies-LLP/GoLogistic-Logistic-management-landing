import Container from "@/component/common/Container";
import { FC } from "react";
import OurBlogSlider from "./OurBlogSlider";
import Image from "next/image";
import Button from "@/component/common/Button";
import { blogSection } from "@/utils/type";

interface OurBlogData {
  data: blogSection;
}

const OurBlog: FC<OurBlogData> = ({ data }) => {
  return (
    <Container className="relative pt-36.5">
      <div className="pl-17.5 pr-22.5">
        <h2 className="inline-block py-1 pl-1 pr-2 mb-5 text-sm font-medium text-black border-l-4 border-black bg-[#E8E8E880]">
          <span>{data.title}</span>
        </h2>
      </div>
      <div>
        <OurBlogSlider data={data} />
      </div>
      <div className="bg-white absolute -bottom-22 left-1/2 -translate-x-1/2 h-fit max-w-287 w-full mx-auto flex gap-17.5 items-center rounded-[20px] shadow-[0_0_20px_0_#0000001A]">
        <div className="max-w-127.5 w-full">
          <Image
            src={data.blogCard.src}
            width={510}
            height={484}
            alt={data.blogCard.alt}
            title={data.blogCard.alt}
          />
        </div>
        <div className="max-w-132 w-full">
          <h5 className="text-4xl/12.5 font-bold">
            <span>{data.blogCard.title}</span>
          </h5>
          <p className="text-xl/10 text-[#949494] pt-3.5 pb-10.5">
            <span>{data.blogCard.title}</span>
          </p>
          <div>
            <Button
              variant={data.blogCard.button.variant}
              className="!w-fit px-7.5 py-4 rounded-lg"
              aria-label={data.blogCard.button.ariaLabel}
            >
              {data.blogCard.button.label}
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-15">
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
