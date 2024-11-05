import { twMerge } from 'tailwind-merge';

export const ColorSelector = ({ color, isSelected, setSelectedWatch }) => {
    const selectedChoiceStyling = "w-7 h-7";

    return (
        <div className={twMerge(`w-5 h-5 cursor-pointer rounded-full border-solid border-white border-2 bg-[${color}]`, isSelected && selectedChoiceStyling)}
        onClick={setSelectedWatch}>
        </div>
    )
}