interface Contact {
  id: number;
  href: string;
  label: string;
  title: string;
  text: string;
  ariaLabel: string;
  Icon: string;
}

interface Links {
  id: number;
  title: string;
  links: { id: number; href: string; label: string }[];
}

interface SocialsMedia {
  id: number;
  href: string;
  Icon: string;
  label: string;
}

interface FooterLegal {
  title: string;
  socialsMedia: SocialsMedia[];
}

export interface footerProps  {
  contact: Contact[];
  links: Links[];
  footerLegal: FooterLegal;
};
