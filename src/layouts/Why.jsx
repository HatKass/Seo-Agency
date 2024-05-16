import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";

const Why = () => {
  return (
    <section className="p-12">
      <h3 className="text-center lg:mb-14 lg:text-4xl md:text-3xl text-2xl font-bold text-[#FF6433]">
        Why Choose Us?
      </h3>
      <div className="lg:space-y-16 ">
        <div className="py-10 lg:py-0  grid lg:grid-cols-2 lg:w-[70%] lg:m-auto   place-items-center gap-y-12 grid-cols-1">
          <div className="space-y-5 lg:px-[50px] lg:max-w-[585px] md:max-w-[585px]">
            <h3 className="font-bold lg:text-2xl md:text-2xl text-lg text-center lg:text-left">
              Proven Track Record
            </h3>
            <p className="text-[#222222]  poppins lg:text-left text-center lg:text-base text-sm ">
              With years of experience and a portfolio of successful projects,
              we have the expertise to deliver results-driven solutions.
            </p>
          </div>
          <img className="" src={frame1} alt="frame" />
        </div>
        <div className="py-10 lg:py-0 grid lg:grid-cols-2 lg:w-[70%] lg:m-auto  place-items-center gap-y-12 grid-cols-1">
          <img className="lg:block hidden" src={frame2} alt="frame" />
          <div className="space-y-5 lg:px-[50px] lg:max-w-[585px] md:max-w-[585px]">
            <h3 className="font-bold lg:text-2xl md:text-2xl text-lg text-center lg:text-left">
              Client-Centric Approach
            </h3>
            <p className="text-[#222222]  poppins lg:text-left text-center lg:text-base text-sm">
              Your success is our priority. We take the time to understand your
              unique goals and tailor our strategies to meet your specific
              needs.
            </p>
          </div>
          <img className="lg:hidden block" src={frame2} alt="frame" />
        </div>
        <div className="py-10 lg:py-0 grid lg:grid-cols-2 lg:w-[70%] lg:m-auto  place-items-center gap-y-12 grid-cols-1">
          <div className="space-y-5 lg:px-[50px] lg:max-w-[585px] md:max-w-[585px]">
            <h3 className="font-bold lg:text-2xl md:text-2xl text-lg text-center lg:text-left">
              Transparent Communication
            </h3>
            <p className="text-[#222222]  poppins lg:text-left text-center lg:text-base text-sm">
              We believe in open and honest communication every step of the way.
              You'll always be kept in the loop, with regular updates and
              reports on your campaign's progress.
            </p>
          </div>
          <img className="" src={frame3} alt="frame" />
        </div>
      </div>
    </section>
  );
};

export default Why;
