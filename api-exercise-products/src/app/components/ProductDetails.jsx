import { useProduct } from "@/app/fetch.js";

export const ProductDetails = ({ id }) => {
  const { product, isLoading } = useProduct(id);

  return <div>My Post: {product?.title}</div>;
};
