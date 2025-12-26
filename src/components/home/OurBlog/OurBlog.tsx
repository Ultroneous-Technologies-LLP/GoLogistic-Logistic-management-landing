"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef } from "react";

import { Container, Title } from "@/components";

import { OurBlogSlider } from "./OurBlogSlider";
import { BlogSectionProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export const OurBlog: FC<BlogSectionProps> = ({ blogData, longTitle, title }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        sectionRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    });

    return (): void => mm.revert();
  }, []);

  return (
    <Container className="relative pt-20 pb-20 xl:pt-36.5 xl:pb-15" id="blog" ref={sectionRef}>
      <div className="px-4 md:px-6 xl:pr-22.5 xl:pl-17.5">
        <Title title={title} />
      </div>

      <OurBlogSlider blogData={blogData} longTitle={longTitle} />
    </Container>
  );
};
