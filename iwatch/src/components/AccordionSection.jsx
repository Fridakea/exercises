"use client";

import { useState } from 'react';
import { Accordion } from "@/components/Accordion";

export const AccordionSection = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    return (
        <section className="max-w-[650px] text-white">
          <h1 className="text-[54px] leading-2 font-bold">Frequently Asked Questions</h1>
          <p className="text-lg mb-10">Here are some of the most frequently asked questions about our products and us. If you didn't find what you were looking for, please reach out to us through our contact formular.</p>

          <div className='flex flex-col gap-2'>
            <Accordion title='Accordion titel' text='Tekst' isActive={activeAccordion === 0} onClick={() => setActiveAccordion(0)} />
            <Accordion title='Accordion titel' text='Tekst' isActive={activeAccordion === 1} onClick={() => setActiveAccordion(1)} />
            <Accordion title='Accordion titel' text='Tekst' isActive={activeAccordion === 2} onClick={() => setActiveAccordion(2)} />
            <Accordion title='Accordion titel' text='Tekst' isActive={activeAccordion === 3} onClick={() => setActiveAccordion(3)} />
          </div>
        </section>
    )
}