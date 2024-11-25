import { ProductSingleView } from "@/components/ProductSingleView";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <ProductSingleView />
    </div>
  );
}
