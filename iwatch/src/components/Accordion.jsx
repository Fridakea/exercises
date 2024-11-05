import { twMerge } from 'tailwind-merge'

export const Accordion = ({ title, text, isActive, onClick }) => {
    const activeAccordionStyling = "h-full bg-[#A5BFCF] rounded-3xl"

    return (
        <div className={twMerge('transition-all h-16 px-6 py-1 overflow-hidden cursor-pointer border-solid border-2 border-white rounded-2xl text-white', isActive && activeAccordionStyling)} onClick={onClick}>
            <h2 className="py-4 text-xl font-medium">{title}</h2>
            <hr className="w-full" />
            <p className="p-2">{text}</p>
        </div>
    )
}