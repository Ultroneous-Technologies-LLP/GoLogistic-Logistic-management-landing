import { useState, useEffect } from "react";

/** Hook to detect if the screen width is below a given breakpoint (default: 768px) */
const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = (): void => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreen(); // run initially
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
