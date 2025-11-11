import { useEffect, useState } from "react";

interface LinkItem {
  href: string;
}

const DEFAULT_SCROLL_OFFSET = 150;
const ZERO = 0;

export const useActiveSection = (
  links: LinkItem[],
  offset: number = DEFAULT_SCROLL_OFFSET
): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect((): (() => void) => {
    const isClientReady = typeof window !== "undefined" && links.length > ZERO;

    if (!isClientReady) {
      return () => {};
    }

    const handleScroll = (): void => {
      let currentSection = "";
      const scrollY = window.scrollY + offset;

      for (const { href } of links) {
        const id = href.replace("/#", "");
        const section = document.getElementById(id);

        const isInView =
          section !== null &&
          section.offsetTop <= scrollY &&
          scrollY < section.offsetTop + section.offsetHeight;

        if (isInView) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links, offset]);

  return activeSection;
};
