import Button from "@/components/ui/Button";
import Hero from "/svg/hero.svg";
import Ellips from "/svg/ellips.svg";
import HeroEllipsOne from "/svg/hero-ellips-one.svg";
import HeroEllipsTwo from "/svg/hero-ellips-two.svg";
import HeroEllipsThree from "/svg/hero-ellips-three.svg";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-svh w-full bg-background flex justify-center items-center text-center"
    >
      <img className="absolute z-5 top-0" src={Hero} />
      <img className="absolute top-[1%]" src={Ellips} />
      <img className="absolute left-[4%] top-[60%] z-10" src={HeroEllipsOne} />
      <img className="absolute top-[9%] right-1/2 z-10" src={HeroEllipsTwo} />
      <img
        className="absolute top-[45%] right-[8%] z-10"
        src={HeroEllipsThree}
      />

      <div className="relative z-20">
        {/* backgtound gradient */}
        <h1 className="text-text-primary text-[4rem] font-semibold w-3xl leading-20">
          Beautiful Landing Page Design for You
        </h1>
        <p className="text-text-secondary mt-4 w-xl mx-auto font-normal text-[1.13rem]">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>
        <Button text="Download Template" className="mt-6" />
      </div>
    </section>
  );
}

export default HeroSection;
