import Container from "@/component/common/Container";
import { Mail, Phone } from "@/component/icon";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { FC } from "react";
import { contactSection } from "@/utils/type";

interface ContactProps {
  data: contactSection;
}

const getIcon = (title: string) => {
  switch (title) {
    case "Email":
      return <Mail className="text-black" aria-label="mail" />;
    case "Call Us":
      return <Phone className="text-black" aria-label="phone" />;
    default:
      return null;
  }
};

const Contact: FC<ContactProps> = ({ data }) => {
  return (
    <Container
      backgroundClassName="bg-[#f5f5f5]"
      className="pl-17.5 pr-22.5 py-29 grid grid-rows-2 grid-cols-2 gap-x-24"
    >
      <div className="max-w-132 col-start-1 col-end-2 row-start-1 row-end-2">
        <h2 className="inline-block py-1 pl-1 pr-2 mb-5 text-sm font-medium text-black border-l-4 border-black bg-[#E8E8E880]">
          <span>{data.title}</span>
        </h2>
        <h3 className="pb-3.5 text-4xl/12.5 font-bold text-black">
          <span>{data.longTitle}</span>
        </h3>
        <p className="text-[22px]/10 text-[#949494]">
          <span>{data.description}</span>
        </p>
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 pt-6.5">
        {data.contactDetails.map(({ id, title, link, ariaLabel }) => (
          <address
            key={id}
            className="flex items-center gap-3.5 not-italic pb-7.5 last:pb-0"
          >
            <div className="size-16 bg-[#DEDEDE] rounded-full flex justify-center items-center">
              {getIcon(title)}
            </div>
            <div className="font-bold text-base/snug text-black">
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
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 pt-6.5">
        <ContactForm formButton={data.formButton} />
      </div>
    </Container>
  );
};

export default Contact;
