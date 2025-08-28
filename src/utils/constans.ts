import {
  CustomerCentric,
  GlobalReach,
  Innovation,
  Reliability,
} from "@/component/icon";

const footerLinks = [
  {
    title: "Our company",
    links: [
      {
        href: "/",
        label: "Integration",
      },
      { href: "/", label: "Shipping Track" },
      {
        href: "/",
        label: "International Package",
      },
      { href: "/", label: "Export Product" },
    ],
  },
  {
    title: "By Industry",
    links: [
      { href: "/", label: "B2B Saas" },
      { href: "/", label: "Marketing agencies" },
      { href: "/", label: "Mobile app" },
      { href: "/", label: "E-commerce" },
    ],
  },
  {
    title: "Resource",
    links: [
      {
        href: "/",
        label: "Guide",
      },
      {
        href: "/",
        label: "News",
      },
      {
        href: "/",
        label: "Customer stories",
      },
      {
        href: "/",
        label: "Help center",
      },
      {
        href: "/",
        label: "Contact Us",
      },
    ],
  },
];

const whyChooseUsfeaturesData = [
  {
    Icon: Reliability,
    title: "Reliability",
    description:
      "Our dedication to safe transportation and deliveries on schedule.",
  },
  {
    Icon: GlobalReach,
    title: "Global Reach",
    description: "Use our global network to broaden your business horizons.",
  },
  {
    Icon: CustomerCentric,
    title: "Customer-Centric",
    description: "Dedicated team support to address challenges.",
  },
  {
    Icon: Innovation,
    title: "Innovation",
    description: "Devoted assistance guaranteeing your contentment.",
  },
];

export { footerLinks, whyChooseUsfeaturesData };
