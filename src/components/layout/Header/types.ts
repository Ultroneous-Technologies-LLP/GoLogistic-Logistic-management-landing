interface Link {
  id: number;
  href: string;
  label: string;
  title: string;
}

interface Button {
  href: string;
  variant: "contained" | "outlined"
  label: string;
  title: string;
}

export type HeaderProps = {
  links: Link[];
  button: Button;
};
