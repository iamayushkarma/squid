import Orbit from "/svg/orbit.svg";
import LightLogo from "/svg/light-logo.svg";
import Mailchimp from "/svg/mailchimp.svg";
import Studio from "/svg/studio.svg";
import Gear from "/svg/gear.svg";
import Point from "/svg/point.svg";
import Button from "../ui/Button";

function GuideSection() {
  return (
    <section
      id="section-two"
      className="w-4/5 relative mx-auto flex gap-5 mt-10 space-y-10"
    >
      {/* Orbit section */}
      <div>
        <img src={Orbit} />
        <div>
          <img className="absolute  top-78 left-[19.1rem]" src={LightLogo} />
          <img className="absolute top-52 left-36" src={Gear} />
          <img className="absolute top-92 left-[8.7rem]" src={Point} />
          <img className="absolute top-118 left-56" src={Studio} />
          <img className="absolute top-114 left-114" src={Point} />
          <img className="absolute top-60 left-120" src={Mailchimp} />
          <img className="absolute top-36.5 left-98" src={Point} />
        </div>
      </div>
      {/* Content section */}
      <div className="flex w-[27.6rem] flex-col items-start justify-center">
        <h2 className="text-text-primary font-semibold text-5xl ">
          We're here to guide and help you at all times
        </h2>
        <p className="text-text-secondary mt-8 text-[1.125rem] w-4/5">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>
        <Button className="mt-8" text="Download" />
      </div>
    </section>
  );
}

export default GuideSection;
