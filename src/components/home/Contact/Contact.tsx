import { FC, ReactElement } from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";
import { Mail, Phone } from "../../icons";
import { Container, Title } from "../../common";
import { ContactSectionProps, IconTitle } from "./types";

const getIcon = (title: IconTitle): ReactElement | null => {
  switch (title) {
    case "Email":
      return <Mail className="text-black" aria-label="mail" />;
    case "Call Us":
      return <Phone className="text-black" aria-label="phone" />;
    default:
      return null;
  }
};

export const Contact: FC<ContactSectionProps> = ({
  contactDetails,
  description,
  formButton,
  longTitle,
  title,
}) => (
  <Container
    id="contact"
    backgroundClassName="bg-[#f5f5f5] md:mx-6 xl:mx-0 scroll-mt-20"
    className="py-12.5 px-4 xl:px-17.5 xl:py-29 grid grid-cols-1 xl:grid-rows-2 xl:grid-cols-2 gap-x-24"
  >
    <div className="w-full h-fit xl:max-w-132 xl:col-start-1 xl:col-end-2 row-start-1 row-end-2 xl:row-start-1 xl:row-end-2">
      <Title title={title} />
      <h3 className="pb-2.5 xl:pb-3.5 text-xl/7.5 xl:text-4xl/12.5 font-bold text-black">
        <span>{longTitle}</span>
      </h3>
      <p className="text-sm/4.5 xl:text-22/10 text-spanish-gray">
        <span>{description}</span>
      </p>
    </div>
    <div className="xl:col-start-2 xl:col-end-3 row-start-2 row-end-3 xl:row-start-1 xl:row-end-3 pt-8 xl:pt-6.5">
      <ContactForm formButton={formButton} />
    </div>
    <div className="xl:col-start-1 xl:col-end-2 row-start-3 row-end-4 xl:row-start-2 xl:row-end-3 pt-8 xl:pt-6.5 flex xl:flex-col gap-12 xl:gap-0">
      {contactDetails.map(({ id, title, link, ariaLabel }) => (
        <address
          key={id}
          className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-3.5 not-italic xl:pb-7.5 last:pb-0 md:w-1/2 xl:w-full"
        >
          <div className="size-14 xl:size-16 bg-[#DEDEDE] rounded-full flex justify-center items-center">
            {title === "Email" || title === "Call Us" ? getIcon(title) : null}
          </div>
          <div className="font-medium text-base/snug text-black">
            <p>
              <span>{title}</span>
            </p>
            <Link
              href={link}
              rel="nofollow"
              aria-label={ariaLabel}
              title={ariaLabel}
            >
              {link.replace(/^mailto:|^tel:/, "")}
            </Link>
          </div>
        </address>
      ))}
    </div>
  </Container>
);
