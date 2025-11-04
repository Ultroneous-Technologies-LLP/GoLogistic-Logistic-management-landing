import { Montserrat } from "next/font/google";

export const montserrat400 = Montserrat({
  variable: "--font-montserrat-400",
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

export const montserrat600 = Montserrat({
  variable: "--font-montserrat-600",
  subsets: ["latin"],
  weight: ["600"],
  preload: true,
});

export const montserratRest = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700"],
  preload: false,
});
