"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FC, ReactElement, useLayoutEffect, useRef } from "react";

import { Container, Title, Mail, Phone } from "@/components";

import ContactForm from "./ContactForm";
import { IconTitleEnum } from "./enum";
import { ContactSectionProps, IconTitle } from "./types";

gsap.registerPlugin(ScrollTrigger);

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
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { autoAlpha: 0, y: 50 });
      gsap.set(leftRef.current, { autoAlpha: 0, x: -50 });
      gsap.set(rightRef.current, { autoAlpha: 0, x: 50 });
      gsap.set(bottomRef.current, { autoAlpha: 0, x: -50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          once: true,
        },
      });

      tl.to(sectionRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          leftRef.current,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          rightRef.current,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          bottomRef.current,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, sectionRef);

    return (): void => ctx.revert();
  }, []);

  return (
    <Container
      backgroundClassName="bg-[#f5f5f5] md:mx-6 xl:mx-0 scroll-mt-20 overflow-x-hidden opacity-0"
      className="grid grid-cols-1 gap-x-24 px-4 py-12.5 xl:grid-cols-2 xl:grid-rows-2 xl:px-17.5 xl:py-29"
      id="contact"
      ref={sectionRef}
    >
      <div
        className="row-start-1 row-end-2 h-fit w-full xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2 xl:max-w-132"
        ref={leftRef}
      >
        <Title title={title} />
        <h3 className="pb-2.5 text-xl/7.5 font-bold text-black xl:pb-3.5 xl:text-4xl/12.5">
          {longTitle}
        </h3>
        <p className="xl:text-22/10 text-spanish-gray text-sm/4.5">
          <span>{description}</span>
        </p>
      </div>
      <div
        className="row-start-2 row-end-3 pt-8 xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-3 xl:pt-6.5"
        ref={rightRef}
      >
        <ContactForm formButton={formButton} />
      </div>
      <div
        className="row-start-3 row-end-4 flex gap-12 pt-8 xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-3 xl:flex-col xl:gap-0 xl:pt-6.5"
        ref={bottomRef}
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
