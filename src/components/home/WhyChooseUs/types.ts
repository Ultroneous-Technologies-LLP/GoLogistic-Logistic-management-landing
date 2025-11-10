import { ComponentType, SVGProps } from "react";

// Keys of your ICONS_ARRAY
export type Icons = "Reliability" | "Innovation" | "GlobalReach" | "CustomerCentric";

// Single key type if needed
export type IconKey = Icons;

export interface Description {
  description: string;
  id: number;
}

export interface WhyChooseUsFeaturesData {
  description: string;
  icon: Icons;
  id: number;
  title: string;
}

export interface IconItem {
  component: ComponentType<SVGProps<SVGSVGElement>>;
  key: Icons;
}

export interface WhyChooseUsSectionProps {
  descriptions: Description[];
  longTitle: string;
  title: string;
  whyChooseUsFeaturesData: WhyChooseUsFeaturesData[];
}
