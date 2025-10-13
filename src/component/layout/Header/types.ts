interface Links {
  id: number;
  href: string;
  label: string;
  title: string;
}

interface Button {
  href: string;
  variant: string;
  label: string;
  title: string;
}

export type HeaderProps = {
  links: Links[];
  button: Button;
};
