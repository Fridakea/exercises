"use client";

import { useState } from 'react';

import { ColorSelector } from "./ColorSelector";
import { ProductCard } from "./ProductCard";
import { VariantSelector } from './VariantSelector';

import navy from "../images/navy.png";
import mint from "../images/mint.png";
import ocean from "../images/ocean.png";

export const ProductSelector = () => {
    const [seletedWatchIndex, setSelectedWatchIndex] = useState(0);
    console.log(seletedWatchIndex);

    return (
        <section>
            <div className='mb-16 flex flex-row items-center'>
                <ProductCard selectedWatch={seletedWatchIndex} />

                <div className='flex flex-col gap-4 items-center'>
                    <ColorSelector color={'#404354'} isSelected={seletedWatchIndex === 0} setSelectedWatch={() => setSelectedWatchIndex(0)}/>
                    <ColorSelector color={'#58D7C4'} isSelected={seletedWatchIndex === 1} setSelectedWatch={() => setSelectedWatchIndex(1)}/>
                    <ColorSelector color={'#F2CEC6'} isSelected={seletedWatchIndex === 2} setSelectedWatch={() => setSelectedWatchIndex(2)}/>
                </div>
            </div>

            <div className='w-full flex flex-row gap-7'>
                <VariantSelector bgColor='rgba(67,69,88,0.6)' img={navy} imgAlt='navy' onClick={() => setSelectedWatchIndex(0)} />
                <VariantSelector bgColor='rgba(106,221,204,0.6)' img={mint} imgAlt='mint' onClick={() => setSelectedWatchIndex(1)} />
                <VariantSelector bgColor='rgba(249,205,196,0.6)' img={ocean} imgAlt='ocean' onClick={() => setSelectedWatchIndex(2)} />
            </div>
        </section>
    )
}