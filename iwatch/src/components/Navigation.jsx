import { twMerge } from 'tailwind-merge';

import { IoLogoApple } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

export const Navigation = () => {
    const navLinkStyling = "px-7 py-1 text-white";

    return (
        <nav className="flex flex-row justify-between items-center mb-24">
            <a href="/"><IoLogoApple className="w-12 h-12"/></a>

            <div className="flex flex-row gap-4 text-lg">
                <a className={navLinkStyling} href="#">Mac</a>
                <a className={navLinkStyling} href="#">iPhone</a>
                <a className={navLinkStyling} href="#">iPad</a>
                <a className={twMerge(navLinkStyling, 'bg-white rounded-full text-[#B6CCDA]')} href="#">iWatch</a>
                <a className={navLinkStyling} href="#">Support</a>
            </div>

            <div className="flex flex-row g-4 items-center">
                <a href="#"><CiSearch className="w-6 h-6"/></a>
                <hr className="w-6 h-1 rotate-90" />
                <a href="#"><FiShoppingBag className="w-6 h-6 stroke-1"/></a>
            </div>
        </nav>
    )
}