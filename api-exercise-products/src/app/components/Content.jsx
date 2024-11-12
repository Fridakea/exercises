"use client";
import Image from "next/image";
import { useProducts } from "../fetch";
import { Spinner } from "./Spinner";

export const Content = () => {
  const { products, isLoading } = useProducts();

  console.log(products);
  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-row flex-wrap gap-6">
      {products.products.map((product) => (
        <a
          href={`/products/${product.id}`}
          key={product.id}
          className="w-[250px] px-4 py-8 bg-gray-800 rounded-xl flex flex-col grow"
        >
          <Image
            className="w-[75%] self-center"
            src={product.images[0]}
            alt="product"
            width={48}
            height={48}
          />
          {/* {product.images.map((productImage) => (
            <Image src={productImage} alt="product" width={96} height={96} />
          ))} */}
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        </a>
      ))}
    </div>
  );
};
