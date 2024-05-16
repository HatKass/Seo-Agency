import hero from "../assets/images/hero.png";
import { Logos } from "../constants";

const Hero = () => {
  return (
    <div className="lg:py-10 py-6 space-y-5 lg:space-y-0">
      <div className="flex lg:flex-row md:flex-row lg:items-start md:items-start items-center gap-y-7 flex-col justify-center px-4">
        <div className="flex flex-col lg:gap-y-[30px] gap-y-[13px] lg:max-w-[585px] h-max px-4">
          <span className="lg:text-base text-sm roboto text-white bg-[#FEBB94] rounded-md px-[15px] py-[5px] self-baseline">
            BEST SEO AGENCY
          </span>
          <h4 className="roboto text-xl text-center lg:text-left  md:text-left  lg:text-6xl  md:text-4xl font-bold">
            Unlock Your Website's Potential with
            <span className="roboto text-[#5375D9]">
              {" "}
              Expert SEO Strategies
            </span>
          </h4>
          <p className="lg:text-base text-sm roboto lg:max-w-[360px] lg:text-left md:text-left text-center  ">
            Don't miss out on the opportunity to work with a digital marketing
            agency that's committed to your success.
          </p>
          <button className="roboto md:self-baseline lg:self-baseline self-center  text-white bg-[#5375D9] rounded-3xl font-bold lg:px-6 lg:py-[15px] py-2 px-4">
            GET STARTED
          </button>
        </div>
        <div className="">
          <img className="h-56 lg:h-full md:h-full" src={hero} alt="hero img" />
        </div>
      </div>
      <div className="space-y-[30px]">
        <p className="roboto text-center font-bold lg:text-[32px] text-lg">
          Trusted by popular brands
        </p>
        <div className="flex px-4 flex-wrap gap-y-3 justify-center items-center gap-x-20">
          {Logos.map((logo, index) => (
            <div key={index} className="lg:w-24 w-14">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
