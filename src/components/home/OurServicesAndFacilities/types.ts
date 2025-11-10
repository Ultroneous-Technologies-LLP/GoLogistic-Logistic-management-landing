import { Button, Image } from "@/types";

interface Services {
  alt: string;
  id: string;
  src: string;
  title: string;
}

export interface OurServicesAndFacilitiesSectionProps {
  backgroundImage: Image;
  button: Button;
  longTitle: string;
  services: Services[];
  title: string;
}
