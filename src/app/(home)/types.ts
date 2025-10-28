import { FooterProps, HeaderProps } from "@/components";
import {
  BlogSectionProps,
  ContactSectionProps,
  HeroSectionProps,
  OurServicesAndFacilitiesSectionProps,
  ShippingServiceProps,
  TestimonialSectionProps,
  WhyChooseUsSectionProps,
} from "@/components";

export interface LayoutDataType {
  header: HeaderProps;
  footer: FooterProps;
}

export interface HomePageDataType {
  heroSection: HeroSectionProps;
  shippingService: ShippingServiceProps;
  whyChooseUsSection: WhyChooseUsSectionProps;
  ourServicesAndFacilitiesSection: OurServicesAndFacilitiesSectionProps;
  testimonialSection: TestimonialSectionProps;
  contactSection: ContactSectionProps;
   blogSection: BlogSectionProps;
}
