// Fetch using the SWR hook
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useProducts() {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products`,
    fetcher
  );

  console.log(data);

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
export function useProduct(id) {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${id}`,
    fetcher
  );

  console.log(data);

  return {
    product: data,
    isLoading,
    isError: error,
  };
}
