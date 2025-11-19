"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, ReactElement, useRef } from "react";

import { Container, Title, Mail, Phone } from "@/components";
import { useInViewObserver } from "@/hooks";

import ContactForm from "./ContactForm";
import { IconTitleEnum } from "./enum";
import { ContactSectionProps, IconTitle } from "./types";

const getIcon = (title: IconTitle): ReactElement | null => {
  switch (title) {
    case IconTitleEnum.EMAIL:
      return <Mail aria-label="mail" className="text-black" />;
    case IconTitleEnum.CALL_US:
      return <Phone aria-label="phone" className="text-black" />;
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
  const { getAnimation } = useInViewObserver({ singleAnimationRef: sectionRef });

  return (
    <Container
      backgroundClassName={clsx(
        "bg-[#f5f5f5] md:mx-6 xl:mx-0 scroll-mt-20 overflow-x-hidden transition-transform",
        getAnimation({
          className: "xl:animate-none",
        })
      )}
      className="grid grid-cols-1 gap-x-24 px-4 py-12.5 xl:grid-cols-2 xl:grid-rows-2 xl:px-17.5 xl:py-29"
      id="contact"
      ref={sectionRef}
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
        {contactDetails.map(({ id, title: iconTitle, link, ariaLabel }) => (
          <address
            className="flex flex-col gap-4 not-italic last:pb-0 md:w-1/2 xl:w-full xl:flex-row xl:items-center xl:gap-3.5 xl:pb-7.5"
            key={id}
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-[#DEDEDE] xl:size-16">
              {getIcon(iconTitle)}
            </div>
            <div className="text-base/snug font-medium text-black">
              <p>
                <span>{iconTitle}</span>
              </p>
              <Link aria-label={ariaLabel} href={link} rel="nofollow" title={ariaLabel}>
                {link.replace(/^mailto:|^tel:/, "")}
              </Link>
            </div>
          </address>
        ))}
      </div>
    </Container>
  );
};
