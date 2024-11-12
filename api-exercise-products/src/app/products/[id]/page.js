export default async function Page({ params }) {
  const id = (await params).id;

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) return <h1>404 error</h1>;
  const product = await response.json();

  return <div>{product?.title}</div>;
}
