import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQs_vector from "../assets/images/FAQs0.png";
import FAQs_vector2 from "../assets/images/FAQs.png";
import group from "../assets/images/Group.png";

const FAQs = () => {
  return (
    <section className="grid lg:w-[70%] m-auto lg:grid-cols-2 grid-cols-1 place-items-center pb-20">
      <div className="flex flex-col space-y-[20px]  ">
        <h3 className="font-bold text-center lg:text-left md:text-left lg:text-[24px] md:text-[24px]">
          Proven Track Record
        </h3>
        <p className="lg:max-w-[350px] text-center md:text-left lg:text-left px-2">
          With years of experience and a portfolio of successful projects, we
          have the expertise to deliver results-driven solutions.
        </p>
        <button className="roboto lg:self-baseline md:self-baseline self-center  text-white bg-[#5375D9] rounded-3xl font-bold lg:px-6 lg:py-[15px] py-2 px-4">
          GET STARTED
        </button>
      </div>
      <img className="lg:p-20 p-10 " src={group} alt="vector" />
      <img
        src={FAQs_vector}
        className="lg:p-20 p-10 lg:block hidden"
        alt="FAQs"
      />
      <div className="flex flex-col space-y-5">
        <h3 className="poppins font-bold lg:text-2xl text-center lg:text-left">
          FAQs
        </h3>
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-y-4 items-center lg:items-start"
        >
          <AccordionItem value="item-1" className="flex flex-col items-center">
            <AccordionTrigger className="bg-[#EAF0FF] lg:min-w-[500px] md:min-w-[430px] sm:min-w-[400px] max-w-[230px]  px-5 py-4 rounded-[10px] mb-[10px] poppins lg:text-base text-[10px]">
              <p>Why Your success is our priority?</p>
            </AccordionTrigger>
            <AccordionContent className="px-5 py-4 lg:max-w-[500px] md:max-w-[430px] sm:max-w-[400px] max-w-[230px] lg:text-base text-xs">
              We take the time to understand your unique goals and tailor our
              strategies to meet your specific needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="flex flex-col items-center">
            <AccordionTrigger className="bg-[#EAF0FF] px-5 py-4 rounded-[10px] mb-[10px] lg:min-w-[500px] md:min-w-[430px] sm:min-w-[400px] max-w-[230px]  poppins lg:text-base text-[10px] ">
              How long does it take to see the results?
            </AccordionTrigger>
            <AccordionContent className="px-5 py-4 lg:max-w-[500px] md:max-w-[430px] sm:max-w-[400px] max-w-[230px] lg:text-base text-xs ">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="flex flex-col items-center">
            <AccordionTrigger className="bg-[#EAF0FF] px-5 py-4 rounded-[10px] mb-[10px] lg:min-w-[500px] md:min-w-[430px] sm:min-w-[400px] max-w-[230px]  poppins lg:text-base text-[10px] ">
              Can you guarantee us the results?
            </AccordionTrigger>
            <AccordionContent className="px-5 py-4 lg:max-w-[500px] md:max-w-[430px] sm:max-w-[400px] max-w-[230px] lg:text-base text-xs ">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <img
        src={FAQs_vector}
        className="lg:p-20 p-10 lg:hidden block"
        alt="FAQs"
      />
      <div className="flex flex-col space-y-5 p-4">
        <h3 className="poppins font-bold lg:text-2xl text-center lg:text-left">
          Contact us
        </h3>
        <p className="poppins  lg:text-left text-center lg:text-base text-sm">
          With years of experience and a portfolio of successful projects, we
          have the expertise to deliver results-driven solutions.
        </p>
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              YOUR FULL NAME
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="email"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              YOUR EMAIL ADDRESS
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="message"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              YOUR MESSAGE
            </label>
          </div>
          <button className="roboto lg:self-baseline md:self-baseline self-center  text-white bg-[#5375D9] rounded-3xl font-bold lg:px-6 lg:py-[10px] py-2 px-4">
            GET STARTED
          </button>
        </div>
      </div>
      <img src={FAQs_vector2} className=" " alt="FAQs" />
    </section>
  );
};

export default FAQs;
