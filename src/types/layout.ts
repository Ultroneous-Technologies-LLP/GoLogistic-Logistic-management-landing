export type header = {
  links: { id: number; href: string; label: string; title: string }[];
  button: {
    href: string;
    variant: "contained" | "outlined";
    label: string;
    title: string;
  };
};

export type footer = {
  contact: {
    id: number;
    label: string;
    href: string;
    text: string;
    Icon: string;
    ariaLabel: string;
    title: string;
  }[];
  links: {
    id: number;
    title: string;
    links: { id: number; href: string; label: string }[];
  }[];
  footerLegal: {
    title: string;
    socialsMedia: {
      id: number;
      href: string;
      Icon: string;
      label: string;
    }[];
  };
};

export type layoutData = {
  header: header;
  footer: footer;
};
