import "@/components/sections/section.css";
import Map from "/svg/map.svg";
import Glob from "/svg/glob.svg";
import HeroEllipsTwo from "/svg/hero-ellips-two.svg";
import HeroEllipsThree from "/svg/hero-ellips-three.svg";
import Button from "@/components/ui/Button";

function GetInTouch() {
  return (
    <div id="section-three" className="relative pb-16">
      {/* Map section */}
      <div className="w-[69.3rem] flex py-4 align-grid h-106 rounded-[2.5rem] -top-50 absolute mx-auto bg-linear-to-r from-[#FF9898] to-[#8054ff]">
        <div className="w-[55%] pl-26 flex gap-4 items-start justify-center flex-col">
          <p className="text-text-primary text-[1.25rem]">Love our Our Tool?</p>
          <h3 className="font-semibold text-5xl text-text-primary leading-14">
            Fell Free to Join our 15 Days Free Trial
          </h3>
          <button className="px-7 cursor-pointer mt-2 py-3 bg-background hover:bg-background/90 transition-all duration-200 text-text-primary rounded-[5px] text-[.88rem]">
            Download Template
          </button>
        </div>
        <div className="mt-6">
          <img src={Map} />
        </div>
      </div>
      <div className="pt-72 w-4/5 mx-auto flex">
        <div className="relative w-1/2">
          <img src={Glob} />
          <img className="absolute -top-8 -left-12 z-10" src={HeroEllipsTwo} />
          <img
            className="absolute -bottom-12 -right-2.5 z-10"
            src={HeroEllipsThree}
          />
        </div>
        <div className="px-12 py-10 w-[45%]">
          <h3 className="text-5xl font-semibold text-text-primary">
            Get In Touch
          </h3>
          <p className="text-text-secondary text-[1.125rem] mt-4">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>
          <form action="" className="mt-12 flex flex-col gap-4">
            <input
              type="email"
              className="px-9 py-3 text-text-secondary rounded-[5px] w-[25.31rem] bg-background-secondary"
              placeholder="Your email"
            />
            <input
              type="text"
              className="px-9 py-3 text-text-secondary rounded-[5px] w-[25.31rem] bg-background-secondary"
              placeholder="Name"
            />
            <textarea
              className="px-9 py-3 resize-none h-39 text-text-secondary rounded-[5px] w-[25.31rem] bg-background-secondary"
              placeholder="Name"
            />
            <Button text="Get in Touch" className="w-36" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
