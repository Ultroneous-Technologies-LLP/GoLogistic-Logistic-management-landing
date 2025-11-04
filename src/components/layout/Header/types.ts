import { Button } from "@/types";

interface Links {
  id: number;
  href: string;
  label: string;
  title: string;
}

export type HeaderProps = {
  links: Links[];
  button: Button;
};
