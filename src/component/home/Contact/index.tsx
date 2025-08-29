import Container from "@/component/common/Container";
import { Mail, Phone } from "@/component/icon";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container
      backgroundClassName="bg-[#f5f5f5]"
      className="pl-17.5 pr-22.5 py-29 grid grid-rows-2 grid-cols-2 gap-x-24"
    >
      <div className="max-w-132 col-start-1 col-end-2 row-start-1 row-end-2">
        <h2 className="inline-block py-1 pl-1 pr-2 mb-5 text-sm font-medium text-black border-l-4 border-black bg-[#E8E8E880]">
          <span>Contact</span>
        </h2>
        <h3 className="pb-3.5 text-4xl/12.5 font-bold text-black">
          <span>Reach out to us</span>
        </h3>
        <p className="text-[22px]/10 text-[#949494]">
          <span>
            Discover agile logistics solutions that redefine strategies and
            enhance overall value.
          </span>
        </p>
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 pt-6.5">
        <address className="flex items-center gap-3.5 not-italic pb-7.5">
          <div className="size-16 bg-[#DEDEDE] rounded-full flex justify-center items-center">
            <Mail className="text-black" aria-label="mail" />
          </div>
          <div className="font-bold text-base/snug text-black">
            <p>
              <span>Email</span>
            </p>
            <Link
              href="mailto:contact@logistics.com"
              rel="nofollow"
              aria-label="Send email to contact@logistics.com"
              title="Send email to contact@logistics.com"
            >
              contact@logistics.com
            </Link>
          </div>
        </address>
        <address className="flex items-center gap-3.5 not-italic">
          <div className="size-16 bg-[#DEDEDE] rounded-full flex justify-center items-center">
            <Phone className="text-black" aria-label="mail" />
          </div>
          <div className="font-bold text-base/snug text-black">
            <p>
              <span>Call Us</span>
            </p>
            <Link
              href="tel:(00)112365489"
              rel="nofollow"
              aria-label="Call us at (00) 112 365 489"
              title="Call us at (00) 112 365 489"
            >
              (00) 112 365 489
            </Link>
          </div>
        </address>
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 pt-6.5">
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
