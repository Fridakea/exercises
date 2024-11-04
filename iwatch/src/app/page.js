import { Button } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import { ProductVariantSection } from "@/components/ProductVariantSection";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import navy from '../images/navy.png';

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#B6CCDA] to-[#C8DCE5]">
      <div className="max-w-[1200px] mx-auto p-10">
      <Navigation />

      <div className="flex flex-row gap-12">
        <div className="flex-[1.45]">
          <h1 className="mt-24 mb-16 text-[54px] text-white leading-normal"><strong>The Perfect Moment</strong> Between Past And Future.</h1>
          <Button text="Buy Now"/>

          <div className="mt-24 flex flex-row gap-4 items-center text-white">
            <IoIosArrowRoundBack className="w-6 h-6 text-white" />
            1
            <IoIosArrowRoundForward className="w-6 h-6 text-white" />
          </div>
        </div>

      <div className="flex-1">
        <ProductVariantSection />
        </div>
      </div>
      </div>
    </div>
  );
}
