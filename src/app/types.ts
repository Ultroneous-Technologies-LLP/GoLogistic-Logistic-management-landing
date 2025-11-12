import {
  // BlogSectionProps,
  // ContactSectionProps,
  FooterProps,
  HeaderProps,
  HeroSectionProps,
  WhyChooseUsSectionProps,
  TestimonialSectionProps,
  // OurServicesAndFacilitiesSectionProps,
  // ShippingServiceProps,
} from "@/components";

export interface LayoutDataType {
  footer: FooterProps;
  header: HeaderProps;
}

export interface HomePageDataType {
  // blogSection: BlogSectionProps;
  // contactUs: ContactSectionProps;
  hero: HeroSectionProps;
  testimonials: TestimonialSectionProps;
  whyChooseUs: WhyChooseUsSectionProps;
  // ourServicesAndFacilitiesSection: OurServicesAndFacilitiesSectionProps;
  // shippingService: ShippingServiceProps;
}
