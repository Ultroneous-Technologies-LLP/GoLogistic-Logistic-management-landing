import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
  return (
    <Container className="relative" backgroundClassName="pt-20">
      <Image
        src="/assets/home/hero-background.avif"
        alt="Abstract logistics background"
        width={1440}
        height={470}
        className="absolute top-0 left-0 -z-20"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1440px"
        title="Abstract logistics background"
      />
      <div className="flex px-17.5 gap-11.5 pt-37.5 pb-31.5">
        <h1 className="text-5xl leading-[65px] font-semibold max-w-[574px] w-full">
          <span>Elevate your business with reliable shipping services</span>
        </h1>
        <div className="w-full">
          <p className="text-lg/10 pb-10.5">
            <span>
              Drive robust business development by expanding top-tier transport
              services to reach diverse market sectors
            </span>
          </p>
          <div className="flex gap-6 w-full">
            <div>
              <Button
                as="link"
                variant="contained"
                href="#"
                className="max-w-32 py-1.5 px-16.5 rounded-xl"
                aria-label="Get started with shipping services"
              >
                Start Now
              </Button>
            </div>
            <div>
              <Button
                as="link"
                variant="outlined"
                href="#"
                className="max-w-32 py-1.5 px-16.5 rounded-xl"
                aria-label="Learn more about logistics services"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-17.5">
        <div className="w-full -mb-32">
          <h2 className="text-[32px] font-semibold mx-auto pb-4 text-center max-w-175 bg-white rounded-b-4xl">
            <span>Shiping Service</span>
          </h2>
          <p className="text-lg/7 max-w-130 text-center mx-auto bg-white text-[#7b7b7b] rounded-b-[40px] pb-4 px-4 -mt-2">
            <span>
              Effective warehousing options for a smooth supply chain and
              seamless operations.
            </span>
          </p>
        </div>
        <Image
          src="/assets/home/industrial-container-yard.avif"
          alt="Industrial container yard with shipping containers"
          title="Industrial container yard with shipping containers"
          width={1300}
          height={728}
          className="relative rounded-[20px] mx-auto -z-20"
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1300px"
        />
      </div>
    </Container>
  );
};

export default Hero;
