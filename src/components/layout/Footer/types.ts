import { Button, Image } from "@/types";

import { FooterTextEnum } from "./enum";

export type FooterText =
  | FooterTextEnum.BY_INDUSTRY
  | FooterTextEnum.OUR_COMPANY
  | FooterTextEnum.RESOURCE;

interface BlogCard {
  alt: string;
  button: Button;
  description: string;
  src: string;
  title: string;
}

interface Contact {
  ariaLabel: string;
  href: string;
  icon: string;
  id: number;
  label: string;
  text: string;
  title: string;
}

interface LinkItem {
  href: string;
  id: number;
  label: string;
}

interface Links {
  id: number;
  links: LinkItem[];
  title: FooterTextEnum | string;
}

interface SocialsMedia {
  href: string;
  icon: string;
  id: number;
  label: string;
}

interface FooterLegal {
  socialsMedia: SocialsMedia[];
  title: string;
}

export interface FooterProps {
  backgroundImage: Image;
  blogCard: BlogCard;
  contact: Contact[];
  footerLegal: FooterLegal;
  links: Links[];
}
