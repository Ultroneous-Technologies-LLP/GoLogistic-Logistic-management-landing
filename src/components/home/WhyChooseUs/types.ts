import { ICONS } from "./constant";

type Icons = "Reliability" | "GlobalReach" | "CustomerCentric" | "Innovation";

export type IconKey = keyof typeof ICONS;

interface Description {
  id: number;
  description: string;
}

interface WhyChooseUsFeaturesData {
  id: number;
  icon: Icons;
  title: string;
  description: string;
}

export interface WhyChooseUsSectionProps {
  title: string;
  longTitle: string;
  descriptions: Description[];
  whyChooseUsFeaturesData: WhyChooseUsFeaturesData[];
}
