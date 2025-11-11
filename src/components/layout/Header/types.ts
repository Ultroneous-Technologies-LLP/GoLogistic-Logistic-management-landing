import { Button } from "@/types";

interface Link {
  href: string;
  id: number;
  label: string;
  title: string;
}

export interface HeaderProps {
  button: Button;
  links: Link[];
}
