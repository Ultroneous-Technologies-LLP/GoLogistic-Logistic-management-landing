"use client";

import Link from "next/link";
import Container from "../common/Container";
import Logo from "../icon/Logo";
import Button from "../common/Button";

const Header = () => {
  return (
    <nav className="w-full pt-8.5 pb-4 px-17.5 fixed top-0 left-0 z-50 bg-white">
      <Container as="header">
        <section className="flex items-center justify-between w-full">
          <Logo className="fill-black" />
          <div className="flex items-center gap-10 te">
            <Link href="#" title="Explore our Services" rel="nofollow">
              <span>Services</span>
            </Link>
            <Link href="#" title="Learn more about our Company" rel="nofollow">
              <span>Company</span>
            </Link>
            <Link href="#" title="Discover our Features" rel="nofollow">
              <span>Feature</span>
            </Link>
            <Link href="#" title="Read our Latest News" rel="nofollow">
              <span>News</span>
            </Link>
            <Link href="#" title="Get in touch with us" rel="nofollow">
              <span>Contact</span>
            </Link>
          </div>
          <div className="inline-block">
            <Button
              as="link"
              href="/"
              variant="contained"
              className="max-w-46 w-full py-2.5 px-10.5 rounded-lg"
              title="Get in touch with us"
            >
              Get a Quote
            </Button>
          </div>
        </section>
      </Container>
    </nav>
  );
};

export default Header;
