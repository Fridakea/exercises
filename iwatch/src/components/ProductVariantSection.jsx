import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import navy from "../images/navy.png";
import mint from "../images/mint.png";
import ocean from "../images/ocean.png";

export const ProductVariantSection = ({ img }) => {
    const colorChoice = "w-5 h-5 rounded-full border-solid border-white border-2";

    return (
        <div>
            <div className='mb-16 flex flex-row items-center'>
                <Image src={img} alt={"alt"}/>
                <div className='flex flex-col gap-4 items-center'>
                    <div className={twMerge(colorChoice, 'w-7 h-7 bg-[#404354]')}></div>
                    <div className={twMerge(colorChoice, 'bg-[#58D7C4]')}></div>
                    <div className={twMerge(colorChoice, 'bg-[#F2CEC6]')}></div>
                </div>
            </div>

            <div className='w-full flex flex-row gap-7'>
                <div className='relative px-5 py-2 flex-1 flex justify-center'>
                    <div className='w-full h-[65%] absolute bottom-0 bg-[rgba(67,69,88,0.6)] rounded-xl'>
                    </div>
                    <Image className='relative z-10' src={navy} alt={"Navy farvet iWatch"}/>
                </div>

                <div className='relative px-5 py-2 flex-1 flex justify-center'>
                    <div className='w-full h-[65%] absolute bottom-0 bg-[rgba(106,221,204,0.6)] rounded-xl'>
                    </div>
                    <Image className='relative z-10' src={mint} alt={"Mint farvet iWatch"}/>
                </div>

                <div className='relative px-5 py-2 flex-1 flex justify-center'>
                    <div className='w-full h-[65%] absolute bottom-0 bg-[rgba(249,205,196,0.6)] rounded-xl'>
                    </div>
                    <Image className='relative z-10' src={ocean} alt={"Ocean farvet iWatch"}/>
                </div>
            </div>
        </div>
    )
}