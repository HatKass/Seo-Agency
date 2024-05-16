import { Footer_Logos } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-[#EAF0FF] space-y-[60px] lg:p-20 p-4">
      <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-y-8 justify-center gap-x-16">
        <p className="poppins lg:text-8xl md:text-6xl sm:text-4xl text-3xl text-center font-bold  ">
          Let’s Talk
        </p>
        <p className="lg:max-w-[280px] lg:text-sm text-[10px] text-center lg:text-left">
          Justo, a quisque in accumsan dignissim volutpat quis. Sit pellentesque
          faucibus arcu lacinia egestas augue. Sit volutpat vel dui ultricies
          massa.
        </p>
        <div className="flex flex-col text-sm gap-y-2 text-center lg:text-left">
          <span className="font-bold">hello@yourcompany.com</span>
          <span>15Th Street Avenue, New York, USA</span>
          <span>011-554-8798-6556</span>
          <div className="flex lg:justify-between justify-center gap-x-4 lg:gap-x-0 mt-2">
            {Footer_Logos.map((logo, index) => (
              <img key={index} className="h-4" src={logo.img} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end text-xs border-t-2 pt-5 lg:text-left text-center">
        <span>© 2024 SEO Agency. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
