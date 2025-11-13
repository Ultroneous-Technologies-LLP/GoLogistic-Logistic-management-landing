"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, JSX, useRef } from "react";

import { Logo, Container, Link, Facebook, LinkedIn, Twitter } from "@/components";
import { useInViewObserver } from "@/hooks";

import { iconMap } from "./constant";
import { FooterTextEnum } from "./enum";
import { FooterProps } from "./types";

const INDEX_START = 0;

export const Footer: FC<FooterProps> = ({ footerCard, footerContact, footerLegal, footerMenu }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInViewObserver(sectionRef);

  return (
    <footer className={getAnimation()} ref={sectionRef}>
      <Container className="relative">
        <Image
          alt="Global logistics routes background map"
          className="hidden xl:block"
          height={470}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
          src="/assets/home/hero-background.avif"
          title="Global logistics routes background map"
          width={1440}
        />
        <div
          className="rounded-20 absolute -bottom-8 left-1/2 mx-auto flex h-fit w-full max-w-78 -translate-x-1/2 items-center gap-4 bg-white p-6 shadow-[0_0_20px_0_#0000001A] md:-bottom-21 md:max-w-153.5 md:p-0 xl:-bottom-22 
      xl:max-w-287 xl:gap-17.5"
        >
          <div className="hidden w-full max-w-57.5 md:block xl:max-w-127.5">
            <Image
              alt="shipping-logistics-3d"
              className="h-full w-full object-cover"
              height={484}
              src="/assets/home/shipping-logistics-3d.avif"
              title="shipping-logistics-3d"
              width={510}
            />
          </div>
          <div className="w-full max-w-132 text-center md:p-5 md:text-left xl:p-0">
            <h5 className="text-xl/7.5 font-bold xl:text-4xl/12.5">
              <span>{footerCard.title}</span>
            </h5>
            <p className="text-spanish-gray pt-2.5 pb-4 text-sm/4.5 xl:pt-3.5 xl:pb-10.5 xl:text-xl/10">
              <span>{footerCard.description}</span>
            </p>
            <div>
              <Link
                aria-label={footerCard.button.ariaLabel}
                className="!w-fit rounded-lg px-6 py-3 !text-base/6 xl:px-7.5 xl:py-4"
                href={footerCard.button.href}
                variant={footerCard.button.variant}
              >
                {footerCard.button.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container
        backgroundClassName="bg-black"
        className="relative px-4 pt-25 pb-12.5 md:px-6 md:pt-36 xl:pt-48.5 xl:pb-5 xl:pl-17.5"
      >
        <div className="bg-black">
          <div className="absolute -left-2.5 hidden h-29 w-full max-w-12 bg-white/10 xl:block" />
          <div className="grid w-full auto-rows-auto grid-cols-1 justify-between border-b border-white pb-12 xl:grid-rows-1">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center md:justify-start xl:pt-11">
              <Logo className="text-white" />
            </div>
            <div className="col-start-1 col-end-2 row-start-3 row-end-4 pt-8 md:grid md:grid-cols-3 md:pt-12 xl:row-start-2 xl:row-end-3 xl:grid-cols-1 xl:pt-27 xl:pb-0">
              {footerContact.footerContactDetails.map(
                ({ id, type, link, display, icon, ariaLabel, linkTitle }) => {
                  const IconComponent =
                    iconMap.find((item) => item.name === icon)?.component ??
                    ((): JSX.Element | null => null);

                  return (
                    <div
                      className="pb-6.5 last:pb-0 md:w-full md:max-w-60 md:pb-0 xl:pb-8"
                      key={id}
                    >
                      <address className="flex items-center justify-center gap-8 text-center not-italic md:justify-start md:text-start">
                        <div>
                          <IconComponent
                            aria-label={type.toLowerCase()}
                            className="hidden text-white xl:block"
                          />
                        </div>
                        <div>
                          <p className="text-white">
                            <span>{type}</span>
                          </p>
                          <Link
                            aria-label={ariaLabel}
                            className="text-white underline-offset-4 hover:underline"
                            href={link}
                            rel="nofollow"
                            title={linkTitle}
                          >
                            {display}
                          </Link>
                        </div>
                      </address>
                    </div>
                  );
                }
              )}
            </div>
            <div className="space-y-8 pt-7.5 md:grid md:grid-cols-3 md:space-y-0 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-3 xl:flex xl:pt-0">
              {footerMenu.footerMenuItems.map(({ id, links, title }, index) => (
                <div className="text-center md:text-start" key={id}>
                  <p
                    className={clsx(
                      "mb-3 text-2xl font-semibold text-white md:mb-5 xl:mb-7 xl:bg-white/10 xl:py-11 xl:pr-29",
                      { "xl:pl-42.5": index === INDEX_START }
                    )}
                  >
                    {title}
                  </p>
                  <ul className="space-y-4 text-white">
                    {links.map(({ href, id: linkId, label }) => (
                      <li
                        className={clsx(
                          (title as FooterTextEnum) === FooterTextEnum.OUR_COMPANY
                            ? "xl:pl-42.5"
                            : ""
                        )}
                        key={linkId}
                      >
                        <Link
                          className="font-medium underline-offset-4 hover:underline"
                          href={href}
                          isPureLink={false}
                          title={label}
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
              {footerLegal.socialsMedia.iconsLink.map(({ id, href, label }) => (
                <Link
                  aria-label={label}
                  href={href}
                  isPureLink={false}
                  key={id}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={label}
                >
                  {((): JSX.Element | null => {
                    switch (label as FooterTextEnum) {
                      case FooterTextEnum.LINKEDIN:
                        return <LinkedIn className="text-white" />;
                      case FooterTextEnum.TWITTER:
                        return <Twitter className="text-white" />;
                      case FooterTextEnum.FACEBOOK:
                        return <Facebook className="text-white" />;
                      default:
                        return null;
                    }
                  })()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
