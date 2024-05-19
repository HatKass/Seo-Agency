import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonials } from "@/constants";

const Testimonial = () => {
  return (
    <section className="flex justify-center flex-col  items-center p-12 bg-gradient-to-r from-[#D2E2FF] to-[#5375D9] ">
      <h3 className="lg:text-4xl md:text-3xl text-2xl mb-10 font-bold text-center">
        Testimonials
      </h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className="lg:w-[80%] w-full "
      >
        <CarouselContent>
          {Testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 basis-full lg:basis-1/3"
            >
              <Card className="rounded-[20px]">
                <CardContent className="flex flex-col gap-y-5 p-5 ">
                  <p className="poppins text-[10px]  lg:text-left lg:text-base md:text-left md:text-base">
                    {testimonial.comment}
                  </p>
                  <div className="flex gap-x-[10px]">
                    <img
                      className="size-9 lg:size-fit md:size-fit"
                      src={testimonial.img}
                      alt="author"
                    />
                    <div>
                      <h4 className="font-semibold text-xs lg:text-base">
                        {testimonial.author}
                      </h4>
                      <span className="text-xs lg:text-base md:text-base">
                        {testimonial.profile}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonial;
