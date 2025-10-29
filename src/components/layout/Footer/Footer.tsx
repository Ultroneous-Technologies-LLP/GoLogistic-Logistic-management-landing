"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef } from "react";

import { useInView, UseInViewTypeEnum } from "@/hooks";
import { Logo, Container, Link } from "@/components";

import { FooterProps } from "./types";
import { iconMap } from "./constant";

export const Footer: FC<FooterProps> = ({
  contact,
  footerLegal,
  links,
  backgroundImage,
  blogCard,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);

  return (
    <footer
      ref={sectionRef}
      className={getAnimation({
        animationType: UseInViewTypeEnum.UP,
      })}
    >
      <Container className="relative">
        <Image
          width={1440}
          height={470}
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          title={backgroundImage.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
          className="hidden xl:block"
        />
        <div
          className="bg-white p-6 md:p-0 absolute -bottom-8 md:-bottom-21 xl:-bottom-22 left-1/2 -translate-x-1/2 h-fit max-w-78 md:max-w-153.5 xl:max-w-287 w-full mx-auto flex gap-4 xl:gap-17.5 items-center 
      rounded-20 shadow-[0_0_20px_0_#0000001A]"
        >
          <div className="max-w-57.5 xl:max-w-127.5 w-full hidden md:block">
            <Image
              src={blogCard.src}
              width={510}
              height={484}
              alt={blogCard.alt}
              title={blogCard.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-132 w-full text-center md:text-left md:p-5 xl:p-0">
            <h5 className="text-xl/7.5 xl:text-4xl/12.5 font-bold">
              <span>{blogCard.title}</span>
            </h5>
            <p className="text-sm/4.5 xl:text-xl/10 text-spanish-gray pt-2.5 pb-4 xl:pt-3.5 xl:pb-10.5">
              <span>{blogCard.description}</span>
            </p>
            <div>
              <Link
                variant={blogCard.button.variant}
                className="!text-base/6 !w-fit py-3 px-6 xl:px-7.5 xl:py-4 rounded-lg"
                aria-label={blogCard.button.ariaLabel}
                href={blogCard.button.href}
              >
                {blogCard.button.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container
        className="relative pt-25 md:pt-36 xl:pt-48.5 pb-12.5 px-4 md:px-6 xl:pb-5 xl:pl-17.5"
        backgroundClassName="bg-black"
      >
        <div className="bg-black">
          <div className="bg-white/10 max-w-12 h-29 w-full absolute -left-2.5 xl:block hidden" />
          <div className="w-full pb-12 border-b border-white grid grid-cols-1 auto-rows-auto xl:grid-rows-1 justify-between">
            <div className="row-start-1 row-end-2 col-start-1 col-end-2 xl:pt-11 flex justify-center md:justify-start">
              <Logo className="text-white" />
            </div>
            <div className="pt-8 md:pt-12 xl:pb-0 xl:pt-27 row-start-3 row-end-4 col-start-1 col-end-2 xl:row-start-2 xl:row-end-3 md:grid md:grid-cols-3 xl:grid-cols-1">
              {contact.map(
                ({ href, id, label, title, ariaLabel, text, Icon }) => {
                  const IconComponent = iconMap[Icon];
                  return (
                    <div
                      className="pb-6.5 md:pb-0 xl:pb-8 last:pb-0 md:max-w-60 md:w-full"
                      key={id}
                    >
                      <address className="flex justify-center md:justify-start items-center gap-8 not-italic text-center md:text-start">
                        {IconComponent && (
                          <IconComponent
                            className="text-white hidden xl:block"
                            aria-label={label.toLowerCase()}
                          />
                        )}
                        <div>
                          <p className="text-white">
                            <span>{label}</span>
                          </p>
                          <Link
                            href={href}
                            className="text-white hover:underline underline-offset-4"
                            rel="nofollow"
                            aria-label={ariaLabel}
                            title={title}
                            isPureLink={false}
                          >
                            {text}
                          </Link>
                        </div>
                      </address>
                    </div>
                  );
                }
              )}
            </div>
            <div className="xl:row-start-1 xl:row-end-3 xl:col-start-2 xl:col-end-3 md:grid md:grid-cols-3 xl:flex pt-7.5 xl:pt-0 space-y-8 md:space-y-0">
              {links.map(({ id, links, title }, index) => (
                <div key={id} className="text-center md:text-start">
                  <p
                    className={clsx(
                      "xl:bg-white/10 text-white text-2xl font-semibold xl:py-11 mb-3 md:mb-5 xl:mb-7 xl:pr-29",
                      { "xl:pl-42.5": index === 0 }
                    )}
                  >
                    {title}
                  </p>
                  <ul className="space-y-4 text-white">
                    {links.map(({ href, id, label }) => (
                      <li
                        key={id}
                        className={clsx(
                          title === "Our company" ? "xl:pl-42.5" : ""
                        )}
                      >
                        <Link
                          href={href}
                          className="font-medium hover:underline underline-offset-4"
                          title={label}
                          isPureLink={false}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 xl:pt-3.5 xl:pr-11.5 flex flex-col md:flex-row gap-4 justify-between xl:items-center">
            <p className="text-center xl:text-start text-white text-10/3.5 md:text-sm/4.5 xl:text-base xl:leading-[2.5] inline-block">
              <span lang="en">{footerLegal.title}</span>
            </p>
            <div className="flex justify-center items-end gap-6.5">
              {footerLegal.socialsMedia.map(({ Icon, href, id, label }) => {
                const Icons = iconMap[Icon];
                return (
                  <Link
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    isPureLink={false}
                  >
                    <Icons className="text-white" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
