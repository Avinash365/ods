import Link from 'next/link';
import { SchoolName } from './SchoolName';
import { IconsBox } from './IconsBox';



export const Navbar = () => {
  return (
    <div className="py-2 lg:pr-10 flex items-center justify-between shadow-md  bg-white">
      {/* Left: Logo + School Name */}
      <div className="flex items-center gap-4  ml-10">
        <img src="./logo.png" width={80} alt="Logo" />
        <SchoolName className="max-[425px]:hidden sm:block" />
      </div>


      {/* Center: Navigation Links */}
      <div className="hidden lg:flex gap-6 h-[65px] ">
        <NavLink to="/" text="Home" className="hoverd"/>
        <NavLink to="/about" text="About Us" />
        <NavLink to="/gallery" text="Gallery" />
        <NavLink to="/services" text="Services" />
        <NavLink to="/contact" text="Contact Us" />
      </div>

      {/* Right: Icons */}

        <div className="items-center gap-2">
          <IconsBox />
      </div>
    </div>
  );
};


export const NavLink = ({ to, text }) => {
  return (
    <Link href={to}
      className='hover:border-b-4 p-3 m-2 text-nav-text font-medium text-[20px]'
    >
      {text}
    </Link>
  )
} 
