interface ShippingServiceImage {
  id: number;
  alt: string;
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
}

export interface ShippingServiceProps {
  title: string;
  description: string;
  shippingServiceImage: ShippingServiceImage[];
}
