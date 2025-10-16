export interface Description {
  id: number;
  description: string;
}

type Icons = "Reliability" | "GlobalReach" | "CustomerCentric" | "Innovation";

export interface WhyChooseUsFeaturesData {
  id: number;
  icon: Icons;
  title: string;
  description: string;
}

export interface whyChooseUsSectionProps {
  title: string;
  longTitle: string;
  descriptions: Description[];
  whyChooseUsFeaturesData: WhyChooseUsFeaturesData[];
}
