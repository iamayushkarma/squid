import "@/components/sections/section.css";
import DarkLogo from "/svg/dark-logo.svg";
import DemoProfileInfo from "/svg/profile-skleton.svg";
import ProfilePhotoSkleton from "/svg/profile-photo-skleton.svg";
import ProfilePhotoInfo from "/svg/profile-photo-info.svg";
import ProfileInfoShadow from "/svg/profile-info-shadow.svg";
import GroupOne from "/svg/group-one.svg";
import GroupTwo from "/svg/group-two.svg";
import GroupThree from "/svg/group-three.svg";
import ReverseSkleton from "/svg/reverse-skleton.svg";
import Chart from "/svg/chart.svg";
import Graph from "/svg/graph.svg";
function GridMask() {
  return (
    <div className="relative z-20 w-full mt-15">
      hello
      <svg
        width="100%"
        height="475"
        viewBox="0 0 2560 475"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 474.398V0.518438C270.53 70.1574 742.76 116.066 1280 116.066C1817.24 116.066 2289.47 69.9294 2560 0V474.398H2560C2289.47 406.237 1817.24 361.483 1280 361.483C742.76 361.483 270.53 406.237 0 474.398H0Z"
          fill="url(#paint0_linear_408_1212)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_408_1212"
            x1="0"
            y1="53.9088"
            x2="2560"
            y2="250.81"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9898" />
            <stop offset="1" stopColor="#8054FF" />
          </linearGradient>
        </defs>
      </svg>
      {/* Grid section */}
      <div className="w-210 align-grid rounded-3xl p-8 mx-auto absolute top-[-30%] h-125 bg-[#131415] grid grid-cols-3 gap-8 ">
        {/* First column */}
        <div className="bg-[#222228] rounded-2xl">
          {/* Logo */}
          <div className="p-6 flex items-center justify-center mx-auto w-4/5 border-b-2 border-[#313139]">
            <img src={DarkLogo} />
          </div>
          {/* Profile skleton */}
          <div className="p-6 flex gap-5 flex-col w-4/5 start">
            {Array.from({ length: 5 }).map((_, index) => (
              <img className="" key={index} src={DemoProfileInfo} />
            ))}
          </div>
          <div className="flex w-full p-4 mt-2">
            <img className="mx-auto" src={ProfilePhotoSkleton} />
          </div>
        </div>
        {/* Second column */}
        <div className="rounded-2xl grid grid-rows-2 gap-6">
          <div className="bg-[#222228] rounded-2xl flex items-center justify-center">
            <img src={Chart} />
          </div>
          <div className="bg-[#222228] rounded-2xl px-6">
            <div className="flex w-full py-4 mt-2 border-b-2 border-[#313139]">
              <img className="mx-auto" src={ReverseSkleton} />
            </div>
            <div className="py-4 mt-4">
              <img className="mx-auto" src={Graph} />
            </div>
          </div>
        </div>
        {/* Third column */}
        <div className="grid gap-6" style={{ gridTemplateRows: "7.5fr 2.5fr" }}>
          <div className="bg-[#222228] rounded-2xl px-6 relative">
            <div className="flex w-full py-4 mt-2 ">
              <img className="mx-auto" src={ReverseSkleton} />
            </div>
            <img
              className="mx-auto absolute bottom-0"
              src={ProfileInfoShadow}
            />
            <div className="flex flex-col gap-2">
              <img className="mx-auto" src={ProfilePhotoInfo} />
              <img className="mx-auto" src={GroupOne} />
              <img className="mx-auto" src={GroupTwo} />
              <img className="mx-auto" src={GroupThree} />
            </div>
          </div>
          <div className="bg-[#222228] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default GridMask;
