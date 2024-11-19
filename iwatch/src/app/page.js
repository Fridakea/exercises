import { AccordionSection } from "@/components/AccordionSection";
import { Button } from "@/components/Button";
import { CounterSection } from "@/components/CounterSection";
import { Navigation } from "@/components/Navigation";
import { ProductSelector } from "@/components/ProductSelector";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#B6CCDA] to-[#C8DCE5]">
      <div className="max-w-[1200px] mx-auto p-10">
        <Navigation />

        <section className="mb-32 flex flex-row gap-8">
          <div className="flex-[1.45] text-white">
            <h1 className="mt-24 mb-20 text-[54px] leading-snug">
              <strong>The Perfect Moment</strong> Between Past And Future.
            </h1>
            <Button text="Buy Now" />

            <div className="mt-40 flex flex-row gap-4 items-center text-white">
              <IoIosArrowRoundBack className="w-6 h-6 text-white" />
              1
              <IoIosArrowRoundForward className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <ProductSelector />
          </div>
        </section>

        <AccordionSection />

        <CounterSection />
      </div>
    </div>
  );
}
