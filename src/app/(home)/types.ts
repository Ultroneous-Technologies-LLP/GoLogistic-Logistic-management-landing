import { footerProps, HeaderProps } from "@/components";
import {
  BlogSectionProps,
  ContactSectionProps,
  HeroSectionProps,
  ourServicesAndFacilitiesSectionProps,
  ShippingServiceProps,
  TestimonialSectionProps,
  whyChooseUsSectionProps,
} from "@/components";

export interface LayoutDataType {
  header: HeaderProps;
  footer: footerProps;
}

export interface HomePageDataType {
  heroSection: HeroSectionProps;
  shippingService: ShippingServiceProps;
  whyChooseUsSection: whyChooseUsSectionProps;
  ourServicesAndFacilitiesSection: ourServicesAndFacilitiesSectionProps;
  testimonialSection: TestimonialSectionProps;
  contactSection: ContactSectionProps;
   blogSection: BlogSectionProps;
}
