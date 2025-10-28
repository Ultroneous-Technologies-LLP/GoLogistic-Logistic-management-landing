import { useEffect, useState } from "react";

interface LinkItem {
  href: string;
}

export const useActiveSection = (links: LinkItem[], offset: number = 150) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const isClientReady = typeof window !== "undefined" && links?.length > 0;
    if (!isClientReady) return;

    const handleScroll = () => {
      let currentSection = "";
      const scrollY = window.scrollY + offset;

      for (const { href } of links) {
        const id = href.replace("/#", "");
        const section = document.getElementById(id);
        const isInView =
          section &&
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links, offset]);

  return activeSection;
};
