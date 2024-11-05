import Image from 'next/image';

export const VariantSelector = ({ bgColor, img, imgAlt, onClick }) => {
    return (
        <div className='relative cursor-pointer px-5 py-2 flex-1 flex justify-center' onClick={onClick}>
            <div className={`w-full h-[65%] absolute bottom-0 bg-[${bgColor}] rounded-xl`}>
            </div>
            <Image className='relative z-10' src={img} alt={`iWatch i farven ${imgAlt}`}/>
        </div>
    )
}