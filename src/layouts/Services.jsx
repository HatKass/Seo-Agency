import { ServicesList } from "../constants";

const Services = () => {
  return (
    <section className="lg:space-y-20 space-y-14 poppins px-4">
      <h3 className="text-center  lg:text-2xl md:text-[35px] text-xl font-bold">
        Our Services
      </h3>
      <div className="flex flex-wrap gap-y-12 gap-x-20 justify-center">
        {ServicesList.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-[10px] "
          >
            <img
              className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
              src={service.Icon}
              alt="vector"
            />
            <h3 className="font-bold  lg:text-[24px] md:text-[24px]">
              {service.title}
            </h3>
            <p className="lg:max-w-[336px] text-center lg:text-base text-sm ">
              {service.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
