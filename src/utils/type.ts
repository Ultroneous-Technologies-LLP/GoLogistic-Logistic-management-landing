export type heroSection = {
  id: number;
  heading: string;
  description: string;
  heroButtons: {
    id: number;
    label: string;
    href: string;
    variant: "contained" | "outlined";
    ariaLabel: string;
  }[];
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type shipingService = {
  id: number;
  title: string;
  description: string;
  shipingServiceImage: {
    src: string;
    alt: string;
  };
};

export type whyChooseUsSection = {
  id: number;
  title: string;
  longTitle: string;
  description: {
    id: number;
    description: string;
  }[];
  whyChooseUsfeaturesData: {
    id: number;
    icon: "Reliability" | "GlobalReach" | "CustomerCentric" | "Innovation";
    title: string;
    description: string;
  }[];
};

export type ourServicesAndFacilitesSection = {
  title: string;
  longTitle: string;
  transportLogistics: {
    title: string;
    button: {
      variant: "contained" | "outlined";
      label: string;
      ariaLabel: string;
    };
    image: {
      alt: string;
      src: string;
    };
  };
  cargoTerminal: {
    title: string;
  };
  services: {
    id: string;
    title: string;
  }[];
  backgroundImage: {
    alt: string;
    src: string;
  };
};

export type testimonialSection = {
  title: string;
  longTitle: string;
  backgroundImage: {
    alt: string;
    src: string;
  };
  sliderData: {
    id: number;
    quote: string;
    author: string;
    subText: string;
  }[];
};

export type contactSection = {
  id: number;
  title: string;
  longTitle: string;
  description: string;
  contactDetails: {
    id: number;
    title: string;
    link: string;
    ariaLabel: string;
  }[];
  formButton: {
    variant: "contained" | "outlined";
    label: string;
    ariaLabel: string;
  };
};
export type blogSection = {
  title: string;
  longTitle: string;
  blogData: {
    id: number;
    src: string;
    alt: string;
    date: string;
    title: string;
    description: string;
  }[];
  blogCard: {
    src: string;
    alt: string;
    title: string;
    description: string;
    button: {
      variant: "contained" | "outlined";
      label: string;
      ariaLabel: string;
    };
  };
  backgroundImage: {
    src: string;
    alt: string;
  };
};

export type HomePageData = {
  heroSection: heroSection;

  shipingService: shipingService;

  whyChooseUsSection: whyChooseUsSection;

  ourServicesAndFacilitesSection: ourServicesAndFacilitesSection;

  testimonialSection: testimonialSection;

  contactSection: contactSection;

  blogSection: blogSection;
};
