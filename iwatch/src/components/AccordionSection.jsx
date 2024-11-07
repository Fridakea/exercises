"use client";

import Image from "next/image";
import { useState } from "react";
import { Accordion } from "@/components/Accordion";
import imgN from "../images/img-5.png";
import img0 from "../images/img-1.png";
import img1 from "../images/img-4.png";
import img2 from "../images/img-3.png";
import img3 from "../images/img-2.png";

export const AccordionSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const faqImageStyle = "w-full h-full object-cover";

  return (
    <section className="px-20 py-16 bg-[#DEE7ED] rounded-3xl text-[#243642]">
      <h1 className="text-[54px] leading-2 font-bold">
        Frequently Asked Questions
      </h1>
      <p className="text-lg">
        Here are some of the most frequently asked questions about our products
        and us. If you didn't find what you were looking for, please reach out
        to us through our contact formular.
      </p>

      <div className="flex flex-row items-center gap-8">
        <div className="flex-[1.15]">
          <div className="flex flex-col gap-2">
            <Accordion
              title="Apple Watch and iPhone"
              text="Combining Apple Watch and iPhone opens up a world of features that make each device better. You can do things like create a custom route with Maps on your iPhone, then download it to your watch to use any time. Or start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone."
              isActive={activeAccordion === 0}
              onClick={() =>
                activeAccordion === 0
                  ? setActiveAccordion(null)
                  : setActiveAccordion(0)
              }
            />
            <Accordion
              title="Apple Watch and Apple Fitness+"
              text="Apple Watch supercharges your Fitness+ experience with real‑time, personalized metrics onscreen, like your heart rate, calories burned, and Activity rings.26 And you get the freedom of audio‑guided walks, runs, and meditations with just your watch and AirPods."
              isActive={activeAccordion === 1}
              onClick={() =>
                activeAccordion === 1
                  ? setActiveAccordion(null)
                  : setActiveAccordion(1)
              }
            />
            <Accordion
              title="Apple Watch and AirPods"
              text="You can do so much with just Apple Watch and AirPods — all without your iPhone. Take calls, stream music and podcasts, hear incoming notifications. Even respond to messages with Siri."
              isActive={activeAccordion === 2}
              onClick={() =>
                activeAccordion === 2
                  ? setActiveAccordion(null)
                  : setActiveAccordion(2)
              }
            />
            <Accordion
              title="iWatch call"
              text="With iWatch it´s possible to do all of the same things you can do with your iPhone, or very close! Our iWatch does even makes phonecalls much easier. Need both of your hands while on the phone? No problem. Need to be on the move while talking? No problem. Don´t belive it? Why don´t you try it out for yourself? Get your iWatch today!"
              isActive={activeAccordion === 3}
              onClick={() =>
                activeAccordion === 3
                  ? setActiveAccordion(null)
                  : setActiveAccordion(3)
              }
            />
          </div>
        </div>

        <div className="flex-1">
          {activeAccordion === null && (
            <Image
              className="w-full h-full"
              src={imgN}
              alt={"Image af three iWatches"}
            />
          )}
          {activeAccordion === 0 && (
            <Image
              className={faqImageStyle}
              src={img0}
              alt={"Image af three iWatches"}
            />
          )}
          {activeAccordion === 1 && (
            <Image
              className={faqImageStyle}
              src={img1}
              alt={"Image af three iWatches"}
            />
          )}
          {activeAccordion === 2 && (
            <Image
              className={faqImageStyle}
              src={img2}
              alt={"Image af three iWatches"}
            />
          )}
          {activeAccordion === 3 && (
            <Image
              className={faqImageStyle}
              src={img3}
              alt={"Image af three iWatches"}
            />
          )}
        </div>
      </div>
    </section>
  );
};
