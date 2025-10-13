import { useState, useEffect } from "react";

import { BREAKPOINT_MD } from "@/constant";

export const useIsMobile = (breakpoint: number = BREAKPOINT_MD): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = (): void => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, [breakpoint]);

  return isMobile;
};
