import LightLogo from "/svg/light-logo.svg";
import Twitter from "/svg/twitter.svg";
import Discord from "/svg/discord.svg";
import Linkedin from "/svg/linkedin.svg";
import { Link } from "react-router-dom";

type FooterLinksProp = {
  index: number;
  logo: string;
};
const futterSocialLinks = [Twitter, Linkedin, Discord];
const footerLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Section One",
    link: "#section-one",
  },
  {
    name: "Section Two",
    link: "#section-two",
  },
  {
    name: "Section Three",
    link: "#section-three",
  },
];
function Footer() {
  return (
    <div className="h-90 flex flex-col">
      <div className="w-full bg-background-secondary h-67">
        <div className="w-4/5 mx-auto py-12 flex">
          {/* Logo and sub-heading section  */}
          <div className="w-[60%] flex justify-center flex-col">
            <Link to="/">
              <img src={LightLogo} className="w-14" alt="Logo" />
            </Link>
            <p className="w-[45%] text-text-secondary mt-8 text-[.88rem]">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>
          </div>
          {/* Footer links */}
          <div className="w-[40%]">
            <h2 className="font-semibold text-[1rem] text-text-primary">
              Sections
            </h2>
            <div className="flex w-full justify-between">
              {Array.from({ length: 3 }).map((_, index) => (
                <ul
                  key={index}
                  className="text-text-secondary flex flex-col mt-3"
                >
                  {footerLinks.map((text, index) => (
                    <li className="py-1.5 text-[.88rem] transition-all duration-150 hover:text-text-primary ">
                      <a href={text.link} key={index}>
                        {text.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* footer end tag */}
      <div className="flex h-23 items-center justify-center">
        <div className="w-4/5 mx-auto flex justify-between items-center">
          <h3 className="text-text-secondary text-[0.88rem]">
            All Rights Reservd Inkyy.com 2022
          </h3>
          <div className="flex gap-4">
            {futterSocialLinks.map((logo, index) => (
              <FooterLinks index={index} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function FooterLinks({ index, logo }: FooterLinksProp) {
  return (
    <div
      key={index}
      className="size-10 cursor-pointer group bg-background-secondary flex items-center justify-center rounded-2xl"
    >
      <img
        className="group-hover:scale-[1.12] transition-all duration-250"
        src={logo}
      />
    </div>
  );
}
