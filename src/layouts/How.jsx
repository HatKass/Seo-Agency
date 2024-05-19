import { How_We_Work } from "../constants";

const How = () => {
  return (
    <section className="lg:space-y-20 space-y-14 poppins">
      <h3 className="text-center  lg:text-2xl md:text-[35px] text-xl font-semibold">
        How we work
      </h3>
      <div className="flex flex-wrap gap-x-[30px] gap-y-7 justify-center">
        {How_We_Work.map((service, index) => (
          <div
            key={index}
            className="flex lg:items-start items-center flex-col lg:max-w-[270px] space-y-[10px] p-[30px] bg-[#EDF2FF] hover:bg-[#5375D9] border hover:border-black transition-all duration-300 ease-in-out "
          >
            <img
              className="lg:w-[50px] lg:h-[45px] w-[30px] h-[30px] "
              src={service.icon}
              alt="Icon"
            />
            <h3 className="font-bold lg:text-left text-center lg:text-[24px]">
              {service.title}
            </h3>
            <p className="lg:max-w-[210px] lg:text-left text-center">
              {service.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default How;
