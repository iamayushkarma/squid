import Cube from "/svg/cube.svg";
import Layer from "/svg/layer.svg";
import T from "/svg/t.svg";
import GradientBgIcon from "/svg/gradient-bg-icon.svg";
import Cross from "/svg/cross.svg";
import Monitor from "/svg/monitor.svg";

const FeatureBoxIcon = [
  { icon: Cube, simpleIcon: false },
  { icon: Layer, simpleIcon: false },
  { icon: GradientBgIcon, simpleIcon: true },
  { icon: T, simpleIcon: false },
  { icon: Cross, simpleIcon: false },
  { icon: Monitor, simpleIcon: false },
];

interface FeatureBoxProp {
  icon: string;
  simpleIcon?: boolean;
}

function FeatureSection() {
  return (
    <section id="section-one" className="w-4/5 mx-auto">
      {/* Content */}
      <div>
        <h2 className="font-semibold text-5xl text-text-primary">
          Feature Boxes
        </h2>
        <p className="text-text-secondary text-[1.125rem] w-xl mt-6">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem
        </p>
      </div>
      {/* Feature box grid */}
      <div className="grid grid-cols-3 gap-6 mt-10">
        {FeatureBoxIcon.map((item, index) => (
          <FeatureBox
            key={index}
            icon={item.icon}
            simpleIcon={item.simpleIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;

function FeatureBox({ icon, simpleIcon }: FeatureBoxProp) {
  return (
    <div className="h-92 rounded-2xl gap-6 flex flex-col justify-center items-center p-6 bg-background-secondary hover:bg-[#2a2a30] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      {simpleIcon ? (
        <img src={icon} />
      ) : (
        <div className="size-26 rounded-2xl flex items-center justify-center bg-[#222228]">
          <img src={icon} />
        </div>
      )}
      <h2 className="font-semibold text-[1.25rem] text-text-primary">
        Fully Customizable
      </h2>
      <p className="font-normal text-[0.88rem] text-center text-text-secondary">
        A good design is not only aesthetically pleasing, but also functional.
        It should be able to solve the problem
      </p>
    </div>
  );
}
