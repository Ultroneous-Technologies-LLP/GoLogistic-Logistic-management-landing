import {
  BlogSectionProps,
  ContactSectionProps,
  FooterProps,
  HeaderProps,
  HeroSectionProps,
  OurServicesAndFacilitiesSectionProps,
  ShippingServiceProps,
  TestimonialSectionProps,
  WhyChooseUsSectionProps,
} from "@/components";

export interface LayoutDataType {
  footer: FooterProps;
  header: HeaderProps;
}

export interface RootLayoutStrapiData {
  data: LayoutDataType;
}

export interface HomePageDataType {
  blogSection: BlogSectionProps;
  contactSection: ContactSectionProps;
  heroSection: HeroSectionProps;
  ourServicesAndFacilitiesSection: OurServicesAndFacilitiesSectionProps;
  shippingService: ShippingServiceProps;
  testimonialSection: TestimonialSectionProps;
  whyChooseUsSection: WhyChooseUsSectionProps;
}
