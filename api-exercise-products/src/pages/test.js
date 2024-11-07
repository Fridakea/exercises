export default async function Page() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <>
      <h1>test</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}
