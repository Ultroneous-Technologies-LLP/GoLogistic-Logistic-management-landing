import Link from "next/link";
import Container from "../common/Container";
import clsx from "clsx";
import { Facebook, LinkedIn, Logo, Mail, Phone, Twitter } from "../icon";
import { footerLinks } from "@/utils/constans";

const Footer = () => {
  return (
    <Container
      backgroundClassName="bg-black"
      className="pt-48.5 pb-5 pl-17.5"
      as="footer"
    >
      <div className="flex justify-between w-full pb-12 border-b border-white">
        <div className="max-w-60 w-full">
          <div className="pb-27 pt-11">
            <Logo className="text-white" />
          </div>
          <div className="pb-8">
            <address className="flex items-center gap-8 not-italic">
              <Mail className="text-white" aria-label="mail" />
              <div>
                <p className="text-white">
                  <span>Email</span>
                </p>
                <Link
                  href="mailto:contact@logistics.com"
                  className="text-white"
                  rel="nofollow"
                  aria-label="Send email to contact@logistics.com"
                  title="Send email to contact@logistics.com"
                >
                  contact@logistics.com
                </Link>
              </div>
            </address>
          </div>
          <div className="pb-8">
            <address className="flex items-center gap-8 not-italic">
              <Phone className="text-white" aria-label="phone" />
              <div>
                <p className="text-white">
                  <span>Call Us</span>
                </p>
                <Link
                  href="tel:(00)112365489"
                  className="text-white"
                  rel="nofollow"
                  aria-label="Call us at (00) 112 365 489"
                  title="Call us at (00) 112 365 489"
                >
                  (00) 112 365 489
                </Link>
              </div>
            </address>
          </div>
        </div>

        <div className="max-w-237 w-full flex">
          {footerLinks.map((menu, idx) => (
            <div key={idx}>
              <p
                className={clsx(
                  "bg-white/10 text-white text-2xl font-semibold py-11 mb-7",
                  idx === 0 ? "pl-42.5" : "pr-29",
                  idx === 0 ? "pr-29" : ""
                )}
              >
                {menu.title}
              </p>
              <ul className="space-y-4 text-white">
                {menu.links.map((link, i) => (
                  <li
                    key={i}
                    className={clsx(
                      menu.title === "Our company" ? "pl-42.5" : ""
                    )}
                  >
                    <Link
                      href={link.href}
                      className="font-semibold"
                      title={link.label} // 🔹 Added title
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3.5 pr-17.5 flex justify-between">
        <p className="text-white leading-[2.5] inline-block">
          <span lang="en">Copyright © GoLogistc, Inc. All Rights Reserved</span>
        </p>
        <div className="flex items-end gap-6.5">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to LinkedIn"
            title="Go to LinkedIn"
          >
            <LinkedIn className="text-white" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Twitter"
            title="Go to Twitter"
          >
            <Twitter className="text-white" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Facebook"
            title="Go to Facebook"
          >
            <Facebook className="text-white" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
