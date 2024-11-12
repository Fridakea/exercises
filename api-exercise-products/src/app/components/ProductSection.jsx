import Image from "next/image";
import { useProducts } from "../fetch";
import { Spinner } from "./Spinner";

export const ProductSection = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  return (
    <div>
      {products.products.map((product) => (
        <Image src={product.images[1]} />
      ))}
    </div>
  );
};
