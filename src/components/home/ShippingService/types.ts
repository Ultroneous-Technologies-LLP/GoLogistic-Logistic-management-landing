interface ShippingServiceImage {
  alt: string;
  desktopSrc: string;
  id: number;
  mobileSrc: string;
  tabletSrc: string;
}

export interface ShippingServiceProps {
  description: string;
  shippingServiceImage: ShippingServiceImage[];
  title: string;
}
