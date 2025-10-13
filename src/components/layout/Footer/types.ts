interface Contact {
  id: number;
  href: string;
  label: string;
  title: string;
  text: string;
  ariaLabel: string;
  Icon: string;
}

interface Link {
  id: number;
  href: string;
  label: string;
}

interface MenuLinks {
  id: number;
  title: string;
  links: Link[];
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

export interface FooterProps {
  contact: Contact[];
  links: MenuLinks[];
  footerLegal: FooterLegal;
}
