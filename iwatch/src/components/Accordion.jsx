import { twMerge } from 'tailwind-merge'
import { MdKeyboardArrowDown } from "react-icons/md";

export const Accordion = ({ title, text, isActive, onClick }) => {
    const activeAccordionStyling = "h-full";
    const activeAccordionIconStyling = "rotate-180"

    return (
        <div className={twMerge('h-20 px-6 py-4 overflow-hidden cursor-pointer border-solid text-[#243642]', isActive && activeAccordionStyling)} onClick={onClick}>
            <div className='flex flex-row items-center justify-between'>
                <h2 className="py-4 text-xl font-medium">{title}</h2>
                <MdKeyboardArrowDown className={twMerge('transition-all duration-300 w-8 h-8', isActive && activeAccordionIconStyling)} />
            </div>
            <hr className="w-full border-[#243642]" />
            <p className="p-2">{text}</p>
        </div>
    )
}