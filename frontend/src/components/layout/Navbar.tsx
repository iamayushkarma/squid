import { Link } from "react-router-dom";
import Button from "../ui/Button";
import navlogo from "/svg/logo.svg";

function Navbar() {
  return (
    <nav className="absolute top-0 z-10 w-full text-text-primary flex items-center bg-transparent">
      <div className="w-3/4 mx-auto mt-8 flex  justify-between">
        <img className="w-[131.98px]" src={navlogo} />
        <div className="flex items-center gap-8">
          <Link className="text-text-secondary" to="/">
            Home
          </Link>
          <Button text="Download Template" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
