"use client";

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import navy from "../images/navy.png";
import mint from "../images/mint.png";
import ocean from "../images/ocean.png";

export const ProductVariantSection = () => {
    const colorChoice = "w-5 h-5 cursor-pointer rounded-full border-solid border-white border-2";
    const selectedChoice = "w-7 h-7";

    const watchChoice = "relative cursor-pointer px-5 py-2 flex-1 flex justify-center";

    const [seletedWatchIndex, setSelectedWatchIndex] = useState(0);

    return (
        <div>
            <div className='mb-16 flex flex-row items-center'>
                {seletedWatchIndex === 0 && <Image src={navy} alt={"Navy farvet iWatch"}/>}
                {seletedWatchIndex === 1 && <Image src={mint} alt={"Mint farvet iWatch"}/>}
                {seletedWatchIndex === 2 && <Image src={ocean} alt={"Ocean farvet iWatch"}/>}

                <div className='flex flex-col gap-4 items-center'>
                    <div className={twMerge(colorChoice, 'bg-[#404354]', seletedWatchIndex === 0 && selectedChoice)}
                     onClick={() => setSelectedWatchIndex(0)}></div>
                    <div className={twMerge(colorChoice, 'bg-[#58D7C4]', seletedWatchIndex === 1 && selectedChoice)}
                     onClick={() => setSelectedWatchIndex(1)}></div>
                    <div className={twMerge(colorChoice, 'bg-[#F2CEC6]', seletedWatchIndex === 2 && selectedChoice)}
                     onClick={() => setSelectedWatchIndex(2)}></div>
                </div>
            </div>

            <div className='w-full flex flex-row gap-7'>
                <div className={watchChoice} onClick={() => setSelectedWatchIndex(0)}>
                    <div className='w-full h-[65%] absolute bottom-0 bg-[rgba(67,69,88,0.6)] rounded-xl'>
                    </div>
                    <Image className='relative z-10' src={navy} alt={"Navy farvet iWatch"}/>
                </div>

                <div className={watchChoice} onClick={() => setSelectedWatchIndex(1)}>
                    <div className='w-full h-[65%] absolute bottom-0 bg-[rgba(106,221,204,0.6)] rounded-xl'>
                    </div>
                    <Image className='relative z-10' src={mint} alt={"Mint farvet iWatch"}/>
                </div>

                <div className={watchChoice} onClick={() => setSelectedWatchIndex(2)}>
                    <div className='w-full h-[65%] absolute bottom-0 bg-[rgba(249,205,196,0.6)] rounded-xl'>
                    </div>
                    <Image className='relative z-10' src={ocean} alt={"Ocean farvet iWatch"}/>
                </div>
            </div>
        </div>
    )
}