import { useProducts } from "../fetch";
import { Spinner } from "./Spinner";

export const Content = () => {
  const { products, isLoading } = useProducts();

  console.log(products);
  if (isLoading) return <Spinner />;
  return <h1>Welcome back</h1>;
};
