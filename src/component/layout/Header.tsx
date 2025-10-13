"use client";

import Link from "next/link";
import { header } from "@/types/layout";
import { FC, useEffect, useState } from "react";
import { Logo } from "@/component/icon";
import { Button, Container } from "@/component/common";
import useIsMobile from "@/hooks/useIsMobile";

interface HeaderProps {
  data: header;
}

const Header: FC<HeaderProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white">
      <Container
        as="header"
        className="relative z-50 pt-8.5 pb-4 px-6 xl:px-17.5"
      >
        <section className="flex items-center justify-between w-full">
          <Link href="/#home">
            <Logo
              className="fill-black max-w-28 max-h-6 md:max-w-33 md:max-h-7.5 xl:max-w-39 xl:max-h-8.5 w-full"
              width={156}
              height={34}
            />
          </Link>
          <div className="items-center gap-5 xl:gap-10 text-sm xl:text-base hidden md:flex">
            {data.links.map((value) => (
              <Link
                href={value.href}
                title={value.title}
                rel="nofollow"
                key={value.id}
              >
                <span>{value.label}</span>
              </Link>
            ))}
          </div>
          <div className="hidden md:inline-block">
            <Button
              as="link"
              href={data.button.href}
              variant={data.button.variant}
              className="py-3 px-4.5 xl:py-2.5 xl:px-10.5 rounded-lg md:!text-base/6"
              title={data.button.title}
            >
              {data.button.label}
            </Button>
          </div>
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="relative flex h-5 w-6 flex-col justify-between md:hidden"
          >
            <span
              className={`block h-0.5 w-full rounded-full bg-black transition-all duration-300 origin-center ${
                isOpen ? "translate-y-[8.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`ml-1.5 block h-0.5 w-[calc(100%-6px)] rounded-full bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 rounded-full bg-black transition-all duration-300 origin-center ${
                isOpen
                  ? "-translate-y-[9px] -rotate-45 w-full"
                  : "ml-3.5 w-[calc(100%-14px)]"
              }`}
            />
          </button>
        </section>
      </Container>
      {isMobile && (
        <div
          className={`fixed top-18.5 inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-lg font-medium transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {data.links.map((value) => (
            <Link
              href={value.href}
              title={value.title}
              rel="nofollow"
              key={value.id}
              onClick={() => setIsOpen(false)}
            >
              <span>{value.label}</span>
            </Link>
          ))}
          <Button
            as="link"
            href={data.button.href}
            variant={data.button.variant}
            className="py-3 px-6 rounded-lg !w-fit"
            title={data.button.title}
            onClick={() => setIsOpen(false)}
          >
            {data.button.label}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Header;
