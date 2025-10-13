import clsx from "clsx";
import { FC } from "react";
import Link from "next/link";

import { Logo } from "@/components/icons";

import { footerProps } from "./types";
import { iconMap } from "./constant";
import { Container } from "@/components/common";

export const Footer: FC<footerProps> = ({ contact, footerLegal, links }) => (
  <Container
    backgroundClassName="bg-black"
    className="pt-19 pb-12.5 px-4 md:pt-37 md:px-6 xl:pt-48.5 xl:pb-5 xl:pl-17.5 relative"
    as="footer"
  >
    <div className="bg-white/10 max-w-12 h-29 w-full absolute -left-2.5 xl:block hidden" />
    <div className="w-full pb-12 border-b border-white grid grid-cols-1 auto-rows-auto xl:grid-rows-1 justify-between">
      <div className="row-start-1 row-end-2 col-start-1 col-end-2 xl:pt-11 flex justify-center md:justify-start">
        <Logo className="text-white" />
      </div>
      <div className="pt-8 md:pt-12 xl:pb-0 xl:pt-27 row-start-3 row-end-4 col-start-1 col-end-2 xl:row-start-2 xl:row-end-3 md:grid md:grid-cols-3 xl:grid-cols-1">
        {contact.map(({ href, id, label, title, ariaLabel, text, Icon }) => {
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
                    className="text-white"
                    rel="nofollow"
                    aria-label={ariaLabel}
                    title={title}
                  >
                    {text}
                  </Link>
                </div>
              </address>
            </div>
          );
        })}
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
                  className={clsx(title === "Our company" ? "xl:pl-42.5" : "")}
                >
                  <Link href={href} className="font-medium" title={label}>
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
            >
              <Icons className="text-white" />
            </Link>
          );
        })}
      </div>
    </div>
  </Container>
);
