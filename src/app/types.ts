import {
  BlogSectionProps,
  ContactSectionProps,
  FooterProps,
  HeaderProps,
  HeroSectionProps,
  WhyChooseUsSectionProps,
  TestimonialSectionProps,
  OurServicesAndFacilitiesSectionProps,
  ShippingServiceProps,
} from "@/components";

export interface LayoutDataType {
  footer: FooterProps;
  header: HeaderProps;
}

export interface HomePageDataType {
  contactUs: ContactSectionProps;
  hero: HeroSectionProps;
  ourBlog: BlogSectionProps;
  ourServicesAndFacilities: OurServicesAndFacilitiesSectionProps;
  shippingService: ShippingServiceProps;
  testimonials: TestimonialSectionProps;
  whyChooseUs: WhyChooseUsSectionProps;
}
