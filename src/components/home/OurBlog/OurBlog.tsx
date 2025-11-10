"use client";

import clsx from "clsx";
import { FC, useRef } from "react";

import { Container, Title } from "@/components";
import { useInView } from "@/hooks";

import { OurBlogSlider } from "./OurBlogSlider";
import { BlogSectionProps } from "./types";

export const OurBlog: FC<BlogSectionProps> = ({ blogData, longTitle, title }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);

  return (
    <Container
      className={clsx("relative pt-20 pb-20 xl:pt-36.5 xl:pb-15", getAnimation())}
      id="blog"
      ref={sectionRef}
    >
      <div className="px-4 md:px-6 xl:pr-22.5 xl:pl-17.5">
        <Title title={title} />
      </div>
      <div>
        <OurBlogSlider blogData={blogData} longTitle={longTitle} />
      </div>
    </Container>
  );
};
