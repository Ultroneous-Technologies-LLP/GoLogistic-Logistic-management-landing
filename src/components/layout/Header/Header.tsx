"use client";

import clsx from "clsx";
import { FC, useEffect, useState } from "react";

import { Logo } from "@/components/icons";
import { BREAKPOINT_MD } from "@/constant";
import { useIsMobile, useWindowResize } from "@/hooks";
import { Link, Container } from "@/components/common";

import { HeaderProps } from "./types";
import { useActiveSection } from "./useActiveSection";

export const Header: FC<HeaderProps> = ({ button, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useIsMobile();
  const width = useWindowResize();

  const activeSection = useActiveSection(links, 150);

  useEffect(() => {
    if (width > BREAKPOINT_MD && isOpen) {
      setIsOpen(false);
    }
  }, [width, isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("/#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white">
      <Container
        as="header"
        className="relative z-50 pt-8.5 pb-4 px-6 xl:px-17.5"
      >
        <section className="flex items-center justify-between w-full">
          <Link href="/#home" isPureLink={false}>
            <Logo
              className="fill-black max-w-28 max-h-6 md:max-w-33 md:max-h-7.5 xl:max-w-39 xl:max-h-8.5 w-full"
              width={156}
              height={34}
            />
          </Link>
          <div className="items-center gap-5 xl:gap-10 text-sm xl:text-base hidden md:flex">
            {links.map(({ href, id, label, title }) => {
              const sectionId = href.replace("/#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  href={href}
                  title={title}
                  key={id}
                  onClick={(e) => handleNavClick(e, href)}
                  className={clsx(
                    "relative py-1 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full",
                    {
                      "after:w-full font-semibold": isActive,
                    }
                  )}
                >
                  {label}
                </a>
              );
            })}
          </div>
          <div className="hidden md:inline-block">
            <Link
              href={button.href}
              variant={button.variant}
              className="py-3 px-4.5 xl:py-2.5 xl:px-10.5 rounded-lg md:!text-base/6"
              title={button.label}
              ariaLabel={button.label}
              label={button.label}
            />
          </div>
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="relative flex h-5 w-6 flex-col justify-between md:hidden"
          >
            <span
              className={clsx(
                "block h-0.5 w-full rounded-full bg-black transition-all duration-300 origin-center",
                { "translate-y-[8.5px] rotate-45": isOpen }
              )}
            />
            <span
              className={clsx(
                "ml-1.5 block h-0.5 w-[calc(100%-6px)] rounded-full bg-black transition-all duration-300",
                { "opacity-0": isOpen }
              )}
            />
            <span
              className={clsx(
                "block h-0.5 rounded-full bg-black transition-all duration-300 origin-center",
                {
                  "-translate-y-[9px] -rotate-45 w-full": isOpen,
                  "ml-3.5 w-[calc(100%-14px)]": !isOpen,
                }
              )}
            />
          </button>
        </section>
      </Container>
      {isMobile && (
        <div
          className={clsx(
            "fixed top-18.5 inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-lg font-medium transform transition-transform duration-500",
            { "translate-x-0": isOpen, "translate-x-full": !isOpen }
          )}
        >
          {links.map(({ href, id, label, title }) => (
            <Link
              href={href}
              title={title}
              rel="nofollow"
              key={id}
              onClick={(e) => handleNavClick(e, href)}
              label={label}
            />
          ))}
          <Link
            href={button.href}
            variant={button.variant}
            className="py-3 px-6 rounded-lg !w-fit"
            title={button.label}
            onClick={() => setIsOpen(false)}
            label={button.label}
          />
        </div>
      )}
    </nav>
  );
};
