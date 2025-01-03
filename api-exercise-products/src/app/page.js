export default async function Home() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <div>
      {data.products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
