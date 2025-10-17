import { Button, Image } from "@/types";

interface Services {
  id: string;
  title: string;
  alt: string;
  src: string;
}

export interface OurServicesAndFacilitiesSectionProps {
  title: string;
  longTitle: string;
  button: Button;
  services: Services[];
  backgroundImage: Image;
}
