import { footerProps, HeaderProps } from "@/components/layout";
import {
  ContactSectionProps,
  HeroSectionProps,
  ourServicesAndFacilitiesSectionProps,
  ShippingServiceProps,
  TestimonialSectionProps,
  whyChooseUsSectionProps,
} from "@/components/home";
import { BlogSectionProps } from "@/components/home/OurBlog";

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
