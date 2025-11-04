"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, ReactElement, useRef } from "react";

import { useInView } from "@/hooks";
import { Container, Title, Mail, Phone } from "@/components";

import ContactForm from "./ContactForm";
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
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { getAnimation } = useInView(sectionRef);

  return (
    <Container
      ref={sectionRef}
      id="contact"
      backgroundClassName={clsx(
        "bg-[#f5f5f5] md:mx-6 xl:mx-0 scroll-mt-20 overflow-x-hidden transition-transform",
        getAnimation({
          className: "xl:animate-none",
        })
      )}
      className="grid grid-cols-1 gap-x-24 px-4 py-12.5 xl:grid-cols-2 xl:grid-rows-2 xl:px-17.5 xl:py-29"
    >
      <div
        className={clsx(
          "row-start-1 row-end-2 h-fit w-full transition-transform xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2 xl:max-w-132",
          getAnimation({
            className: "xl:animate-slide-in-left",
          })
        )}
      >
        <Title title={title} />
        <h3 className="pb-2.5 text-xl/7.5 font-bold text-black xl:pb-3.5 xl:text-4xl/12.5">
          <span>{longTitle}</span>
        </h3>
        <p className="xl:text-22/10 text-spanish-gray text-sm/4.5">
          <span>{description}</span>
        </p>
      </div>
      <div
        className={clsx(
          "row-start-2 row-end-3 pt-8 transition-transform xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-3 xl:pt-6.5",
          getAnimation({
            className: "xl:animate-slide-in-right",
          })
        )}
      >
        <ContactForm formButton={formButton} />
      </div>
      <div
        className={clsx(
          "row-start-3 row-end-4 flex gap-12 pt-8 transition-transform xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 xl:flex-col xl:gap-0 xl:pt-6.5",
          getAnimation({
            className: "xl:animate-slide-in-left",
          })
        )}
      >
        {contactDetails.map(({ id, title, link, ariaLabel }) => (
          <address
            key={id}
            className="flex flex-col gap-4 not-italic last:pb-0 md:w-1/2 xl:w-full xl:flex-row xl:items-center xl:gap-3.5 xl:pb-7.5"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-[#DEDEDE] xl:size-16">
              {title === "Email" || title === "Call Us" ? getIcon(title) : null}
            </div>
            <div className="text-base/snug font-medium text-black">
              <p>
                <span>{title}</span>
              </p>
              <Link href={link} rel="nofollow" aria-label={ariaLabel} title={ariaLabel}>
                {link.replace(/^mailto:|^tel:/, "")}
              </Link>
            </div>
          </address>
        ))}
      </div>
    </Container>
  );
};
