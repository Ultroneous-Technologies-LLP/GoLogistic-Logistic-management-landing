export interface ImageFormat {
  alternativeText: string;
  id: number;
  url: string;
}

export interface ImageSet {
  desktop: ImageFormat;
  id: number;
  mobile: ImageFormat[];
  tablet: ImageFormat[];
}

export interface ShippingServiceImageGroup {
  id: number;
  imagesss: ImageSet[];
}

export interface ShippingServiceProps {
  description: string;
  shippingServiceImage: ShippingServiceImageGroup[];
  title: string;
}
