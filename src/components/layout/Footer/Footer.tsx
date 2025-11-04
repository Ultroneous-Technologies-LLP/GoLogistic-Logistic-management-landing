"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useRef } from "react";

import { useInView } from "@/hooks";
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
    <footer ref={sectionRef} className={getAnimation()}>
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
          className="rounded-20 absolute -bottom-8 left-1/2 mx-auto flex h-fit w-full max-w-78 -translate-x-1/2 items-center gap-4 bg-white p-6 shadow-[0_0_20px_0_#0000001A] md:-bottom-21 md:max-w-153.5 md:p-0 xl:-bottom-22 
      xl:max-w-287 xl:gap-17.5"
        >
          <div className="hidden w-full max-w-57.5 md:block xl:max-w-127.5">
            <Image
              src={blogCard.src}
              width={510}
              height={484}
              alt={blogCard.alt}
              title={blogCard.alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full max-w-132 text-center md:p-5 md:text-left xl:p-0">
            <h5 className="text-xl/7.5 font-bold xl:text-4xl/12.5">
              <span>{blogCard.title}</span>
            </h5>
            <p className="text-spanish-gray pt-2.5 pb-4 text-sm/4.5 xl:pt-3.5 xl:pb-10.5 xl:text-xl/10">
              <span>{blogCard.description}</span>
            </p>
            <div>
              <Link
                variant={blogCard.button.variant}
                className="!w-fit rounded-lg px-6 py-3 !text-base/6 xl:px-7.5 xl:py-4"
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
        className="relative px-4 pt-25 pb-12.5 md:px-6 md:pt-36 xl:pt-48.5 xl:pb-5 xl:pl-17.5"
        backgroundClassName="bg-black"
      >
        <div className="bg-black">
          <div className="absolute -left-2.5 hidden h-29 w-full max-w-12 bg-white/10 xl:block" />
          <div className="grid w-full auto-rows-auto grid-cols-1 justify-between border-b border-white pb-12 xl:grid-rows-1">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center md:justify-start xl:pt-11">
              <Logo className="text-white" />
            </div>
            <div className="col-start-1 col-end-2 row-start-3 row-end-4 pt-8 md:grid md:grid-cols-3 md:pt-12 xl:row-start-2 xl:row-end-3 xl:grid-cols-1 xl:pt-27 xl:pb-0">
              {contact.map(({ href, id, label, title, ariaLabel, text, Icon }) => {
                const IconComponent = iconMap[Icon];
                return (
                  <div className="pb-6.5 last:pb-0 md:w-full md:max-w-60 md:pb-0 xl:pb-8" key={id}>
                    <address className="flex items-center justify-center gap-8 text-center not-italic md:justify-start md:text-start">
                      {IconComponent && (
                        <IconComponent
                          className="hidden text-white xl:block"
                          aria-label={label.toLowerCase()}
                        />
                      )}
                      <div>
                        <p className="text-white">
                          <span>{label}</span>
                        </p>
                        <Link
                          href={href}
                          className="text-white underline-offset-4 hover:underline"
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
              })}
            </div>
            <div className="space-y-8 pt-7.5 md:grid md:grid-cols-3 md:space-y-0 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-3 xl:flex xl:pt-0">
              {links.map(({ id, links, title }, index) => (
                <div key={id} className="text-center md:text-start">
                  <p
                    className={clsx(
                      "mb-3 text-2xl font-semibold text-white md:mb-5 xl:mb-7 xl:bg-white/10 xl:py-11 xl:pr-29",
                      { "xl:pl-42.5": index === 0 }
                    )}
                  >
                    {title}
                  </p>
                  <ul className="space-y-4 text-white">
                    {links.map(({ href, id, label }) => (
                      <li key={id} className={clsx(title === "Our company" ? "xl:pl-42.5" : "")}>
                        <Link
                          href={href}
                          className="font-medium underline-offset-4 hover:underline"
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
          <div className="flex flex-col justify-between gap-4 pt-8 md:flex-row xl:items-center xl:pt-3.5 xl:pr-11.5">
            <p className="text-10/3.5 inline-block text-center text-white md:text-sm/4.5 xl:text-start xl:text-base xl:leading-[2.5]">
              <span lang="en">{footerLegal.title}</span>
            </p>
            <div className="flex items-end justify-center gap-6.5">
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
