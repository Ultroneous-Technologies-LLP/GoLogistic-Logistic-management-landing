interface BackgroundImage {
  alternativeText: string;
  url: string;
}

interface Button {
  ariaLabel: string;
  href: string;
  label: string;
  variant: "contained" | "outlined";
}

interface OurServicesAndFacilitiesItem {
  id: number;
  image: BackgroundImage;
  title: string;
}

export interface OurServicesAndFacilitiesSectionProps {
  backgroundImage: BackgroundImage;
  button: Button;
  longTitle: string;
  ourServicesAndFacilitiesItems: OurServicesAndFacilitiesItem[];
  title: string;
}
