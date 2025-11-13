import { Button } from "@/types";

interface FooterCard {
  button: Button;
  description: string;
  id: number;
  title: string;
}

interface FooterContactDetail {
  ariaLabel: string;
  display: string;
  icon: string;
  id: number;
  link: string;
  linkTitle: string;
  type: string;
}

interface FooterContact {
  footerContactDetails: FooterContactDetail[];
  id: number;
}

interface FooterMenuLink {
  href: string;
  id: number;
  label: string;
  linkTitle: string | null;
}

interface FooterMenuItem {
  id: number;
  links: FooterMenuLink[];
  title: string;
}

interface FooterMenu {
  footerMenuItems: FooterMenuItem[];
  id: number;
}

interface SocialIconLink {
  href: string;
  id: number;
  label: string;
  linkTitle: string;
}

interface SocialsMedia {
  iconsLink: SocialIconLink[];
  id: number;
}

interface FooterLegal {
  id: number;
  socialsMedia: SocialsMedia;
  title: string;
}

export interface FooterProps {
  footerCard: FooterCard;
  footerContact: FooterContact;
  footerLegal: FooterLegal;
  footerMenu: FooterMenu;
}
