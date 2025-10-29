"use client";

import clsx from "clsx";
import { FC, useRef } from "react";

import { useInView, UseInViewTypeEnum } from "@/hooks";
import { Container, Title } from "@/components";

import { BlogSectionProps } from "./types";
import { OurBlogSlider } from "./OurBlogSlider";

export const OurBlog: FC<BlogSectionProps> = ({
  blogData,
  longTitle,
  title,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);

  return (
    <Container
      id="blog"
      ref={sectionRef}
      className={clsx(
        "relative pt-20 xl:pt-36.5 pb-20 xl:pb-15",
        getAnimation({
          animationType: UseInViewTypeEnum.UP,
        })
      )}
    >
      <div className="px-4 md:px-6 xl:pl-17.5 xl:pr-22.5">
        <Title title={title} />
      </div>
      <div>
        <OurBlogSlider blogData={blogData} longTitle={longTitle} />
      </div>
    </Container>
  );
};
