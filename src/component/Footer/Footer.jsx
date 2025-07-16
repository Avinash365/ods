import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { IoLocationSharp } from "react-icons/io5"; 
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#17246D] text-white'>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 py-10  text-sm text-white md:px-10">
            
            {/* Address & Socials */}
            <div className="space-y-3">
                <h1 className="text-xl font-semibold mb-8">LOGO</h1>
                <p className="mb-4 leading-relaxed">
                    Pandit Nehru Marg, opposite DKV College,<br />
                    Indradeep Society,<br />
                    Jamnagar, Gujarat 361008
                </p>
                <div className="flex gap-4 items-center">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-xl hover:text-red-600" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-xl hover:text-blue-600" />
                    </a>
                    <a href="https://wa.me/912882553908" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className="text-xl hover:text-green-500" />
                    </a> 
                    <a href="https://wa.me/912882553908" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className="text-xl hover:text-green-500" />
                    </a>
                </div>
            </div>

            {/* Useful Links */}
            <div className="space-y-3">
                <h1 className="text-xl font-semibold mb-8">Useful Links</h1>
                <ul className="space-y-2">
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
                    <li><Link href="/photo-gallery" className="hover:underline">Photo Gallery</Link></li>
                    <li><Link href="/video-gallery" className="hover:underline">Video Gallery</Link></li>
                    <li><Link href="/admission" className="hover:underline">Admission</Link></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
                <h1 className="text-xl font-semibold mb-8">Get In Touch</h1>

                <IconWithText Icon={IoLocationSharp}>
                    Pandit Nehru Marg, opposite DKV College,<br />
                    Indradeep Society,<br />
                    Jamnagar, Gujarat 361008
                </IconWithText>
                <IconWithText Icon={MdOutlineMailOutline}>
                    contact@xaviers.co.in
                </IconWithText>
                <IconWithText Icon={FaPhone}>
                    +91 288 2553908
                </IconWithText>
            </div>

            {/* Footer Bottom
            <div className="col-span-3 text-center space-y-3">
                <hr className="border-white/30" />
                <Link href="#" className="hover:underline">
                    Copyright © 2024 Lofty Technologies Pvt. Ltd. All Rights Reserved
                </Link>
            </div> */}
        </div> 
                <div className="text-center space-y-3 py-4">
                <hr className="border-white/30" />
                <Link href="#" className="hover:underline">
                    Copyright © 2024 Lofty Technologies Pvt. Ltd. All Rights Reserved
                </Link>
            </div>
        </div>
    );
};

export default Footer;

// Reusable Icon + Text component
const IconWithText = ({ Icon, children }) => (
    <div className="flex items-center gap-3">
        {Icon && <Icon className="rounded-full bg-white/50 p-2 min-w-[30px]" size={30} />}
        <p className="text-sm leading-relaxed">{children}</p>
    </div>
);
