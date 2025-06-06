
import { NavLink } from "./Navbar";

export const Dropdown = () => {
  return (
    <div className="flex flex-col w-[140px] bg-white  shadow-md z-50">
      <NavLink to="/" text="Home" />
      <NavLink to="/about" text="About Us" />
      <NavLink to="/gallery" text="Gallery" />
      <NavLink to="/services" text="Services" />
      <NavLink to="/contact" text="Contact Us" />
    </div>
  );
};