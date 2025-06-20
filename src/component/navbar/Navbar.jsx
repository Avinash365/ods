import Link from 'next/link';
import { SchoolName } from './SchoolName';
import { IconsBox } from './IconsBox';
import { JoinUsBtn } from './JoinUsBtn';



export const Navbar = () => {
  return (
     <div className="fixed top-0 z-50 py-2 w-full lg:pr-10 flex items-center justify-between bg-white/40 shadow-md">
      {/* Left: Logo + School Name */}
      <div className="flex items-center gap-4  ml-10">
        {/* <img src="./logo.png" width={80} alt="Logo" /> */}
        <SchoolName className="max-[425px]:hidden sm:block" />
      </div>


      {/* Center: Navigation Links */}
      <div className="hidden lg:flex justify-between lg:gap-3 h-[65px] ">
        <NavLink to="/" text="Home" className="hoverd"/>
        <NavLink to="/about" text="About Us" />
        <NavLink to="/gallery" text="Gallery" />
        <NavLink to="/services" text="Services" />
        <NavLink to="/contact" text="Contact Us" />
      </div> 

      <div className='min-[375px]:hidden min-[547px]:block'>
           <JoinUsBtn />
      </div>
     

      {/* Right: Icons */}

        <div className="items-center gap-2">
          <IconsBox />
      </div>
    </div>
  );
};


export const NavLink = ({ to, text, className }) => {
  return (
    <Link
      href={to}
      className={`hover:border-b-4 p-3 mt-2 text-nav-text font-medium text-[20px] w-fit h-fit ${className || ''}`}
    >
      <p>{text}</p>
    </Link>
  );
};
