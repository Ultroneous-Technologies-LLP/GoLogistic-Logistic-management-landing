"use client";

import clsx from "clsx";
import { FC, useEffect, useState } from "react";

import { BREAKPOINT_MD } from "@/constant";
import { Link, Container, Logo } from "@/components";
import { useIsMobile, useWindowResize } from "@/hooks";

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("/#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white">
      <Container as="header" className="relative z-50 px-6 pt-8.5 pb-4 xl:px-17.5">
        <section className="flex w-full items-center justify-between">
          <Link href="/#home" isPureLink={false}>
            <Logo
              className="max-h-6 w-full max-w-28 fill-black md:max-h-7.5 md:max-w-33 xl:max-h-8.5 xl:max-w-39"
              width={156}
              height={34}
            />
          </Link>
          <div className="hidden items-center gap-5 text-sm md:flex xl:gap-10 xl:text-base">
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
                    "relative py-1 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full",
                    {
                      "font-semibold after:w-full": isActive,
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
              className="rounded-lg px-4.5 py-3 md:!text-base/6 xl:px-10.5 xl:py-2.5"
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
                "block h-0.5 w-full origin-center rounded-full bg-black transition-all duration-300",
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
                "block h-0.5 origin-center rounded-full bg-black transition-all duration-300",
                {
                  "w-full -translate-y-[9px] -rotate-45": isOpen,
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
            "fixed inset-0 top-18.5 z-40 flex transform flex-col items-center justify-center gap-8 bg-white text-lg font-medium transition-transform duration-500",
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
            className="!w-fit rounded-lg px-6 py-3"
            title={button.label}
            onClick={() => setIsOpen(false)}
            label={button.label}
          />
        </div>
      )}
    </nav>
  );
};
