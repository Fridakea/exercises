import Image from "next/image";
import { useProducts } from "../fetch";
import { Spinner } from "./Spinner";

export const Content = () => {
  const { products, isLoading } = useProducts();

  console.log(products);
  if (isLoading) return <Spinner />;

  return (
    <div>
      {products.products.map((product) => (
        <div key={product.id} className="bg-red-400">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {product.images.map((productImage) => (
            <Image src={productImage} alt="product" width={48} height={48} />
          ))}
        </div>
      ))}
    </div>
  );
};
